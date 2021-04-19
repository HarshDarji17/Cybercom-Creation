<template>
        <v-main>
   
             <!-- banner image -->
            <div id="bannerImg">
                <img :src="require('@/assets/banner.jpg')" alt="banner">

            </div>

            <!--sign in and sign up conecept-->
            <v-flex xs12 sm6 offset-sm3 class="text-xs-center" mt-5>
                <h1 mt-5>You are Sign In. & Sign Up.</h1>
             <v-btn color="warning" style="margin:30px" to="/signup">Sign Up</v-btn> 
              <v-btn color="warning" to="/signin">Sign In</v-btn>
                </v-flex>
           
             <!-- form -->
               <Form title=" Any Query then Connect with Us !" />
        </v-main>
</template>

<script>
import Form from "./Form";

export default {
    name: "Home",
    components: {
        Form
        },
    data() {
        return {};
    },
};
</script>

<style scoped>
#bannerImg {
    width: 100%;
}
</style>