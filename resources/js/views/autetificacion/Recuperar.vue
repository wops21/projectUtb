<template>
    <v-app dark>
    <v-content style="background:#253139">
      <v-container class="fill-height" >
        <v-row align="center" justify="center">
          <v-col cols="12" sm="5" md="5">
            <v-card class="elevation-12">
              <v-window v-model="step">
                <v-window-item :value="1">
                  <v-row>
                    <v-col cols="12" md="12" sm="12" xs="12">
                      <v-card-text class="mt-7">
                        <h4
                          class="text-left display-0 text--black"
                        >Restablecer contraseña</h4>
                       <div class="text-center mt-3">
                        <h1>¿Olvidó su contraseña?</h1>
                        <br>
                        <h4>Ingrese su dirección de correo electrónico y le enviaremos instrucciones sobre cómo restablecer su contraseña</h4>
                       </div>
                          <v-form v-on:submit.prevent="request">
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="blue"
                            v-model="user.email"
                          />

                          <div class="text-center mt-3">
                        <v-btn type="submit" rounded color="light-blue darken-4" dark>RECUPERAR CONTRASEÑA</v-btn>
                      </div>
                        </v-form>
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
       request: async function(){
        try {
          await auth.resetPasswordRequest(this.user);
          this.$router.push({name: 'recuperarContraseña', params: { email: this.user.email}})
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