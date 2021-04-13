<template>

  <div id="app">

    <Users/>
    <hr>
    <Products/>
<!--     
    <Props v-bind:users="users" /> -->
   <!-- <DataBind data=" databind"/> -->
   <!-- <Props v-bind:users="users" />
   <Props data="some data" class="abc" id="user-cmp"/> 
   -->
<!-- 
   <Ref/>  -->

        <!-- slot -->
  
    <!-- <Card></Card>
    <Card> Card Content </Card>
    <Card><h2> Card Content</h2></Card>
   
     <Card>  <img src="https://picsum.photos/200"/> </Card> -->
   

      <!-- Name slot -->
   <!-- <Card>
     <template v-slot:header>
       <h3>Header</h3>
     </template>

     <template v-slot:default='slotProp'>
                {{ slotProp.firstName }} {{ slotProp.lastName }}
            </template>
     
     <template v-slot:footer>
       <button> View Details</button>
     </template>

   </Card> -->

<div>
  
   <!-- <b-navbar toggleable="lg" type="dark" variant="info">
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
  </b-navbar>  -->
</div>
  

          
  
      <!-- chhildvue -->

    <!-- <h1>{{users}}</h1>
     <Child v-on:changeUsers="updateUsers($event)"/> --> -->
    
   
    
      <router-view></router-view>
    </div>
</template>

<script>
import Products from './components/Products'
import Users from './components/Users'
// import Card from './components/Card.vue'
// import Ref from './components/Ref.vue'
// import Props from './components/Props'



export default {
  name: 'App',
  components: {
    Products,
    Users
    // Card,
    // Ref,
    // Props
  
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
