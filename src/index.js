import _ from 'lodash'

import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAQ-kOtfQjI3IiSU-Df4p4yKGJqYE9AVm0",
  authDomain: "nikextetris.firebaseapp.com",
  projectId: "nikextetris",
  storageBucket: "nikextetris.appspot.com",
  messagingSenderId: "570046156908",
  appId: "1:570046156908:web:d1a20713cc7e8e0ded8849",
  measurementId: "G-8S0E2F3DCG"
};

const app = initializeApp(firebaseConfig)
const db = getFirestore(app);

const reference = collection(db, 'users');

document.getElementById("send").addEventListener("click", function () {
  var usame = document.getElementById("name").value;
  var emal = document.getElementById("email").value;
  console.log(usame, emal)

  addDoc(reference, {
    name: usame,
    email: emal,
  })
});