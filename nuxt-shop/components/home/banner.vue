<template>
    <div> 
        <!-- banner -->
        <div class="mb-10">
           <v-carousel>
          <v-carousel-item v-for="item in items" :key="item.id" v-html="item.content">
          </v-carousel-item>
          </v-carousel>
        </div>
    </div>
</template>

<script>


export default {
   
    data: () => ({
               
       items: [
           {
           id: "1",
           content: '<iframe width="1400px" height="615" src="https://cdn.1stopbedrooms.com/media/bannerslider/video/s/p/springsale_mainbanner_desk_060321.mp4" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
      },
      {
           id: "2",
           content: '<iframe width="1400px" height="615" src="https://cdn.1stopbedrooms.com/media/bannerslider/s/p/springsale_mattress_mainbnr_desk_040321.png" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>'
           },
           {
            id:"3",
            content: '<iframe width="1400px" height="615" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Fashion/Event/PostMayArt/AF_Header/AF-PC.jpg " frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' 
           },
           {
            id:"4",
            content: '<iframe width="1300px" height="615" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/MSD/CatPage/PC_header_01.jpg " frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' 
           },
           {
            id:"5",
            content: '<iframe width="1400px" height="615" src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Laptops/D23372801_IN_PC_Laptops-Intel-Bundle_1500x300_2-revised.jpg " frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' 
           },
           
    ]
    }),
   
}
</script>

<style>
</style>