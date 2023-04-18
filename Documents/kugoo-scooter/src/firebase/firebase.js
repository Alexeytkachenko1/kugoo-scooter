// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBlTtdwq6mr7jC8b_qC9RaH_uSDzceQkr0",
  authDomain: "kugoo-scooters.firebaseapp.com",
  projectId: "kugoo-scooters",
  storageBucket: "kugoo-scooters.appspot.com",
  messagingSenderId: "904830993033",
  appId: "1:904830993033:web:da1788eb2fe71939c8bc58",
  measurementId: "G-0N8D5CWMQM",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
