<template>
<div>
  <AddProduct />
  <Products />
</div>
</template>

<script>
import AddProduct from './components/AddProduct'
import Products from './components/Products.vue'

export default {
  name: 'App',
  components: {
    AddProduct,
    Products
  }
}
</script>

<style>
*,body{
  padding: 0;
  margin:0;
  box-sizing: border-box;
  }
  body {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background: #2c3e50;
  padding-top: 30px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
