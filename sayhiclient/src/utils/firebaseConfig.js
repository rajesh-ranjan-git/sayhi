// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi00BnD8-HdmquzK43VgBW64fnRVcWAJo",
  authDomain: "sayhi-messenger-app.firebaseapp.com",
  projectId: "sayhi-messenger-app",
  storageBucket: "sayhi-messenger-app.firebasestorage.app",
  messagingSenderId: "454249533667",
  appId: "1:454249533667:web:82ff6d833ac60d41cc75d6",
  measurementId: "G-CPDW9NM6P2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
// const analytics = getAnalytics(app);
