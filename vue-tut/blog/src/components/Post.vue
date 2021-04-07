<template>
    <div>
        <form @submit="submitData" method="post">
                  <input type="text" name="title" placeholder="title" v-model="post.title"/> <br><br>
                  <input type="text" name="author"  placeholder="author" v-model="post.author"/> <br><br>
                  <button type="submit"> Post</button>
        </form>
    </div>
</template>
<script>
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
//  bind Vueaxios and  axios
Vue.use(VueAxios,axios)
export default { 
       name:"Post",
       data()
       {
           return {
               post:{
                title:null,
                author:null
               }
           }
       },
       methods:{
            submitData(e){

                this.axios.post('http://localhost:3000/posts',this.post).then((result)=>{
                    console.warn("result",result)
                })
                 // ep used for not refresh the page
                 e.preventDefault();
            } 
       }
}
</script>
