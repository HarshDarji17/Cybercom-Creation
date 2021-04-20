<template>
    <div>
        <v-container>

            <!-- heading -->
            <h1 class="text-center display-2" id="heading">Notification</h1>
            
            <v-row>
                <v-col v-for="notification in notificatoins" :key="notification.title" md="12">
                    
                    <!-- card -->
                    <v-card>
                       <!-- image & title -->
                        <v-img class="white--text align-end" :src="notification.image">
                            <v-card-title> {{ notification.title }} </v-card-title>
                        </v-img>

                        <!-- date -->
                        <v-card-subtitle class="pb-0">
                            {{ notification.date }}
                        </v-card-subtitle>

                        <!-- Notification details -->
                        <v-card-text class="text--primary">
                            <h3 class="title">{{ notification.quota }}</h3>
                            <h3 class="body-2" >{{ notification.details }}</h3>
                        </v-card-text>

                        <!-- buttons -->
                        <v-card-actions>
                            <v-btn small color="primary" class="white--text" elevation="5"> Share </v-btn>
                            <v-btn small color="success" elevation="5">
                                <router-link :to="`/notification/${notification.title}`" class="white--text">
                                     Read More
                                </router-link> 
                            </v-btn>
                        </v-card-actions>
                
                    </v-card>
                </v-col>

            </v-row>
            </v-container> 
     </div>
</template>

<script>

export default {
    name: "Notification",
    components: {
        
    },
    data() {
        return {
            notificatoins: [
                {
                    id: '1',
                    image: require("@/assets/c1.jpg"),
                    title:  "Notification 1",
                    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis."
                },
                {
                    id: '2',
                    image: require("@/assets/c2.jpg"),
                    title:  "Notification 2",
                    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis."                },
                {
                    id: '3',
                    image: require("@/assets/c3.jpg"),
                    title: "Notification 3",
                    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis."
                },
                {
                    id: '4',
                    image: require("@/assets/c4.jpg"),
                    title: "Notification 4",
                     details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis."
                },
                {
                    id: '5',
                    image: require("@/assets/c5.jpg"),
                    title: "Notification 5",
                    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis."
                },
                {
                    id: '6',
                    image: require("@/assets/c6.jpg"),
                    title: "Notification 6",
                    details:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sapien faucibus et molestie ac feugiat sed lectus vestibulum mattis."
                },
                
            ],
        };
    },
    // directives: {
    //     trim: {
    //         inserted: function (el) {
    //             var str = el.innerHTML;
    //             var resultString = str.substr(0, 100) + "...";
    //             el.innerHTML = resultString
    //         }
    //     }
    // }
    
    
    }
</script>

<style scoped>
a {
    text-decoration: none;
}
#heading {
    margin: 50px auto;
}
</style>