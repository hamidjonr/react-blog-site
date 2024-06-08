import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDoWIGZPWqDa8ajra9v1F-qT0b5su7PPHM",
  authDomain: "blogproject-dbb39.firebaseapp.com",
  projectId: "blogproject-dbb39",
  storageBucket: "blogproject-dbb39.appspot.com",
  messagingSenderId: "1000195825482",
  appId: "1:1000195825482:web:aaac4292a33c7f5732ebb3"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider(); 