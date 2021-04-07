import Vue from 'vue'
import Vuelidate from "vuelidate";
import App from './App.vue'


Vue.config.productionTip = false
Vue.filter("Ucase" , function(val){
        return val.toUpperCase();
})

Vue.filter("currencyConverter" , function(val){
  return val*75
})

Vue.use(Vuelidate);
new Vue({
  render: h => h(App),
}).$mount('#app')
