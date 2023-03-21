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
 
                          <v-form v-on:submit.prevent="requestPassword">
                          <v-text-field
                            label="Email"
                            name="Email"
                            prepend-icon="email"
                            type="text"
                            color="blue"
                            v-model="user.email"
                          />
                          <v-text-field
                            label="Codigo de verificacion"
                            name="Codigo"
                            prepend-icon="prefixIcon"
                            type="text"
                            color="blue"
                            v-model="user.verification_code"
                          />
                          <v-text-field
                            label="Contraseña"
                            name="Password"
                            prepend-icon="password"
                            type="text"
                            color="blue"
                            v-model="user.password"
                          />
                          <v-text-field
                            label="Confirmar contraseña"
                            name="Confirmar"
                            prepend-icon="password"
                            type="password"
                            color="blue"
                            v-model="user.password_confirmation"
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
                    verification_code: '',
                    password: '',
                    password_confirmation: '',
                },

                errors: {}
            }
        },   
        beforeRouteEnter(to, from, next) {
            next(vm => {
                vm.user.email = to.params.email
            });
        },
      methods:{
       requestPassword: async function(){
        try {
           await auth.resetPassword(this.user);
 
                    this.$router.push('/');
        } catch (error) {
          console.log(error)
        }
       },
      }

}
</script>