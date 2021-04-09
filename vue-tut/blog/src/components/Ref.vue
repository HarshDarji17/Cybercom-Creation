<template>
    <div>
        <input type="text" ref="input"/>
        <button v-on:click="getData">Click me</button>
    </div>
</template>
<script>
 
 export default {
     name:'Ref',
     methods:{
         getData(){
             this.$refs.input.focus();
             let val = this.$refs.input.value;
             console.warn(val);
             this.$refs.input.style.color="red";
         }
     }
    
 }
</script>
