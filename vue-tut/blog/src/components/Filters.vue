<template>
<div>
     <h1>Filter in vue js</h1>
     <h1>{{name | Ucase}}</h1>
     <h3>{{ amount | currencyConverter}}</h3>
     </div>
</template>
<script>


export default {
   name:"Filters",
   
   data()
   {

       return{name:"harsh" ,
              amount:100}
   }
}
</script>
