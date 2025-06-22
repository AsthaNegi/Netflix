// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpi_8jW1cI4g8_oudKvSh-sNsKSZyTQfY",
  authDomain: "netflixgpt-8b6f1.firebaseapp.com",
  projectId: "netflixgpt-8b6f1",
  storageBucket: "netflixgpt-8b6f1.firebasestorage.app",
  messagingSenderId: "601564094134",
  appId: "1:601564094134:web:431b935f8a8e25e5f5d017",
  measurementId: "G-K9PC5KJJ6J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();