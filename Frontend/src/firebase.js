import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCC_fRHjGTJ3eYnO8XNVAj7XgjzVSewjr4",
  authDomain: "e-shop-674f8.firebaseapp.com",
  projectId: "e-shop-674f8",
  storageBucket: "e-shop-674f8.appspot.com",
  messagingSenderId: "756547448356",
  appId: "1:756547448356:web:0be17770e433ccae74f2b1"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export default app;