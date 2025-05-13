// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKW-d7fIGIvihQMVyjzzU4EkUoI7n5zl4",
  authDomain: "auth-task-d910a.firebaseapp.com",
  projectId: "auth-task-d910a",
  storageBucket: "auth-task-d910a.firebasestorage.app",
  messagingSenderId: "766460161049",
  appId: "1:766460161049:web:1cfc31a6fae29136f38e88"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
