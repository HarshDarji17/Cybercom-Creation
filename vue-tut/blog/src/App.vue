<template>
  <div id="app">
  
<div>
  <b-navbar toggleable="lg" type="dark" variant="info">
    <b-navbar-brand href="#">Vue js </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item  router-link to="/">Home</b-nav-item>
        <b-nav-item router-link to="/products">Product</b-nav-item>
        <b-nav-item router-link to="/loop">Loopexample</b-nav-item>
         <b-nav-item router-link to="/databind">Databind</b-nav-item>
         <b-nav-item router-link to="/signup">Signup</b-nav-item>
         <b-nav-item router-link to="/prop">Props</b-nav-item>
         <b-nav-item router-link to="/filters">Filters</b-nav-item>
         <b-nav-item router-link to="/classstyle">Classstyle</b-nav-item>
         <b-nav-item router-link to="/child">Child</b-nav-item>
         <b-nav-item router-link to="/template">Template</b-nav-item>
         <b-nav-item router-link to="/post">Post</b-nav-item>
         <b-nav-item router-link to="/employeelist">Employeelist</b-nav-item>
         <b-nav-item router-link to="/watchers">Watchers</b-nav-item>
        
         <b-nav-item router-link to="/dynamic">Dynamic</b-nav-item>
         <b-nav-item router-link to="/custom">Custom dir.</b-nav-item>



         

         
      </b-navbar-nav>

      
    </b-collapse>
  </b-navbar>
</div>
  

    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
   <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Home  data="Harsh Darji"/> -->
    <Props v-bind:users="users" />
    
    
   <!-- <Template data="" /> -->
   
   
     <DataBind data=" databind"/>
  
    <h1>{{users}}</h1>
     <Child v-on:changeUsers="updateUsers($event)"/> -->
    
   
    
      <router-view></router-view>
    </div>
</template>

<script>



export default {
  name: 'App',
  components: {},
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
