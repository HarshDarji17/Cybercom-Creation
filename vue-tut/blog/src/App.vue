<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Home  data="Harsh Darji"/> -->
    <!-- <Props v-bind:users="users" /> -->
    <!-- <Loopexample welcome/>
    <Composing welcome/> -->
    <!-- <Template data="" />
    <Classstyle /> -->
    <!-- <DataBind data=" databind"/> -->
    <!-- <h1>{{users}}</h1> -->
    <!-- <Child v-on:changeUsers="updateUsers($event)"/> -->
    <Signup/>
    
    
   
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './components/Home.vue'
// import Props from './components/Props.vue'
// import Loopexample from './components/Loopexample.vue'
// import Composing from './components/Composing'
// import Template from './components/Template'
// import Classstyle from './components/Classstyle'
// import DataBind from './components/DataBind'
// import Child from './components/Child.vue'
import Signup from './components/Signup'
 

export default {
  name: 'App',
  components: {
      Signup
    // Child
    // HelloWorld,
    // Home,
    // Props
    // DataBind
    // Template,
    // Classstyle,
    // Loopexample,
    // Composing,
    
    
    
  },
  data()
  {

       
    return {users:[
                  {id:1 , name:'harsh' , email:'harsh@gmail.com'},
                  {id:2 , name:'nav' , email:'nav@gmail.com'},
                  {id:3 , name:'preml' ,email:'preml@gmai;.com'}
    ]}
  },
  methods:{
    updateUsers(users){
      this.users=users;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
