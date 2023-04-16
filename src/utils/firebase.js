import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAxaKHPJ3r0asYu2UjvB8l2zaV6yP1eIGA",
  authDomain: "cakes-2eb75.firebaseapp.com",
  projectId: "cakes-2eb75",
  storageBucket: "cakes-2eb75.appspot.com",
  messagingSenderId: "161475996552",
  appId: "1:161475996552:web:cfd62e926a0e1b37d5a83d"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);