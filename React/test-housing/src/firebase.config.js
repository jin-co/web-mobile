// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCxmFLD6A_GWDxiM4XeAjN1CxG7JYZPKpY',
  authDomain: 'housing-21773.firebaseapp.com',
  projectId: 'housing-21773',
  storageBucket: 'housing-21773.appspot.com',
  messagingSenderId: '798944124619',
  appId: '1:798944124619:web:2d26d95bf5d8bb4d82454e',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
export const db = getFirestore()
