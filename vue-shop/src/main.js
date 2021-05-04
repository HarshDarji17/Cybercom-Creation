import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import './assets/app.scss';
import jQuery from 'jquery';

import {fb}   from './firebase'
import VueFirestore from 'vue-firestore'
require('firebase/firestore')
window.$ = window.jQuery = jQuery;

import 'popper.js';



// createApp(App).use(VueFirestore, {
//   key: 'id',         // the name of the property. Default is '.key'.
//   enumerable: true  //  whether it is enumerable or not. Default is true.
// })

import Swal from 'sweetalert2';

window.Swal = Swal;  // we can use every were in project 

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000
});

window.Toast = Toast;
// Vue.component('Navbar',require('./components/Navbar.vue').default);
// Vue.use(VueFirestore)        
// fb.auth().onAuthStateChanged(function(user) {    
//   ,{key: 'id',         // the name of the property. Default is '.key'.
// enumerable: true })                                                                                                                                                                                                                                                                                                                                       

createApp(App).use(router,VueFirestore).mount("#app");
// });