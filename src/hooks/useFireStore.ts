import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import { ChangeEvent, useState } from "react";
import { setImageUrl } from "../services/others/imageSlice";
import { useAppDispatch } from "./reactReduxHooks";

function useFireStore() {
  const dispatch = useAppDispatch();
  const [firebaseError, setFirebaseError] = useState<string | object>("");
  const [uploadProgress, setProgress] = useState<number>(0);
  const [url, setUrl] = useState<string>("");
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);

  const handleImageChange = async (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setPreview(null);
    }
  };

  const storageRef = ref(storage, `profile-student/${image}`);
  const uploadTask = uploadBytesResumable(storageRef, image);

  // Register three observers:
  // 1. 'state_changed' observer, called any time the state changes
  // 2. Error observer, called on failure
  // 3. Completion observer, called on successful completion
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      // Observe state change events such as progress, pause, and resume
      // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      setProgress(progress);
      console.log("Upload is " + progress + "% done");
      switch (snapshot.state) {
        case "paused":
          console.log("Upload is paused");
          break;
        case "running":
          console.log("Upload is running");
          break;
      }
    },
    (error) => {
      // Handle unsuccessful uploads
      console.log(error);
      setFirebaseError(error);
    },
    () => {
      // Handle successful uploads on complete
      // For instance, get the download URL: https://firebasestorage.googleapis.com/...
      getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
        console.log("File available at", downloadURL);
        dispatch(setImageUrl(downloadURL));
        setUrl(downloadURL);
      });
    }
  );
  return {
    firebaseError,
    uploadProgress,
    setProgress,
    url,
    preview,
    image,
    handleImageChange,
  };
}

export default useFireStore;
