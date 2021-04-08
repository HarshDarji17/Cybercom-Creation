<template>
    <div>
         <h1>signup component</h1>
        <input type="text" name="" placeholder="enter your name" v-model="signup.username"/> <br><br>
        <input type="password" name="" placeholder="password"  v-model="signup.password"/><br><br>
        <p>Chosse your Hobbies</p>
        <input type="checkbox" name="" id="cricket" value="cricket"  v-model="signup.hobbies" />
        <label for="cricket">
            Cricket
        </label>
         <input type="checkbox" name="" id="football" value="football"  v-model="signup.hobbies" />
        <label for="football">
            football
        </label>
        <br><br>
         <p>Select Gender</p>
         <input type="radio" value="male" id="male" v-model="signup.gender" />
         <label for="male"> Male</label>
         <input type="radio" value="female" id="female" v-model="signup.gender" />
         <label for="male"> Female</label>
            <br><br>
         <button v-on:click="signupUser"> Sign Up</button>

    </div>
</template>
<script>
export default {
    name:'Signup',
   data() {
        return {
            signup: {
                username:null,
                password:null,
                hobbies:[],
                gender:null

            }
        }
    },
    methods:{
signupUser()
{
    console.warn(this.signup)
}
    }
    
}
</script>