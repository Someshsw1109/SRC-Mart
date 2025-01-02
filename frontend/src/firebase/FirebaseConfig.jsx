// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDgN3elGthiXjtS0fMdc_wdZKc3M2NTDAs",
  authDomain: "srcm-5684e.firebaseapp.com",
  projectId: "srcm-5684e",
  storageBucket: "srcm-5684e.firebasestorage.app",
  messagingSenderId: "282507337124",
  appId: "1:282507337124:web:44b9f14ab52ad4a3e5b531",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export { fireDB, auth }
