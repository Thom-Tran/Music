// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcf1QYvsrmLasPtsg9DzW1hmMg-ZZ3GzA",
  authDomain: "nghe-nhac-truc-tuyen-d32e1.firebaseapp.com",
  databaseURL: "https://nghe-nhac-truc-tuyen-d32e1-default-rtdb.firebaseio.com",
  projectId: "nghe-nhac-truc-tuyen-d32e1",
  storageBucket: "nghe-nhac-truc-tuyen-d32e1.firebasestorage.app",
  messagingSenderId: "235679797841",
  appId: "1:235679797841:web:c9bd9809c21765916ede70",
  measurementId: "G-4B9HDHPV7E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const dbFirebase = getDatabase(app);
export const authFirebase = getAuth(app);
