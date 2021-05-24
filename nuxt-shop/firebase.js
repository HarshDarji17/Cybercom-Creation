import firebase from 'firebase'
// require('firebase/firestore')

var config = {
    apiKey: "AIzaSyBQ7Hgr6PutrdENc_0qbPTb_bBSDazflEo",
    authDomain: "nuxt-shop-c3cd7.firebaseapp.com",
    databaseURL: "https://nuxt-shop-c3cd7-default-rtdb.firebaseio.com",
    projectId: "nuxt-shop-c3cd7",
    storageBucket: "nuxt-shop-c3cd7.appspot.com",
    messagingSenderId: "585374878129",
    appId: "1:585374878129:web:a72de291833646a57c1590"
  };
if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.firestore()

export { db }