<template>
  <div>
    <!-- Categories -->
    <div v-for="product in items" :key="product.id">
      <v-card class="rounded-0 mt-10" elevation="5">
        <!-- title name -->
        <div class="row mx-5 py-5">
          <h1>Deal of the day</h1>
                 
                  <!-- clock -->
          <img :src="require('@/assets/svg/clock.svg')" class="ml-3" />
          <v-title class="ml-5 py-3"
            >{{ time }} <span class="clk">Left</span>
          </v-title>

          <!-- view all btn -->

          <v-btn color="primary" class="rounded-0 ml-auto">View all</v-btn>
        </div>
        <v-divider></v-divider>

        <!-- slider -->
        <v-slide-group>
          <v-slide-item v-for="prod in product" :key="prod.name">
            <v-card class="ma-4">
              <img :src="prod.src" alt="" max-height="250" width="220" />
              <v-card-text class="text-center"
                ><b>{{ prod.name }}</b></v-card-text
              >
              <v-card-text class="text-center green--text"
                ><b>{{ prod.offer }}</b></v-card-text
              >
              <v-card-text class="text-center"
                ><b>BoAt,JBL & More</b></v-card-text
              >
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      time: '',

      items: {
        DealoftheDay: [
          {
            name: 'speakers',
            src:
              'https://rukminim1.flixcart.com/image/832/832/ko382a80/speaker/home-theatre/a/v/r/in-spa8140b-94-spa8140b-94-philips-original-imag2mcqmyuekvdf.jpeg?q=70',
            offer: 'upto 70% off',
          },
          {
            name: 'boAt Headset ',
            src:
              'https://rukminim1.flixcart.com/image/832/832/ke1pnrk0-0/headphone/g/o/b/rockerz-335-boat-original-imafutf7utjhjuka.jpeg?q=70',
            offer: 'upto 70% off+ extra 10% off',
          },
          {
            name: 'kitchen Essentials ',
            src:
              'https://rukminim1.flixcart.com/image/832/832/joud1u80-1/container/a/q/e/art-no-hc-1658-milton-original-imafb8yfc4zmzjb8.jpeg?q=70',
            offer: 'under 500 +upto 70% off',
          },
          {
            name: 'Home Furnishing Range ',
            src:
              'https://rukminim1.flixcart.com/image/832/832/khtghow0/mosquito-net/t/y/a/blue-mosquito-net-polyester-adults-net-king-size-double-bed-original-imafxqn3uqzdhgey.jpeg?q=70',
            offer: 'upto 70% off + extra 10% off',
          },
          {
            name: 'Home Gym combos ',
            src:
              'https://rukminim1.flixcart.com/image/832/832/k687wy80/kit/x/y/b/pvc-50-kg-curl-and-straight-rod-super-deluxe-combo-na-vicky-original-imafzqfjy6mugpaf.jpeg?q=70',
            offer: 'upto 70% off',
          },
          {
            name: 'Best of pulse oximeters ',
            src:
              'https://rukminim1.flixcart.com/image/832/832/kg15ocw0/pulse-oximeter/v/v/z/flipkart-smartbuy-plus-health-original-imafwczgw3du3yzs.jpeg?q=70',
            offer: 'upto 60% off',
          },
        ],
      },
    }
  },

  methods: {
    getNow() {
      var today = new Date()
      this.time =
        today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
    },
  },
  created() {
    setInterval(this.getNow, 1000)
  },
}
</script>

<style>
.clk {
  color: red;
  margin-top: 15px;
}
</style>