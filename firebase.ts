import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCFLAS8kxqcwWDw8_lh5Ytt2tfEIa14K7o",
  authDomain: "chat-gpt-messenger-87ccf.firebaseapp.com",
  projectId: "chat-gpt-messenger-87ccf",
  storageBucket: "chat-gpt-messenger-87ccf.appspot.com",
  messagingSenderId: "434527923236",
  appId: "1:434527923236:web:2ff850c479af2c17f2bcb1",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
