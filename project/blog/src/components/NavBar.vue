<template>
    <v-toolbar dark flat id="toolbar">
        
        <!-- icon -->
        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <!-- logo -->
        <v-toolbar-title>Harsh Darji</v-toolbar-title>
        <v-spacer></v-spacer>

        <!-- links -->
        <v-toolbar-items class="">
            <v-btn plain>
                <router-link to="/" class="white--text" active-class="active" exact> Home </router-link>
            </v-btn>
            <v-btn plain>
                <router-link to="/notification" class="white--text" active-class="active" exact> Notification </router-link>
            </v-btn>
             <v-btn plain>
                <router-link to="/signin" class="white--text" active-class="active" exact> Sign In </router-link>
            </v-btn>
             <v-btn plain>
                <router-link to="/signup" class="white--text" active-class="active" exact> Sign Up </router-link>
            </v-btn>
            <!-- <v-btn plain>
                <router-link to="/showdata" class="white--text" active-class="active" exact> Show Data </router-link>
            </v-btn> -->
            <v-btn plain>
                <router-link to="/contact-us" class="white--text" active-class="active" exact> Contact US </router-link>
            </v-btn>
        </v-toolbar-items>

    </v-toolbar>
</template>

<script>
export default {
    name: "NavBar",
};
</script>

<style scoped>
#toolbar {
    background-color: black;
}
a {
    text-decoration: none;
    color: white;
}
</style>