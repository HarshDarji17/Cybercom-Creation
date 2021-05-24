<template>
  <v-app id="inspire">
    <v-main>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="8">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 green--text text--accent-3 "
                        >Sign in to Shopping</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon color="deep-orange accent-3" x-large>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon color="deep-orange accent-3" x-large>mdi-google-plus</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon color="deep-orange accent-3" x-large> mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center green--text mt-4">Ensure your email for registration</h4>
                        <v-form>
                          <v-text-field v-model="userInfo.email" 
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email deep-orange accent-3 x-large"
                            type="text"
                            color="green accent-3"
                            :rules="[required('email'), emailFormat()]"
                          />

                          <v-text-field v-model="userInfo.password"
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock deep-orange accent-3 x-large"
                            color="green accent-3"
                            :type="showPassword ? 'text' : 'password'" 
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                             @click:append="showPassword = !showPassword"
                             counter=true
                             :rules="[required('password'), minLength('password', 8)]"
                            
                          />
                        </v-form>
                        <h3 class="text-center red--text mt-4">Forgot your password ?</h3>
                      </v-card-text>
                      <div class="text-center mt-3">
                        <v-btn rounded color="deep-orange accent-3" dark  @click="signIn">SIGN IN</v-btn>
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="amber darken-4 accent-3">
                      <v-card-text class="black--text mt-12">
                        <h1 class="text-center  display-1">Hello, Friend!</h1>
                        <h5
                          class="text-center"
                        >Enter your personal details and start journay with us</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded color= "grey darken-3" @click="step++">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="amber darken-4 accent-3">
                      <v-card-text class="black--text mt-12">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                        <h5
                          class="text-center"
                        >To Keep connected with us please login with your personnel info</h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded color="grey darken-3" @click="step--">Sign in</v-btn>
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1 class="text-center display-2 teal--text text--accent-3">Create Account</h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon color="deep-orange" x-large>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon color="deep-orange" x-large>mdi-google-plus</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab color="black" outlined>
                            <v-icon color="deep-orange" x-large> mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">Ensure your email for registration</h4>
                        <v-form>
                          <v-text-field v-model="userInfo.name" 
                            label="Name"
                            name="Name"
                            prepend-icon="mdi-pencil deep-orange "
                            type="text"
                            color="teal accent-3"
                            :rules="[required('name')]"
                            
                          />
                          <v-text-field  v-model="userInfo.email" 
                            label="Email"
                            name="Email"
                            prepend-icon="mdi-email deep-orange"
                            type="text"
                            color="teal accent-3 "
                            :rules="[required('email'), emailFormat()]"
                          />

                          <v-text-field v-model="userInfo.password"
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="mdi-lock  deep-orange"
                            color="teal accent-3"
                            :type="showPassword ? 'text' : 'password'" 
                            :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                             @click:append="showPassword = !showPassword"
                             counter=true
                             :rules="[required('password'), minLength('password', 8)]"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5">
                        <v-btn rounded color="deep-orange" dark @click="signUp">SIGN UP</v-btn>
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>
 
<script>
import validations from "@/utils/validations";

export default {
  
  data: () => {
        
      return {
        step: 1,
        valid: false,
        showPassword: false,
        
        // hasName: false,
        userInfo: {
          email: '',
          password: ''
        },
        ...validations
      }
    },
    computed: {
       token() {
            return this.$store.state.token
        },
        user() {
            return this.$store.state.user
        }
    },
    // props: ["submitForm", "buttonText", "hasName","source: String"],
    methods: {
      signIn() {
         this.$axios
                    .$post(
                        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${'AIzaSyBQ7Hgr6PutrdENc_0qbPTb_bBSDazflEo'}`,
                        {
                            email: this.userInfo.email,
                            password: this.userInfo.password,
                            returnSecureToken: true,
                        }
                    )
                    .then((res) => this.handleToken(res.idToken))
                    .catch((err) => console.log(err))
            },
        
        handleToken(token) {
            this.$cookies.set('token', token)
            this.$store.commit('token/setToken', token)
            this.$store.commit('auth/setLoggedIn', true)
            this.$router.push('/')
            this.getUsersInfo()
        },
        getUsersInfo() {
            this.$axios
                .$post(
                    `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${'AIzaSyBQ7Hgr6PutrdENc_0qbPTb_bBSDazflEo'}`,
                    {
                        idToken: this.token.token,
                    }
                )
                .then((res) =>  this.$store.commit('usersInfo/setUser', res))
                
        },
    
        signUp() {
           
                this.$axios
                    .$post(
                        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${'AIzaSyBQ7Hgr6PutrdENc_0qbPTb_bBSDazflEo'}`,
                        {
                            displayName: this.userInfo.name,
                            email: this.userInfo.email,
                            password: this.userInfo.password,
                            returnSecureToken: true,
                        }
                    )
                    .then((res) => this.handleToken(res.idToken))
                    .catch((err) => console.log(err))
            },
        handleToken(token) {
            this.$cookies.set('token', token);
            this.$store.commit('auth/setLoggedIn', true)
            this.$router.push('/');
        },
    }
};
</script>