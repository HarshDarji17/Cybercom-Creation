<template>
  <v-footer width="100%" color="yellow darken-2" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="black"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-col class="yellow darken-2 py-4 text-center black--text" cols="12">
        {{ new Date().getFullYear() }} — <strong>SHOPPING</strong>
      </v-col>
    </v-row>
  </v-footer>
</template>

<script>
export default {
  data: () => ({
    links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us'],
  }),
}
</script>

<style>
</style>