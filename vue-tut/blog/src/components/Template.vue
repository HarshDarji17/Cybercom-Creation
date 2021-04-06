<template>
    <div>
        <!-- <h1>Template iin vue js</h1> -->
        <p v-html="rowHtml"></p>
        <!-- we use v-once then not change tthe name -->
        <h3 v-once>{{name}}</h3>
         <h3>{{name}}</h3> 

         <!-- Ternary operator -->
         <h3> {{ok?"Yes":"No"}}</h3>

         <button v-bind:disabled="disableBtn" v-on:click="updateText"> Click Me</button>
    </div>
</template>
<script>
export default{
      name:'Template',

       data()
       {
           return {
               name:'harsh',
               ok:false,
               rowHtml:"<h1> Template in vue js</h1>",
               disableBtn:true

           }
       },
       methods:{
           updateText(){
               this.name="Harsh",
                //   Toggale used
               this.ok=!this.ok
           }
       }
}
</script>