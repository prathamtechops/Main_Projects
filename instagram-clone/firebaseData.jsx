import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCJ_VLKBsB12SYmh4No7jevEjBr3qpSBqk",
    authDomain: "insta-clone-ebab5.firebaseapp.com",
    projectId: "insta-clone-ebab5",
    storageBucket: "insta-clone-ebab5.appspot.com",
    messagingSenderId: "13176357474",
    appId: "1:13176357474:web:1edf0d26f74b1a2535473b",
    measurementId: "G-N7TQYFHJ2H",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const storage = firebase.storage();
