// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzkEtOdRlz2w0dL7uQ8IGM0frsJTIJAEk",
  authDomain: "havenhub-6c2d4.firebaseapp.com",
  projectId: "havenhub-6c2d4",
  storageBucket: "havenhub-6c2d4.firebasestorage.app",
  messagingSenderId: "631304919743",
  appId: "1:631304919743:web:ca8c07991c49d789c6440a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
