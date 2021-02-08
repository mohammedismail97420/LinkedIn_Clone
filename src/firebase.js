import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyCjzKr4Yfedf-Ux9HxO8bbN1IhLRpNDH0I",
  authDomain: "linkedin-clone-ismail.firebaseapp.com",
  projectId: "linkedin-clone-ismail",
  storageBucket: "linkedin-clone-ismail.appspot.com",
  messagingSenderId: "1087559926363",
  appId: "1:1087559926363:web:50d94a4b3be95673b3757e",
  measurementId: "G-5W2R4HB7NR",
});
export const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});
export const auth = app.auth();
export default app;
