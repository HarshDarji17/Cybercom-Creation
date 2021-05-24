<template>
  <div>
    <!-- Categories -->
    <div v-for="product in items" :key="product.id">
      <v-card class="rounded-0 mt-10" elevation="5">
        <!-- title -->
        <div class="row mx-5 py-5">
          <h1>Awesome shopping app response to COVID-19</h1>

          <v-btn color="primary" class="rounded-0 ml-auto">View all</v-btn>
        </div>
        <v-divider></v-divider>

        <!-- slider -->
        <v-slide-group>
          <v-slide-item v-for="prod in product" :key="prod.name">
            <v-card class="ma-4">
              <a :href="prod.path">
                <img
                  :src="prod.src"
                  alt="prod.path"
                  max-height="250"
                  width="220"
                />
              </a>
            </v-card>
          </v-slide-item>
        </v-slide-group>
      </v-card>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    model: '0',
    time: '',

    items: {
      covidnews: [
        {
          src:
            'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/milaap/Shoveler_covid_milaap_2x._CB669735929_.jpg',
          path: 'https://www.cowin.gov.in/home',
        },
        {
          src:
            'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/milaap/Shoveler_covid_homecare_2x._CB669529040_.jpg',
          path:
            'https://www.psa.gov.in/innerPage/psa-initiatives/home-care-tips-managing-covid-19/2820/2820',
        },
        {
          src:
            'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/shoveller/Shoveler_covid_v2_smb_2x._CB669068181_.jpg',
          path: '',
        },
        {
          name: 'Home Furnishing Range ',
          src:
            'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/milaap/Shoveler_covid_Blog_2x._CB669735929_.jpg',
        },
        {
          name: 'Home Gym combos ',
          src:
            'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/2X/Shoveler_covid_vaccine_2x._CB671054677_.jpg',
        },
        {
          name: 'Best of pulse oximeters ',
          src:
            'https://images-eu.ssl-images-amazon.com/images/G/31/img20/Events/GW/Covid/shovler/2X/Shoveler_covid_donation_2x._CB671054677_.jpg',
        },
      ],
    },
  }),
}
</script>

<style>
</style>