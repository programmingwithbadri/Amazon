import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCBduPmDEtD5C-GsNavM69LRqiKXpH_KPM",
    authDomain: "fir-dbde5.firebaseapp.com",
    projectId: "fir-dbde5",
    storageBucket: "fir-dbde5.appspot.com",
    messagingSenderId: "182973786520",
    appId: "1:182973786520:web:84d2fdb3f44e8adf82a3ed",
    measurementId: "G-KRFCN10PLQ"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth };