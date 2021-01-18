
import firebase from 'firebase';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

const config =  {
    apiKey: "AIzaSyDYmfJ_T5oZhZsRozAMnzwUdYiiVIgfD-4",
    authDomain: "react-chat-cd524.firebaseapp.com",
    databaseURL: "https://react-chat-cd524.firebaseio.com",
    projectId: "react-chat-cd524",
    storageBucket: "react-chat-cd524.appspot.com",
    messagingSenderId: "296101846420",
    appId: "1:296101846420:web:1923d991cfd0504dd88381",
    measurementId: "G-HHQ9XCWXN0"
  };
firebase.initializeApp(config);
const db = firebase.firestore();
const Database = firebase.database();

export default firebase;
export {db,firebase};

