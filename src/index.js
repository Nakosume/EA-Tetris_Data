import _ from 'lodash'

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

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

function submitForm() {
  // Obtiene los valores de los campos del formulario
  var username = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Crea un objeto JSON con los datos del formulario
  var data = {
    username: username,
    email: email,
  };

  // Envía los datos a la base de datos de Firebase
  db.collection("users").add(data);
}

// Agrega un evento de clic al botón de envío
/*document.getElementById("send").addEventListener("click", function(){
  console.log("hello")
});*/
document.getElementById("send").addEventListener("click", function(){
  var usame = document.getElementById("name").value;
  var emal = document.getElementById("email").value;
  console.log(usame,emal)
  /*submitForm()*/
});