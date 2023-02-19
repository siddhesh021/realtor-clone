// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATHFEe0feX-jaBo1ZurDO5p6WBo5xkP8M",
  authDomain: "realtor-new-4af45.firebaseapp.com",
  projectId: "realtor-new-4af45",
  storageBucket: "realtor-new-4af45.appspot.com",
  messagingSenderId: "359294044447",
  appId: "1:359294044447:web:8d9e50459d9a2df343882a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const  db = getFirestore()