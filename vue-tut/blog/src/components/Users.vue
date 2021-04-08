<template>
    <div class= "users">
         <h1>helo from Users component</h1>
         <h2>User Id is  {{userId}}</h2>
    </div>

</template>
<script>
export default {
       name: 'Users',
       data(){
           return {userId:this.$route.params.id}
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