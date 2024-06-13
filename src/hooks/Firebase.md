## Fire Store Automatic image Upload
// useFireStore.ts
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { storage } from "../firebase/config";
import { ChangeEvent, useState, useEffect } from "react";
import { setImageUrl } from "../services/others/imageSlice";
import { useAppDispatch } from "./reactReduxHooks";

function useFireStore() {
  const dispatch = useAppDispatch();
  const [firebaseError, setFirebaseError] = useState<string | object>("");
  const [uploadProgress, setProgress] = useState<number>(0);
  const [url, setUrl] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setImage(null);
      setPreview(null);
    }
  };

  useEffect(() => {
    if (image === null) return;

    const uploadImage = () => {
      const storageRef = ref(storage, `profile-student/${image.name}`);
      const uploadTask = uploadBytesResumable(storageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
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
          console.log(error);
          setFirebaseError(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            dispatch(setImageUrl(downloadURL));
            setUrl(downloadURL);
          });
        }
      );
    };

    uploadImage();
  }, [image, dispatch]);

  return {
    firebaseError,
    uploadProgress,
    url,
    preview,
    image,
    handleImageChange,
  };
}

export default useFireStore;
