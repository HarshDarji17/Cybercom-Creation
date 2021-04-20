<template>
    <v-footer padless id="footer">
        <v-row justify="center" no-gutters>

            <!-- rounting links -->
            <v-btn plain class="my-2">
                <router-link to="/" class="white--text"> Home </router-link>
            </v-btn>
            <v-btn plain class="my-2">
                <router-link to="/blog" class="white--text"> Notification </router-link>
            </v-btn>
           
            <v-btn plain class="my-2">
                <router-link to="/contact-us" class="white--text"> Contact Us </router-link>
            </v-btn>
            <v-col
                class="py-4 text-center white--text"
                cols="12">
                Harsh Darji
            </v-col>
            
        </v-row>
    </v-footer>
</template>

<script>
export default {
    name: "Footer",
};
</script>

<style scoped>
#footer {
      background-color:black;
}
a {
    text-decoration: none;
    color: white;
}
</style>