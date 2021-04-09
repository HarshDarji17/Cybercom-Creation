import Vue from 'vue'
import './plugins/bootstrap-vue'
import Vuelidate from "vuelidate";
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home'
import Products from './components/Products'
import EmployeeList from './components/EmployeeList'
import Filters from './components/Filters'
import Classstyle from './components/Classstyle'
import Composing from './components/Composing'
import DataBind from './components/DataBind'
import Watchers from './components/Watchers'
import Props from './components/Props'
import Post from './components/Post'
import Template from './components/Template'
import Loopexample from './components/Loopexample'
import Child from './components/Child'
import Users from './components/Users'
import PageNotFound from './components/PageNotFound'

import Dynamic from './components/Dynamic'
import Customdirectiv from './components/Customdirectiv'

//build custoome diectives
Vue.directive("size",{
  bind(el,binding)
  {
    if(binding.value=='small')
    {
      el.style.fontSize="20px"
    }
    else if(binding.value=='big')
    {
      el.style.fontsize="100px"
    }
    else{
      el.style.fontSize="60px"
    }
  }
})
//vue router register with vue js
Vue.use(VueRouter);

const routes=[
  {path: '/', component:Home},
  {path:'/products' , component:Products},
  {path:'/emplist',component:EmployeeList},
  {path:'/filters' , component:Filters},
  {path:'/classstyle' , component:Classstyle},
  {path:'/composing',component:Composing},
  {path:'/databind', component:DataBind},
  {path:'/watchers' , component:Watchers},
  {path:'/prop' , component:Props},
  {path:'/child' , component:Child},
  {path:'/template' , component:Template},
  {path:'/post' , component:Post},
  {path:'/loop' , component:Loopexample},
  {path:'/employeelist' , component:EmployeeList},
  {path:"/user/:id" , component:Users},
  {path:"*" , component:PageNotFound},

  {path:"/dynamic" , component:Dynamic},
  {path:'/custom' , component:Customdirectiv}
]
 // crate router object
const router = new  VueRouter({
  routes
})

//vuelidate in vue js
Vue.use(Vuelidate);


Vue.config.productionTip = false
Vue.filter("Ucase" , function(val){
        return val.toUpperCase();
})

Vue.filter("currencyConverter" , function(val){
  return val*75
})


new Vue({
  router:router,
  render: h => h(App),
}).$mount('#app')
