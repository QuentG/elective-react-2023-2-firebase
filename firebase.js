// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8MxO8Ut3Kvmqxrm9cvgJcKN_kMJl6_c0",
  authDomain: "fir-todo-auth-7b8f2.firebaseapp.com",
  projectId: "fir-todo-auth-7b8f2",
  storageBucket: "fir-todo-auth-7b8f2.appspot.com",
  messagingSenderId: "947565826742",
  appId: "1:947565826742:web:ab588d7ae9324c85030c17"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Get a reference to the database service
const db = getFirestore(app)
// Get a reference to the auth service
const auth = getAuth(app)

export { db, auth }