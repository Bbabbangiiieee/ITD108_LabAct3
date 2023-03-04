// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDU7Sc9_WqIIHN6siYrIUKqPf-5404y5DY",
  authDomain: "gettingstartedwithfireba-d38f6.firebaseapp.com",
  projectId: "gettingstartedwithfireba-d38f6",
  storageBucket: "gettingstartedwithfireba-d38f6.appspot.com",
  messagingSenderId: "777429333088",
  appId: "1:777429333088:web:501f9362711dfa57157f05",
  measurementId: "G-SGMYE7X6HQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app);