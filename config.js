// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA2Z6gy-F3ukaKRue6b5n_8lpkYT7JrT9A",
  authDomain: "personal-portfolio-11607.firebaseapp.com",
  projectId: "personal-portfolio-11607",
  storageBucket: "personal-portfolio-11607.appspot.com",
  messagingSenderId: "642207506655",
  appId: "1:642207506655:web:827e56e73ecdfd1dd4896a",
  measurementId: "G-F7CTB44S8Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);