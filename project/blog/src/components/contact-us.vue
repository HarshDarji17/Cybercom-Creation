<template>
    <v-main>

        <!-- image -->
        <div id="bannerImg">
            <img :src="require('@/assets/contact-us.jpg')" alt="banner" />
        </div>

        <!-- form -->
        <div>
            <Form title="Let's Connect it.. !!" />
        </div>

    </v-main>
</template>

<script>
import Form from "./Form";
export default {
    name: "contactUs",
    components: {
        Form,
    },
};
</script>

<style scoped>
#bannerImg {
    width:0rem;
}
</style>