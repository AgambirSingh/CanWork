import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyBjUHgstaH8EzY8XUu45wORX4AvVW93LCA",
  authDomain: "canwork-9b8fc.firebaseapp.com",
  projectId: "canwork-9b8fc",
  storageBucket: "canwork-9b8fc.firebasestorage.app",
  messagingSenderId: "967562672937",
  appId: "1:967562672937:web:1d33df75bd1cd6e5a8d538",
  measurementId: "G-EB9MBHEZ54"
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);