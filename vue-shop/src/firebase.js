import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/firebase-auth'
import 'firebase/storage'


// Your web app's Firebase configuration
var config = {
    apiKey: "AIzaSyCoPIl_-dYPm1EQfE74tykqiiQVCJesF3g",
    authDomain: "vue-shop-297d9.firebaseapp.com",
    projectId: "vue-shop-297d9",
    storageBucket: "vue-shop-297d9.appspot.com",
    messagingSenderId: "251226212746",
    appId: "1:251226212746:web:f871c153683d710d6ea073"
  };
  // Initialize Firebase
 
 
  const fb = firebase.initializeApp(config);

  const db = firebase.firestore();
  
  export {fb,db}