import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDUfN9GjKNr002uGdFNrORRkF4vRZEuQGg",
  authDomain: "wouldyourather-72b15.firebaseapp.com",
  projectId: "wouldyourather-72b15",
  storageBucket: "wouldyourather-72b15.appspot.com",
  messagingSenderId: "168583114941",
  appId: "1:168583114941:web:271186a266c1d11271c7d4",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({
  timestampsInSnapshots: true,
  merge: true,
});

export default firebase;
