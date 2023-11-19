import _ from 'lodash'

const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
const { getFirestore, Timestamp, FieldValue, Filter } = require('firebase-admin/firestore');

const firebaseConfig = {
  apiKey: "AIzaSyAQ-kOtfQjI3IiSU-Df4p4yKGJqYE9AVm0",
  authDomain: "nikextetris.firebaseapp.com",
  projectId: "nikextetris",
  storageBucket: "nikextetris.appspot.com",
  messagingSenderId: "570046156908",
  appId: "1:570046156908:web:d1a20713cc7e8e0ded8849",
  measurementId: "G-8S0E2F3DCG"
};

initializeApp({
  credential: applicationDefault()
});

const db = getFirestore();

const docRef = db.collection('users').doc('alovelace');

await docRef.set({
  first: 'Ada',
  last: 'Lovelace',
  born: 1815
});

/*function submitForm() {
  // Obtiene los valores de los campos del formulario
  var username = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  // Crea un objeto JSON con los datos del formulario
  var data = {
    username: username,
    email: email
  };

  // Envía los datos a la base de datos de Firebase
  db.collection("users").add(data);
}

// Agrega un evento de clic al botón de envío
document.getElementById("send").addEventListener("click", submitForm);*/
  
  // Agrega un evento de clic al botón de envío
  document.getElementById("send").addEventListener("click", console.log("hello"));