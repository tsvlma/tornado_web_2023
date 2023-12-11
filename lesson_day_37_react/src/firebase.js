// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";



// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA-0Qv4ZqeZMUN0xm2twwisdHG2WHeua1c",
  authDomain: "lesson-day-37-tsvlma.firebaseapp.com",
  projectId: "lesson-day-37-tsvlma",
  storageBucket: "lesson-day-37-tsvlma.appspot.com",
  messagingSenderId: "808920885723",
  appId: "1:808920885723:web:e280ebe2407e0045949ffe",
  measurementId: "G-E6PWY29G4H",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
