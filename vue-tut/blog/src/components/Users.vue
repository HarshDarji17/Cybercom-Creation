<template>
    <div class= "users">
         <h1> Users component</h1>
         <h2>User Id is  {{userId}}</h2>
         <hr>

         <!-- mixins concept -->
           <div>{{counter}}</div>
           <button @click.prevent="onIncrement(10)"> Increment </button>
    </div>
     
     
       



</template>
<script>
import CounterMixin from '../mixins/CounterMixin';
export default {
       name: 'Users',
       mixins:[CounterMixin],
       data(){
           return {userId:this.$route.params.id}
       },
       
    //    mixin concept

      dat(){
          return{
              counter:0,
          }
      },

      methods:{
         onIncrement(count)
         {
             this.counter  += count;
         }
      }

}
</script>
<style scoped>


.users {
   
    margin-top: 30px;
     height: 100px;
    width: 300px;
    padding: 42px;
     
}
</style>