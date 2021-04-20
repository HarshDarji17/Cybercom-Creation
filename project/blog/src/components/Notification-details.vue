<template>
    <v-container>

        <v-col v-for="notification in notifications" :key="notification.title">
            <div v-show="notification.title == id">
                
                <!-- Notification details -->
                <h1 class="display-2 text-center" id="title"> {{ notification.title }} </h1>
                <v-img id="image" :src="notification.image" :alt="notification.title"></v-img>
                <h6 class="subtitle-1 mt-5"> {{ notification.details }} </h6>

                <!-- button -->
                <v-btn color="primary mt-5" elevation="20">
                    <router-link to="/notification" class="white--text">
                        &#8678;Back to Notification
                    </router-link>
                </v-btn>

            </div>
        </v-col>

    </v-container>
</template>

<script>
export default {
    name: "NotificationDetails",
    data() {
        return {
            id: this.$route.params.id,
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
};
</script>

<style scoped>
#title {
    margin: 50px auto;
}

</style>