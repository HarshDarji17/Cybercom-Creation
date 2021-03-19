importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.3.0/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyCKf389oGk5BwI6Otz_r2-ix6mhBapIq7Y",
    authDomain: "fir-auth-e3885.firebaseapp.com",
    databaseURL: "https://fir-auth-e3885-default-rtdb.firebaseio.com",
    projectId: "fir-auth-e3885",
    storageBucket: "fir-auth-e3885.appspot.com",
    messagingSenderId: "603434278952",
    appId: "1:603434278952:web:54f7422520c16124db951d"
});
const messaging = firebase.messaging();