// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "savvifly-cddb8.firebaseapp.com",
  projectId: "savvifly-cddb8",
  storageBucket: "savvifly-cddb8.appspot.com",
  messagingSenderId: "775830837232",
  appId: "1:775830837232:web:b09f4b487b4a5387c86f35",
  measurementId: "G-4QG32BW38M",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
