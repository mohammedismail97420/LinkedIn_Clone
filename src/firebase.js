import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyBfoqdXH3dKU_m7k6GEFyrkg80-76_dT9A",
  authDomain: "ismail-linkedin-clone.firebaseapp.com",
  projectId: "ismail-linkedin-clone",
  storageBucket: "ismail-linkedin-clone.appspot.com",
  messagingSenderId: "1011916234346",
  appId: "1:1011916234346:web:b1c124fb298707e6547413",
});
export const db = firebase.firestore();
db.settings({
  timestampsInSnapshots: true,
});
export const auth = app.auth();
export default app;
