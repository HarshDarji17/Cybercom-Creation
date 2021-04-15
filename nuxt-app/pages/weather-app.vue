<template>
  <v-container>
    <h1 class="center">
      Whether App
    </h1>
    <v-flex xs12>
      <v-card color="blue-grey darken-2" dark>
        <v-card-text>
          <v-layout justify-center>
            <v-flex class="center">
              <h4>Temperature</h4>
              <h1 class="display-1">
                {{ weather.name }}
              </h1>
              <img :src="icon" alt="wheather icon">
              <v-flex />
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
      <v-flex>
        <v-flex xs12 class="city">
          <v-form @submit.prevent="getWeatherInfo">
            <v-text-field v-model="city" label="Enter City Name" solo />
          </v-form>
          <v-flex>
            <v-layout />
          </v-flex>
        </v-flex>
      </v-flex>
    </v-flex>
  </v-container>
</template>
<script>
export default {

  data () {
    return {
      city: 'London',

      weather: {}
    }
  },
  computed: {
    icon () {
      return this.weather.weather

        ? `https://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`
        : ''
    }
  },
  created () {
    this.getWeatherInfo()
  },

  methods: {
    getWeatherInfo () {
      this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=76ebb8e755cf3b7399ec56f7e98e0c9b`
      )
      // eslint-disable-next-line no-console
        .then(res => (this.weather = res))
    }
  }

}
</script>
<style scoped>
.city{
        margin-top: 23px;
}
.center{
    text-align: center;
}

</style>
