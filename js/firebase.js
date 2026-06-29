import { initializeApp } from "https://www.gstatic.com/firebasejs/12.15.0/firebase-app.js";

import {
  getFirestore,
  doc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
  deleteDoc
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-firestore.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/12.15.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDIWVmKp75Eyji_VoIsoaF7q3tqHuBe04I",
  authDomain: "architectlibrary-21386.firebaseapp.com",
  projectId: "architectlibrary-21386",
  storageBucket: "architectlibrary-21386.firebasestorage.app",
  messagingSenderId: "940396997800",
  appId: "1:940396997800:web:c38755d57cdb0bc6ad669d",
  measurementId: "G-MMB4XDE7Z9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

export {
  doc,
  getDoc,
  updateDoc,
  collection,
  addDoc,
  getDocs,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  deleteDoc,
};