import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// 🔴 REPLACE with YOUR Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCbmMrJyRv7suPJPj13RuOqyNv5maPaDJA",
  authDomain: "fir-e-377f4.firebaseapp.com",
  databaseURL: "https://fir-e-377f4-default-rtdb.firebaseio.com",
  projectId: "fir-e-377f4",
  storageBucket: "fir-e-377f4.firebasestorage.app",
  messagingSenderId: "561175964568",
  appId: "1:561175964568:web:8779c19004c00e9f7099ed",
  measurementId: "G-EZYDCNNFTL"
};

const app = initializeApp(firebaseConfig);

// Firebase Authentication
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
