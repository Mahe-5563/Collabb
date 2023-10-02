import firebase from 'firebase/compat/app';
import 'firebase/compat/storage'
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBXC54ie5uL_kwy7HiK-UP-1pt69ab9x-s",
  authDomain: "collabb-b2d6b.firebaseapp.com",
  projectId: "collabb-b2d6b",
  storageBucket: "collabb-b2d6b.appspot.com",
  messagingSenderId: "325170733127",
  appId: "1:325170733127:web:a61cef3b665eef45bb9162",
  measurementId: "G-EBPWXJLZDH",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

console.log("firebaseConfig: ", firebaseConfig);

export {app, firebase};