<template>
<div>
     <h1>hello from home component</h1>
     
         <!-- event -->
      <button v-on:click="hello(data)">call helllo function</button>
     <button v-on:mouseover="hello(data)">call helllo function</button> 

            <!-- condition -->
   <div>
     <h1 v-if="show"> condition rendenring in vue js</h1>
    <h1 v-else> conditional rendering else block</h1>
    <button v-on:click="display">Toggle  Element</button>
     
    </div> 

     </div>
</template>
<script>
export default{
    name:'Home',


    props:{
        data:String
    },
    data(){
        return {show:false}
    },

    
    methods:{
            // event
         hello(data){
              alert(data)
        },

        //conditional
       display(){
           this.show=!this.show
       },
       //Template
       updateText(){
            this.name="Harsh"
       }
    }
};
</script>

