// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxbKomF_P8_LvHEvd5Wm3j56aUhiN5eV0",
  authDomain: "anantabyte-69886.firebaseapp.com",
  projectId: "anantabyte-69886",
  storageBucket: "anantabyte-69886.firebasestorage.app",
  messagingSenderId: "1056767064721",
  appId: "1:1056767064721:web:9730caf48f1e7eb08a9d30",
  measurementId: "G-714M04XYS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { app, analytics, db, auth, storage };