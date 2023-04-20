<template>
  <v-app>
    <div class="backgruond"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <v-row justify="center" class="text-center">
            <v-img max-width="70%" contain src="/logo_login.png"></v-img>
          </v-row>
          <v-form @submit.prevent="request" ref="form">
            <v-card-text class="mt-7">
              <h4 class="text-left display-0 text--black">Restablecer contraseña</h4>
              <div class="text-center mt-3">
                <p>
                  Ingrese su dirección de correo electrónico y le enviaremos instrucciones
                  sobre cómo restablecer su contraseña
                </p>
              </div>
              <v-alert v-show="errorUser !== ''" type="error">{{ errorUser }}</v-alert>

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
      user: {
        email: "",
      },

      errors: {},
      errorUser: "",
    };
  },
  methods: {
    request: async function () {
      if (this.$refs.form.validate()) {
        try {
          this.loading = true;
          await auth.resetPasswordRequest(this.user);

          this.$router.push({
            name: "recuperarContraseña",
            params: { email: this.user.email },
          });
        } catch (error) {
          switch (error.response.status) {
            case 422:
              this.errors = error.response.data.errors;
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
          }
        }
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
        }, 3000);
      }
    },
  },
};
</script>
