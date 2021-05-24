<template>
  <div>
    <v-sheet
      height="300"
      :elevation="4"
      class="pa-8"
      tile
    >
      <h3> BrandsFilters</h3>
      <v-radio-group v-model="brandFilter" :mandatory="true">
        <v-radio
          v-for="(brand, i) in brands"
          :key="i"
          :label="brand"
          :value="i"
        />
      </v-radio-group>
    </v-sheet>
  </div>
</template>

<script>
export default {
  data() {
    return {
      brands: [
        'Levis',
        'Puma',
        'Nike',
        'Dennis Lingo',
        'Awesome Brand'
      ],
      brandFilter: 0
    }
  }
}
</script>
