<template>
    <div class="users">
         <h1 > Products component</h1>

           <!-- mixins concept -->
           <div>{{counter}}</div>
           <button @click.prevent="onIncrement(5)"> Increment </button>
    </div>

</template>

<script>
import CounterMixin from '../mixins/CounterMixin';
export default {
       name: 'Products',
       mixins: [CounterMixin],
       data() {
           return {
             counter:5,
           };
       },
      
mounted(){
    console.log('mounted from product com')
}
      
};
</script>



<style scoped>
</style>