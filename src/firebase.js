// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAuxH712dEZAuOeulnfFPYFx98L_YJf3Po",
  authDomain: "realtor-clone-fe872.firebaseapp.com",
  projectId: "realtor-clone-fe872",
  storageBucket: "realtor-clone-fe872.firebasestorage.app",
  messagingSenderId: "796844449334",
  appId: "1:796844449334:web:d907f19ef23355b4058297"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()