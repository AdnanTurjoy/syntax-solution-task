import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA-8GH3PEDql1slhjLbFmeL0l_uS-Etlbk",
  authDomain: "syntaxt-task.firebaseapp.com",
  projectId: "syntaxt-task",
  storageBucket: "syntaxt-task.appspot.com",
  messagingSenderId: "872040550039",
  appId: "1:872040550039:web:4efb242ba6be54482fa3d2",
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
