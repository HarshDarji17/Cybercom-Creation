import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import vuetify from './plugins/vuetify';
import Home from "./components/Home";
import Notification from "./components/Notification";
import contactUs from "./components/contact-us";
import ShowData from "./components/show-data";
import NotificationDetails from "./components/Notification-details";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import NotFound from "./components/NotFound";


Vue.use(VueRouter);
const routes = [
    { path: "/", component: Home },
    { path:"/signin" , component:SignIn},
    { path:"/signup" , component:SignUp},
    { path: "/contact-us", component: contactUs },
    { path: "/showdata", component: ShowData },
    { path: "/notification", component: Notification },
    { path: "/notification/:id", component: NotificationDetails },
    {path:"*" , component:NotFound}
   
];
const router = new VueRouter({
    mode: 'history',
    routes,
});

Vue.config.productionTip = false

new Vue({
  router: router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
