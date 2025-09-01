// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v9-compat and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxnFpUlyaJD_fRwx1DwnotZZglGsCIGCo",
  authDomain: "neuro-80535.firebaseapp.com",
  projectId: "neuro-80535",
  storageBucket: "neuro-80535.firebasestorage.app",
  messagingSenderId: "915935554938",
  appId: "1:915935554938:web:079cbd3c5885bf23427ac3",
  measurementId: "G-94E7J5JCVQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);

export default app;
