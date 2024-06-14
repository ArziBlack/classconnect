import { ref, uploadBytesResumable, getDownloadURL, StorageError } from "firebase/storage";
import { storage } from "../firebase/config";
import { ChangeEvent, useState } from "react";
import { setImageUrl } from "../services/others/imageSlice";
import { useAppDispatch } from "./reactReduxHooks";
import { IFirebaseError } from "../typings/errors";

function useFireStore() {
  const dispatch = useAppDispatch();
  const [firebaseError, setFirebaseError] = useState<IFirebaseError | string | object>();
  const [uploadProgress, setProgress] = useState<number>(0);
  const [url, setUrl] = useState<string>("");
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    if (file) {
      const fileType = file.type.split('/')[1];
      const validTypes = ['jpeg', 'png', 'gif'];
      const fileSizeLimit = 5 * 1024 * 1024; // 5MB

      if (!validTypes.includes(fileType)) {
        setFirebaseError('Invalid file type. Only JPEG, PNG, and GIF are allowed.');
        setImage(null);
        setPreview(null);
        return;
      }

      if (file.size > fileSizeLimit) {
        setFirebaseError('File size exceeds 5MB limit.');
        setImage(null);
        setPreview(null);
        return;
      }

      setImage(file);
      setFirebaseError(''); // Clear any previous errors

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

  const uploadImage = () => {
    if (image === null) return;

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
      (error: StorageError) => {
        // Handle unsuccessful uploads
        console.error('Upload failed', error);
        setFirebaseError(error);
      },
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          dispatch(setImageUrl(downloadURL));
          setUrl(downloadURL);
        });
      }
    );
  };

  return {
    firebaseError,
    uploadProgress,
    url,
    preview,
    image,
    handleImageChange,
    uploadImage,
  };
}

export default useFireStore;