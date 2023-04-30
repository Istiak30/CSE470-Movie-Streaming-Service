// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAInDg4XbaPRZ6aadbiymmMPQQEuLZ2UE4",
  authDomain: "movie-streaming-service-30.firebaseapp.com",
  projectId: "movie-streaming-service-30",
  storageBucket: "movie-streaming-service-30.appspot.com",
  messagingSenderId: "569843785811",
  appId: "1:569843785811:web:893bf512517665b3a2e6a6",
  measurementId: "G-HTL5FT7LP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app)