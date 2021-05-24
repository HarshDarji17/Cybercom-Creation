<template>
  <v-app>
    <div>
      <v-app-bar app color="yellow darken-2" height="77px">

         <!-- title project -->
        <v-toolbar>
          <v-toolbar-title>Awesome Shop</v-toolbar-title>
           <v-switch
        v-model="$vuetify.theme.dark"
        class="mt-7 ml-10"
        inset
        label="Dark"
        persistent-hint
      ></v-switch>
   <v-spacer></v-spacer>
         <!-- search bar -->
     <v-text-field class='search' placeholder="search something"></v-text-field>
          <v-spacer></v-spacer>

            <!-- menu drawer -->
          <span class="hidden-sm-and-up" >
            <v-btn @click.stop="drawer = !drawer"> Menu </v-btn>
          </span>

             <!-- home btn  -->
          <v-toolbar-items class="hidden-xs-only">
            <v-btn class="ml-3" text to="/">Home</v-btn>

            <!-- products btn -->
            <v-btn class="ml-3" text to="/products">products</v-btn>

            <!-- store btn -->
            <v-btn class="ml-3" text to="/store">store</v-btn>

            <v-spacer></v-spacer>

            <!-- get start btn -->

            <v-btn class="mr-5" v-if="!$auth()" text to="/login"
              >Get Start</v-btn
            >


                     <!-- logout btn -->
            <v-btn
              class="grey darken-3"
              v-if="$auth()"
              @click="logout"
              text
              to="/logout"
              >Logout</v-btn
            >
           <!-- cart -->
                    <v-badge
                        :content="cartQuantities"
                        :value="cartQuantities"
                        color="black"
                        overlap
                        class="mt-5"
                    >
                        <n-link to="/cart">
                            <v-icon>mdi-cart</v-icon>
                        </n-link>
                    </v-badge>
          </v-toolbar-items>
        </v-toolbar>
      </v-app-bar>
      <v-navigation-drawer v-model="drawer" absolute temporary right>
        <v-list dense>
          <v-list-items
            v-for="item in items"
            :key="item.title"
            :to="item.link"
            link
            
          >
            <v-list-item-content>
              <v-list-item-title>
                {{ item.title }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-items>
        </v-list>
      </v-navigation-drawer>
      <v-main>
        <nuxt />
      </v-main>
    </div>
  </v-app>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data() {
    return {
      drawer: false,
      items: [
        { title: 'Home', link: `/`, icon: '' },
        { title: 'Products', link: `/products`, icon: '' },
        { title: 'Get Start', link: '/login', icon: '' },
        { title: 'Cart', link: '/cart', icon: 'mdi-cart' },
      ],
    }
  },
  computed: mapGetters('cart', ['cartQuantities']),

  methods: {
    logout() {
      this.$cookies.remove('token')
      this.$store.commit('token/setToken', null)
      this.$store.commit('auth/setLoggedIn', false)
      this.$router.push('/')
    },
  },
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
.search{
  padding-left: 50px;
  width:230px;
  height:55px;
  border: 1px solid ;
 border-radius: 50px;
text-decoration: none;
  
  
}

    
</style>