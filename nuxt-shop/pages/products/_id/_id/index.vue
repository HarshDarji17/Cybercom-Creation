<template>
    <div>
        <v-row>
      <v-col sm="3">
        <Sidebar />
        <Brandsidebar />
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
    </div>
</template>

<script>
import Sidebar from '@/components/store/Sidebar.vue'
import ProductItem from '../../../../components/ProductItem'
import { mapGetters } from 'vuex'
import Brandsidebar from '~/components/store/Brandsidebar.vue'
export default {
    components: {
        ProductItem,Sidebar,
        Brandsidebar
    },
    data: () => ({ 
        
    }),
    computed: mapGetters('products', ['products']),    
   mounted() {
        this.$store.dispatch('products/getProducts', {
            category: location.pathname.split('/')[2], 
            subCategory: this.$route.params.id
        })
    },
}
</script>

<style>
</style>