<template>
  <div>
          <!-- simple nav -->
    <v-toolbar color="dark" position fixed height="170px">
      <div v-for="item in items" :key="item.id">
        <div class="ma-5" color="dark">
          <img :src="item.src" alt="" position fixed max-height="250" width="110" />

          <v-card-text class="text-center"
            ><b>{{ item.name }}</b></v-card-text
          >
        </div>
      </div>
    </v-toolbar>
  </div>
</template>
<script>
export default {
  data: () => ({
    items: [
      {
        id: '1',
        src:
          'https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100',
        name: 'Top Offers',
      },
      {
        id: '2',
        src:
          'https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100',
        name: 'Grocery',
      },
      {
        id: '3',
        src:
          'https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100',
        name: 'Mobiles',
      },
      {
        id: '4',
        src:
          'https://rukminim1.flixcart.com/flap/128/128/image/82b3ca5fb2301045.png?q=100',
        name: 'Fashion',
      },
      {
        id: '5',
        src:
          'https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100',
        name: 'Electronics',
      },
      {
        id: '6',
        src:
          'https://rukminim1.flixcart.com/flap/128/128/image/ee162bad964c46ae.png?q=100',
        name: 'Home',
      },
      {
        id: '7',
        src:
          'https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100',
        name: 'Appliances',
      },
      {
        id: '8',
        src:
          'https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100',
        name: 'Travel',
      },
      {
        id: '9',
        src:
          'https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100',
        name: 'Beauty, toys and more',
      },
    ],
  }),
}
</script>
<style>
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.button--green {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 20px 30px;
}
.button--green:hover {
  color: #fff;
  background-color: #3b8070;
}
.button--grey {
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover {
  color: #fff;
  background-color: #35495e;
}
</style>