<template>
  <v-container>
    <v-row>
      <v-col sm="3">
        <Sidebar />
      </v-col>
      <v-col sm="9" lg="9">
        <div class="container mx-auto row">
            <ProductItem
                v-for="product in products"
                :key="product.id"
                :product="product"
            />
        
        </div>
      </v-col>
    </v-row>
    <footer />
  </v-container>
</template>

<script>
import Sidebar from '@/components/store/Sidebar.vue'
import ProductItem from './../components/ProductItem'
import Footer from '../components/Footer.vue'
import { mapGetters } from 'vuex'

export default {
 
  components: {
    Sidebar,
    ProductItem,
    Footer
  },
  
   computed: mapGetters('products', ['products']),
  
  }
</script>
