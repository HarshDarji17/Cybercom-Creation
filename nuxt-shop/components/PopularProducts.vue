<template>
  <v-container class="fill-height mb-12">
    <v-row>
      <v-col sm="10" offset-sm="1" md="8" offset-md="2">
        <h2>
          Popular Products
          <v-btn to="store" text small color="primary">View All</v-btn>
        </h2>
      </v-col>
    </v-row>
    <v-row>
      <v-col sm="10" offset-sm="1" lg="8" offset-lg="2">
        <v-row>
          <v-col
            sm="6"
            md="4"
            v-for="(product, key) in getProducts.slice(0,3)"
            :key="key"
          >
            <v-card outlined>
              <v-img
                :src="require(`assets/images/${product.image}`)"
                alt=""
                height="200px"
              />

              <v-card-title>
                {{ product.name.slice(0,37) }}
              </v-card-title>

              <v-card-subtitle>
                <span>$</span>{{ product.price }}
              </v-card-subtitle>

              <v-card-actions>
                <v-btn color="success" outlined @click="addToCart(product)">
                  <v-icon>mdi-plus</v-icon>
                  Add to Cart
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'products',
  methods: {
    ...mapActions(['addToCart']),
  },
  computed: {
    // ...mapGetters(['getProducts']),
    ...mapGetters('productss', ['getProducts'])
  
  },
}
</script>
