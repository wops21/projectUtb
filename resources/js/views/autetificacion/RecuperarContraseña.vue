<template>
    <v-app>
    <div class="backgruond"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <v-row justify="center" class="text-center">
            <v-img max-width="70%" contain src="/logo_login.png"></v-img>
          </v-row>
          <v-form @submit.prevent="requestPassword" ref="form">
            <v-card-text class="mt-7">
              <h4 class="text-left display-0 text--black">Restablecer contraseña</h4>
              <div class="text-center mt-3">
              </div>
           
      
                  <v-alert v-show="errorUser !== ''" type="error">{{ errorUser.verification_code }}</v-alert>
                <v-alert v-show="errorUser !== ''" type="error">{{ errorUser.password }}</v-alert>
                <v-alert v-show="errorUser !== ''" type="error">{{ errorUser.message }}</v-alert>
   
              <v-text-field
                :rules="[
                  (v) => !!v || 'Ingrese un correo electronico',
                  (v) => /.+@.+\..+/.test(v) || 'El correo no es valido',
                ]"
                label="Correo"
                name="Email"
                prepend-icon="email"
                type="text"
                color="blue"
                v-model="user.email"
              />
              <v-text-field
  :rules="[
    (v) => !!v || 'Ingrese un código de verificacion',
    (v) => /^[0-9]+$/.test(v) || 'Ingrese solo números',
  ]"
  label="Código de verificación"
  name="verification_code"
  prepend-icon="lock"
  type="text"
  color="blue"
  v-model="user.verification_code"
/>

              <v-text-field
                v-model="user.password"
                :rules="[(v) => !!v || 'Ingrese una contraseña']"
                :type="passwordShow ? 'text' : 'password'"
                label="Contraseña"
                placeholder="Password"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                required
              />
              <v-text-field
                v-model="user.password_confirmation"
                :rules="[(v) => !!v || 'Ingrese una contraseña']"
                :type="passwordShow ? 'text' : 'password'"
                label="Contraseña"
                placeholder="Password"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                required
              />
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="indigo">
                <span class="white--text">Recuperar contraseña</span>
              </v-btn>
            </v-card-actions>
          </v-form>
        </v-card>
      </v-col>
    </v-main>
  </v-app>
</template>
<script>
import * as auth from "../../services/auth_service";
export default {
  data() {
            return {
              loading: false,
              
      passwordShow: false,
              step: '',
                user: {
                    email: '',
                    verification_code: '',
                    password: '',
                    password_confirmation: '',
                },

                errors: {},
                errorUser: ''
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
          switch (error.response.status) {
            case 422:
              this.errors = error.response.data.errors;
              this.errorUser = error.response.data.errors;
               break;
               case 401:
              this.errors = error.response.data.errors.message;
               break;
            case 404:
              this.errorUser = error.response.data.message;
              break;
            case 500:
              this.$swal({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal",
              });
            default:
              break;
          }}
       },
      }

}
</script>