import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0qzmlC4pzFVHi5KcuFgYR2DdXgIGqDkw",
  authDomain: "fir-app-2a0ac.firebaseapp.com",
  projectId: "fir-app-2a0ac",
  storageBucket: "fir-app-2a0ac.firebasestorage.app",
  messagingSenderId: "693245701470",
  appId: "1:693245701470:web:2a766c06e372f929afb3cf"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
