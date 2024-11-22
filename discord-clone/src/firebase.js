import {initializeApp} from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCVunY5HcflrI4-PoUmrVP-clZI7VaOHbw",
  authDomain: "discorddb-78563.firebaseapp.com",
  projectId: "discorddb-78563",
  storageBucket: "discorddb-78563.firebasestorage.app",
  messagingSenderId: "304897634119",
  appId: "1:304897634119:web:816d08d504f0716c012662",
  measurementId: "G-NX85F8R81F"
};

  //Initialize Firebase
  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app);
  export const db = getFirestore(app);