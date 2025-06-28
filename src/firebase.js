// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
const apiKeys = import.meta.env.VITE_GOOGLE_API_KEY;

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: apiKeys,
  authDomain: "realtor-clone-fe872.firebaseapp.com",
  projectId: "realtor-clone-fe872",
  storageBucket: "realtor-clone-fe872.appspot.com",
  messagingSenderId: "796844449334",
  appId: "1:796844449334:web:d907f19ef23355b4058297"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()