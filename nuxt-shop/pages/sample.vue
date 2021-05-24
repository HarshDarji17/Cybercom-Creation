<template>
  <div class="row" id="app">
    
   
    <div class="row" id="app">
    <div class="col-lg-12 col-sm-13">
        <h4>Price Range</h4>
        <a class="filters" v-for="price in prices" :key="price" @click.prevent="setFilter(price)" > {{ price }}</a>
        <span class="filters" @click.stop="clearFilter">Clear</span>
    </div>
    <div class="col-lg-10 col-sm-12">
       <div class="product-tile"  v-for="product in filteredProducts" :key="product.id">
                <span class="col-sm-4">{{ product.Name }}</span>
                <span class="col-sm-4">${{ product.Price }}</span>
                <span class="col-sm-4">{{ product.Details }}</span>
        </div>
    </div>
</div>
</div>

</template>

<script>
export default {
     data: {
        url: '',
    products: [{Details: 'Cheap', Price: 1, Name: 'Candy'}, {Details: 'Thrifty', Price: 26, Name: 'Burger'}, {Details: 'Spendy', Price: 51, Name: 'Steak'}, {Details: 'Fancy', Price: 101, Name: 'Lobster'}],
        filterApplied: [],
        
        search: '',
        prices: [
            'Under $25', '$25 to $50', '$51 to $100', 'Over $100'
        ],
        filtersAsNumbers: {
          'Under $25': [0, 25], '$25 to $50': [25, 50], '$51 to $100': [51, 100], 'Over $100': [100, 1000000]
        }
    },
    created() {
       /* axios.get(this.url)
            .then((response) => {
                this.products = response.data;
            })
            .catch((error) => {
                this.products = null;
            }); */
    },
    computed: {
        filteredProducts() {
         return this.products.filter(product => {
            if (this.filterApplied.length < 1) {
              return product 
            } else {
              var productReturn 
              Object.keys(this.filtersAsNumbers)
                .filter(priceRange=> 
                  this.filterApplied.includes(priceRange)
                )
                .filter(priceRangeFiltered=>{
                  let low = this.filtersAsNumbers[priceRangeFiltered][0]
                  let high = this.filtersAsNumbers[priceRangeFiltered][1]
                  if (product.Price >= low && product.Price <= high) {
                    productReturn = product
                  }  
                })
              return productReturn
            }
          })
      }

    },
    methods: {
           
        setFilter(filter) {
            if (this.filterApplied.indexOf(filter) > -1) {
                this.filterApplied.pop(filter);
            } else {
                this.filterApplied.push(filter);
            }
            console.log(this.filterApplied);
        },
        clearFilter(){
          this.filterApplied = []
        }
    }
   

}
</script>

<style>
.filters, .product-tile { 
  margin: 20px;
}

</style>