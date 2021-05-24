<template>
    <v-app>
        <div class="row">

            <!-- sidebar -->
            <div class="col-md-2 col-sm-4">
                <v-navigation-drawer color="yellow darken-2" permanent fixed>

                    <!-- user -->
                    <div class="mt-10 mb-10">
                        <v-list-item>
                            <!-- admin image -->
                            <v-list-item-avatar class="ml-3">
                               <img
                           :src="require('@/assets/svg/profile.png')"
                            alt=""
                            class="img-fluid"
                            width="91%"
                            />
                            </v-list-item-avatar>
                            
                            <!-- Name -->
                            <v-list-item-content class="ml-2">
                                <n-link to="/admin">
                                    <v-list-item-title><b>Harsh Darji</b></v-list-item-title>
                                      <span>Online</span>
                                </n-link>
                            </v-list-item-content>
                        </v-list-item>
                    </div>

                    <v-divider></v-divider>

                    <!-- routes -->
                    <div class="mt-5 ml-6 black"   v-for="route in routes" :key="route.name">
                        <v-btn class="button no-active " text :to="route.path">
                               {{ route.name }}
                        </v-btn>                                          
                    </div>

                    <!-- logout -->
                    <v-btn class="button ml-6" id="logout" to="/logout">
                         Logout 
                    </v-btn>                                          

                </v-navigation-drawer>
            </div>

            <!-- components -->
            <div class="col-md-10 col-sm-8">
                <nuxt />
            </div>
        </div>

    </v-app>
</template>

<script>
export default {
    data: () => ({
        routes: [
            { name: 'Dashboard', path: '/admin' },
            { name: 'Add Product', path: '/admin/addProduct' },
            { name: 'Update Product', path: '/admin/update' }
        ]
    })
}
</script>

<style scoped>
a {
    text-decoration: none;
    color: black;
}

.button {
    width: 230px;
}
#logout {
    margin-top: 300px;
}
</style>