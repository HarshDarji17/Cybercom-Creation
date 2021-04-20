<template>
  <v-container>
    <h1 class="center">
      Whether App
    </h1>
    <v-flex xs12>
      <v-card color="blue-grey darken-2" dark>
        <v-card-text>
          <v-layout justify-center>
            <!--  flex 1 -->
            <v-flex xs4 class="center">
              <h4>Temperature</h4>
              <h1 class="display-1">
                {{ weather.name }}
              </h1>
              <img :src="icon" alt="wheather icon">
              <p>
                <span class="display-1"> {{ temp() }} &#176;C </span>
                <span class="caption"> {{ weather.weather[0].description }} </span>
              </p>
            </v-flex>

            <!--  flex 2 -->
            <v-flex v-if="weather.weather" class="center">
              <h1>Wind & Pressure:</h1>
              <h3 class="headline">
                Wind: {{ weather.wind.speed }} ({{ weather.wind.deg }} &deg;)
              </h3>
              <h3 class="headline mt-4">
                Humidity: {{ weather.main.humidity }} %
              </h3>
              <h3 class="headline mt-4">
                Pressure: {{ weather.main.pressure }} hPa
              </h3>
            </v-flex>

            <!--  flex 3 -->
            <v-flex v-if="weather.weather" class="center">
              <h4>Other:</h4>
              <h3 class="headline">
                Max Temperature : {{ Math.round(weather.main.temp_max -273 ) }} &deg;
              </h3>
              <h3 class="headline mt-4">
                Min Temperature: {{ Math.round(weather.main.temp_min -273 ) }} &deg;
              </h3>

              <v-flex />
            </v-flex>
          </v-layout>
        </v-card-text>
      </v-card>
    </v-flex>

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
  </v-container>
</template>
<script>
export default {
  asyncData ({ params, $axios }) {
    return $axios

      .$get('https://api.openweathermap.org/data/2.5/weather?q=London&appid=76ebb8e755cf3b7399ec56f7e98e0c9b')
      .then((res) => {
        return { weather: res }
      })
  },

  data () {
    return {
      city: 'London'

    }
  },
  computed: {
    icon () {
      return this.weather.weather

        ? `https://openweathermap.org/img/w/${this.weather.weather[0].icon}.png`
        : ''
    }
  },
  // created () {
  //   this.getWeatherInfo()
  // },

  methods: {
    getWeatherInfo () {
      this.$axios.$get(`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=76ebb8e755cf3b7399ec56f7e98e0c9b`
      )
      // eslint-disable-next-line no-console
        .then(res => (this.weather = res))
    },
    temp () {
      return this.weather.main ? Math.round(this.weather.main.temp - 273) : ''
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
.caption{
  margin-left:23px;
}
.headline{
  margin-top:10px;
}
</style>
