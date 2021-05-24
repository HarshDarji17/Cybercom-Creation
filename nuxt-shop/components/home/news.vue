<template>
  <div>
       <!-- title -->
    <div class="row mx-5 py-5">
      <h1>Best offer Deals</h1>

              <!-- card1 -->
      <v-row no-gutters>
        <v-col class="d-flex child-flex" cols="4" mr-10>
          <v-col>
            <v-card class="ml-15">
              <img
                :src="require('@/assets/images/card1.jpg')"
                alt=""
                width="350px"
              />
            </v-card>
          </v-col>
                  <!-- card 2 -->
          <v-col>
            <v-card class="ml-15">
              <img
                :src="require('@/assets/images/card2.jpg')"
                alt=""
                width="360px"
                height="270px"
              />
            </v-card>
             </v-col>
             <!-- card 3 -->
          <v-col>
            <v-card sm="5" md="7" class="ml-15">
              <img
                :src="require('@/assets/images/card3.jpg')"
                alt=""
                width="350px"
                height="260px"
              />
            </v-card>
          </v-col>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        {
          src:
            'https://rukminim1.flixcart.com/flap/50/50/image/084789479074d2b2.jpg?q=50',
          src:
            'https://rukminim1.flixcart.com/flap/50/50/image/2f30db9425df5cec.jpg?q=50',
          src:
            'https://rukminim1.flixcart.com/flap/50/50/image/1ce0c4c1fb501b45.jpg?q=50',
        },
      ],
    }
  },
}
</script>

<style>
</style>