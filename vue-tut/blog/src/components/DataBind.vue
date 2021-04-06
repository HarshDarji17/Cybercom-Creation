<template>
    <div>
        <p style="white-space:pre-line">{{message}}</p>
      <textarea type="text" v-model="message"/>
    </div>
</template>

<script>
export default {
    name:'DataBind',

     data() {
         return{
             message:"Hi"
         }
      },
}
</script>