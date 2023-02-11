// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAR_bYhz4yMDi9lDHiNUOGUBc92okWGn4s",
  authDomain: "car-garage-site.firebaseapp.com",
  projectId: "car-garage-site",
  storageBucket: "car-garage-site.appspot.com",
  messagingSenderId: "1068197148380",
  appId: "1:1068197148380:web:870c1bccef9d85f00ce619"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;