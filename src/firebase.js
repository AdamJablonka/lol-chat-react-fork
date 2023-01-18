// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDHlzFE-gHBDdsf1yzrr56JJ5RkRPbaFSA",
  authDomain: "lolchat-react.firebaseapp.com",
  projectId: "lolchat-react",
  storageBucket: "lolchat-react.appspot.com",
  messagingSenderId: "93953017722",
  appId: "1:93953017722:web:8152fbe60728f3291678c3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);