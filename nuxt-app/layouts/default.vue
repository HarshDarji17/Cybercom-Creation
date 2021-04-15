<template>
  <div>
    <v-toolbar color="indigo" dark>
      <v-toolbar-title>Nuxt js</v-toolbar-title>
      <v-spacer />
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn>
          <n-link to="/weather-app">
            Weather App
          </n-link>
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <nuxt />
  </div>
</template>

<script>
export default {}
</script>

<style>
a{
  text-decoration: none;
  color: white;
}
  </style>
