import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDUc-dhTipBFtEfuJ9NI-ED8uRqo11-v4c",
  authDomain: "volt-construction-app.firebaseapp.com",
  databaseURL: "https://volt-construction-app-default-rtdb.firebaseio.com",
  projectId: "volt-construction-app",
  storageBucket: "volt-construction-app.firebasestorage.app",
  messagingSenderId: "283603372854",
  appId: "1:283603372854:web:16a178118d26c08d78c197",
  measurementId: "G-15DZH43V8Q",
};

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getDatabase(app);
