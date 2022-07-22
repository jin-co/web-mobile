// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAkrAH6-ESGOHXDtR3wjgXGAH2J6GM5AsM",
  authDomain: "house-market-app-d8130.firebaseapp.com",
  projectId: "house-market-app-d8130",
  storageBucket: "house-market-app-d8130.appspot.com",
  messagingSenderId: "209203799688",
  appId: "1:209203799688:web:eb6407822e67dbeaa3a13d",
  measurementId: "G-4MCS9DQR69"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore()