// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMu80DhIVxfguHixZjhVZC3RSzT8wLYw4",
  authDomain: "react-hooks-blog-51944.firebaseapp.com",
  projectId: "react-hooks-blog-51944",
  storageBucket: "react-hooks-blog-51944.appspot.com",
  messagingSenderId: "630600322239",
  appId: "1:630600322239:web:b78b5bb88b61f161f70a0a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;