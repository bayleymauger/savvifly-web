// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "trip-hawk.firebaseapp.com",
  projectId: "trip-hawk",
  storageBucket: "trip-hawk.appspot.com",
  messagingSenderId: "238591170672",
  appId: "1:238591170672:web:d7f7eeeb56bdb7e169bcb5",
  measurementId: "G-NW92ENE1XE",
};
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
