// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNI8DfJ6r71veqNIgRRYUCO16FCHLGUk0",
  authDomain: "realtor-clone-449a9.firebaseapp.com",
  projectId: "realtor-clone-449a9",
  storageBucket: "realtor-clone-449a9.appspot.com",
  messagingSenderId: "37129985621",
  appId: "1:37129985621:web:ced904c70a59be20b37edc"
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db=getFirestore()