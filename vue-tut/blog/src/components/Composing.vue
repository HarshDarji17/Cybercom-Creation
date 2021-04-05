<template>
    <div>
   <h1>hello from composiing compoment</h1>
   <Users/>
   <Products/>
   <Products/>
    </div>
</template>

<script>
import Users from './Users'
import Products from './Products.vue'
export default {
     name:'Composing',

     components:{
         Users,
         Products
          
     }
}
</script>
<style scoped>

div{
    background-color: darkgray;
    height:700px;

}
</style>

