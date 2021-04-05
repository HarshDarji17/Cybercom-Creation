<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Home  data="Harsh Darji"/>
    <Loopexample welcome/>
    <Composing welcome/>
   
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Home from './components/Home.vue'
import Loopexample from './components/Loopexample.vue'
import Composing from './components/Composing'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    Home,
    Loopexample,
    Composing
    
    
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
