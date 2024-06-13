import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDq1DJ-6nHGRRf-n2lQCvfuPjuyvugDaZU",
  authDomain: "hep-coding.firebaseapp.com",
  projectId: "hep-coding",
  storageBucket: "hep-coding.appspot.com",
  messagingSenderId: "4799238999",
  appId: "1:4799238999:web:c775bce15aed5fd28ea412",
  measurementId: "G-M14PKN43CH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);
const db = getFirestore(app);

export { storage, db as default };