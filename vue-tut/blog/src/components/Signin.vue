<template>
       
    <div> 
        <h1>signin component</h1>
        <p v-if="error.length">
              <b>Plese corect the flowing errors</b>
              <ul>
                  <li v-for="e in error" v-bind:key="e.id">
                            {{e}}      
                  </li>
              </ul>

          </p>
         <form @submit="login">

          
            <input type="text"
                   placeholder="enter name" 
                    v-model="name"> <br><br>

         
            <input type="password"
                   placeholder="=enter password"
                    v-model="password"> <br><br>

            <button type="submit">Login</button>   
         </form>    
     </div>
</template>
<script>
export default {
    name:'Signin',
    data(){
        return {
            error:[],
            name:null,
            password:null
        }
    },
    methods:{
        login(e) {
            if(this.name && this.password)
            {
              console.log("Login function called")
            }
           
           this.error=[];
           if(!this.name)
           {
               this.error.push("name is required")
           }
           if(!this.password){
               this.error.push("password is required")
           }
           console.warn("errors" , this.error)
            e.preventdefault()
        }
    }
}
</script>