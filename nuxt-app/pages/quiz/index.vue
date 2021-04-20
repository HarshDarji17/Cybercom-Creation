<template>
  <v-layout
    class="mt-3 mb-5"
  >
    <v-flex xs8>
      <h1 class="center">
        Quiz App
      </h1>
      <v-card class="slide">
        <v-card-title class="color">
          <h3 class="headline">
            Question comes here
          </h3>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-radio-group v-model="choosen" row style="display:block">
              <v-radio label="option 1" color="green" value="option1" />
              <v-spacer />
              <v-radio label="option 2" color="green" value="option2" />
              <v-spacer />
              <v-radio label="option 3" color="green" value="option3" />
              <v-spacer />
              <v-radio label="option 4" color="green" value="option4" />
            </v-radio-group>
            <v-layout>
              <v-btn color="purple darken-2" dark small @click="handleAnswer">
                Submit
              </v-btn>
            </v-layout>
          </v-container>
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
export default {

  data () {
    return {
      choosen: ''
    }
  },
  methods: {
    handleAnswer () {
      // eslint-disable-next-line no-console
      console.log(this.choosen)
    }
  }
}
</script>

<style>
.center{
    text-align: center;
    margin-top: 15px;
    margin-bottom: 15px;
}
.slide{
    margin-left:190px;
}
.color{
    background-color:darkcyan;
    color:darkgray;
}
</style>
