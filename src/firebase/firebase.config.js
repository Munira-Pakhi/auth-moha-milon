// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQqCYeqnZMZxRXiNib8vSIqkTM72rYKc4",
  authDomain: "auth-moha-milon-13d69.firebaseapp.com",
  projectId: "auth-moha-milon-13d69",
  storageBucket: "auth-moha-milon-13d69.appspot.com",
  messagingSenderId: "598212469516",
  appId: "1:598212469516:web:944a7390dff3c260971f29"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;