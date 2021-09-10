import firebase from "firebase/compat/app";
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyBiLprRYqLccWK0BX_3UAk7FZIUMBcjhuM",
  authDomain: "portfolio-f69be.firebaseapp.com",
  projectId: "portfolio-f69be",
  storageBucket: "portfolio-f69be.appspot.com",
  messagingSenderId: "655777501095",
  appId: "1:655777501095:web:1175c8d89632460fc27082",
  measurementId: "G-36SS0P20QH"
};

firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore()