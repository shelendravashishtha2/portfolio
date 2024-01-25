import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/storage";
const firebaseConfig = {
  apiKey: "AIzaSyC1lDcVfBCiTazpdQZQezMo-uNzIOJeiIo",
  authDomain: "resume-portfolio-98c1d.firebaseapp.com",
  projectId: "resume-portfolio-98c1d",
  storageBucket: "resume-portfolio-98c1d.appspot.com",
  messagingSenderId: "271261429000",
  appId: "1:271261429000:web:4df05e626c45a4d30c90bd",
  measurementId: "G-HVH2S4FKNY",
};

firebase.initializeApp(firebaseConfig);
export const firestore = firebase.firestore();
export const fireStorage = firebase.storage();
