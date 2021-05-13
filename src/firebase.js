// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCqVyiWuu_y3L6Pqi595UD4GArxGpddhqg",
    authDomain: "tik-tok-clone-f4392.firebaseapp.com",
    projectId: "tik-tok-clone-f4392",
    storageBucket: "tik-tok-clone-f4392.appspot.com",
    messagingSenderId: "476998211718",
    appId: "1:476998211718:web:3fe376ace5f353ac225907",
    measurementId: "G-Z25XW9KZSV"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();

  export default db;