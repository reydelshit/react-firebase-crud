import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCWeJ-MZqT2iqff_z_uJ72QqnP1M5LRNZA",
    authDomain: "fir-practice-b962c.firebaseapp.com",
    projectId: "fir-practice-b962c",
    storageBucket: "fir-practice-b962c.appspot.com",
    messagingSenderId: "586528461887",
    appId: "1:586528461887:web:d9537e875ddd1d2624948a",
    measurementId: "G-7CY3SL8J2V"
  };


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

