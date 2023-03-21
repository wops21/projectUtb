<template>
    <v-app dark>
    <v-content style="background:#253139">
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="5" md="5">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="12" sm="12" xs="12">
                      <v-card-text class="mt-12">
                        <h1
                          class="text-center display-2 text--black"
                        >Iniciar sesión</h1>
                        <v-form v-on:submit.prevent="login">
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="blue"
                            v-model="user.email"
                          />

                          <v-text-field
                            id="password"
                            label="Password"
                            name="password"
                            prepend-icon="lock"
                            type="password"
                            color="blue"
                            v-model="user.password"
                          />
                          <div class="text-center mt-3">
                        <v-btn type="submit" rounded color="light-blue darken-4" dark>INGRESAR</v-btn>
                      </div>
                        </v-form>
                      <div class="text-center mt-3">
                        <v-btn class="text-center mt-4" rounded color="light-blue darken-4" small @click="recuperar"><h5>¿Olvido su contraseña?</h5></v-btn>
                      </div>
                      </v-card-text>
                    
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import * as auth from "../../services/auth_service";
export default {
  data() {
            return {
              step: '',
                user: {
                    email: '',
                    password: '',
                    remember_me: true
                },

                errors: {}
            }
        },   
      methods:{
        login: async function() {      
                  try {
             await auth.login(this.user);
              this.$router.push('/sideBar/'); 
          
                } catch (error) {
                   console.log(error)
                }
            },
            recuperar(){
              this.$router.push('/recuperar')
            }

      }

}
</script>