// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbPWYduELkthV0ca9dhWSOslpNS4maDcM",
  authDomain: "palace-ac567.firebaseapp.com",
  projectId: "palace-ac567",
  storageBucket: "palace-ac567.appspot.com",
  messagingSenderId: "93935053999",
  appId: "1:93935053999:web:76dbfeb8be0d15603f385a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db