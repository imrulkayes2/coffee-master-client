// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyACyt9gB10qVvpPowKAbJGy0Q6mJRD2-fo",
    authDomain: "coffee-store-107f3.firebaseapp.com",
    projectId: "coffee-store-107f3",
    storageBucket: "coffee-store-107f3.appspot.com",
    messagingSenderId: "5036634755",
    appId: "1:5036634755:web:87a412ce58a439f18061b6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;