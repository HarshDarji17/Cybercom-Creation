<template>
    <v-main>
        <v-container>

            <!-- title -->
            <h1 class="display-2 text-center" id="heading">Users Messages</h1>

            <!-- table -->
            <v-card>
                <v-card-title>
                    Queries...
                    <v-spacer></v-spacer>
                    <v-text-field
                        v-model="search"
                        append-icon="mdi-magnify"
                        label="Search"
                    ></v-text-field>
                </v-card-title>

                <!-- columns -->
                <v-data-table
                    :headers="headers"
                    :items="data"
                    :search="search"
                    :items-per-page="5"
                ></v-data-table>
            </v-card>
        </v-container>
        
    </v-main>
</template>

<script>

export default {
    name: "FormData",
    components: {
        
    },
    data() {
        return {
            data: [],
            search: "",
            headers: [
                { text: "Name", value: "name" },
                { text: "E-mail", value: "email" },
                { text: "Subject", value: "subject" },
                { text: "Message", value: "checkbox" },
            ],
        };
    },
    mounted() {
        this.datas = JSON.parse(localStorage.getItem('data'));
        console.log(this.datas);
    }
};
</script>

<style>
#heading {
    margin: 30px auto;
}
</style>