import firebase from "firebase" 
const firebaseConfig = {
  apiKey: "AIzaSyBrmxLTzoXattb84ZYWYvuHSUx5xAV7GEQ",
  authDomain: "truexam-7a547.firebaseapp.com",
  projectId: "truexam-7a547",
  storageBucket: "truexam-7a547.appspot.com",
  messagingSenderId: "857149776068",
  appId: "1:857149776068:web:0351f63b5b980a8add2991",
  measurementId: "G-R43SGZ6PYW"
  };

  const  app = firebase.initializeApp(firebaseConfig);
  const db = app.firestore();
  export {db,app};  