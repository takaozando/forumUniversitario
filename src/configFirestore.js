// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"


// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyANCkGusuIY-VI-tTnFoWd0f3lYL_f_8Q4",
  authDomain: "forum-universitario.firebaseapp.com",
  projectId: "forum-universitario",
  storageBucket: "forum-universitario.appspot.com",
  messagingSenderId: "447273477946",
  appId: "1:447273477946:web:5cec121905733060a4d203"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;



