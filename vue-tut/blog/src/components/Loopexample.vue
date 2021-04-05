<template>
<div>
    <h1>Hello from Loop example</h1>
    <table>
        <tr>
            <td>id</td>
            <td>Name</td>
            <td>Email</td>
        </tr>
        <tr v-for="user in users" :key="user.id">
            <td>{{user.id}}</td>
            <td>{{user.name}}</td>
            <td>{{user.email}}</td>
        </tr>
    </table>
    </div>
   
   
   
</template>

<script>
export default {
   name: "Loopexample",
   props:{
        data:String
    },
      data()
      {
          return{
              users:[
                  {id:1 , name:'harsh' , email:'harsh@gmail.com'},
                  {id:2 , name:'nav' , email:'nav@gmail.com'},
                  {id:3 , name:'preml' ,email:'preml@gmai;.com'},]
          }
      }
}
</script>
