// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDBpIzA-rbNIHilywco-3GQvvdIEAkjQRk",
  authDomain: "fire-test-74d76.firebaseapp.com",
  projectId: "fire-test-74d76",
  storageBucket: "fire-test-74d76.appspot.com",
  messagingSenderId: "183642125272",
  appId: "1:183642125272:web:1a4320c8308bd2ec4578ad"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()