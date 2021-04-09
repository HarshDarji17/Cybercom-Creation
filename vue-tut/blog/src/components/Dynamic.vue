<template>
    <div>
        <h1>Dynamic Component</h1>
        <component v-bind:is="cmp"></component>
        <button @click="updateCmp('signin')">Load signin</button>
        <button v-on:click="updateCmp('signup')">Load signup</button>
    </div>
</template>
<script>
import Signin from './Signin'
import Signup from './Signup'
export default {
    name:'Dynamic',
    components:{
        'signin':Signin,
        'signup':Signup
    },
    data(){
       return {cmp:'signup'}
    },
    methods:{
        updateCmp(item){
          this.cmp=item
        }
    }
}
</script>