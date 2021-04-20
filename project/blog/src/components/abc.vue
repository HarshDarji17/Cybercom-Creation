<template>


  <v-card
    color="grey lighten-4"
    flat
    height="200px"
    tile
  >
    <v-toolbar dense dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-toolbar-title >Title</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn class="mr-5">
        <router-link to="/" class="white--text"  style="text-decoration:none">Home</router-link>
      </v-btn>

     <v-btn class="mr-5">
        <router-link to="/">Home</router-link>
      </v-btn>

     <v-btn class="mr-5">
        <router-link to="/">Home</router-link>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>



<script>
export default {

}
</script>

<style>

</style>
