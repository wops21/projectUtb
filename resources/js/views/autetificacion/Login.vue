<template>
  <v-app>
    <div class="backgruond"></div>
    <v-main class="d-flex justify-center align-center">
      <v-col cols="10" lg="4" class="mx-auto">
        <v-card class="pa-4">
          <v-row justify="center" class="text-center">
              <v-img max-width="70%"   contain  src="/logo_login.png"></v-img>
             </v-row>
          <v-form @submit.prevent="login" ref="form">
            <v-card-text>
              <v-alert v-show="errorUser !== ''" type="error">{{ errorUser }}</v-alert>
              <v-text-field
                v-model="user.email"
                :rules="[
                  (v) => !!v || 'Ingrese un correo electronico',
                  (v) => /.+@.+\..+/.test(v) || 'El correo no es valido',
                ]"
                type="email"
                label="Correo"
                placeholder="Email"
                prepend-inner-icon="mdi-account"
                required
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
              <v-switch
                v-model="user.remember_me"
                label="¿Recordarme?"
                color="indigo"
              ></v-switch>
              <div class="text-center mt-3">
                <h5 @click="recuperar" style="cursor: pointer">¿Olvido su contraseña?</h5>
              </div>
            </v-card-text>
            <v-card-actions class="justify-center">
              <v-btn :loading="loading" type="submit" color="indigo">
                <span class="white--text px-8">Login</span>
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
      user: {
        email: "",
        password: "",
        remember_me: false,
      },

      errors: {},
      errorUser: "",
    };
  },
  methods: {
    login: async function () {
      if (this.$refs.form.validate()){
          this.loading = true
          try {
        const response = await auth.login(this.user);
        
        
        this.errors = {};
        switch (response.token_scope) {
          case "administratorMain":
            this.$router.push("/sidebar-admin/");
            break;
          case "administratorSem":
            this.$router.push("/admin-s");
            break;
          case "administratorMainSem":
            this.$router.push("/admin-e");
            break;
          case "user":
            this.$router.push("/client-n");
            break;
          default:
            this.$router.push("/");
            break;
        }
      
      }

      catch (error) {
        switch (error.response.status) {
          case 422:
            this.errors = error.response.data.errors;
            break;
          case 401:
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
      }  setTimeout(()=> {
           this.loading = false
        },1000)
        
     
    },
    recuperar() {
      this.$router.push("/recuperar");
    },
  },
};
</script>
<style>
.backgruond {
  background-image: url(../../../../public/logo_fondo.jpg) !important;
  height: 100%;
  width: 100%;
  display: block;
  position: absolute;
  top: 0;
  background-size: cover;
}
.h1:hover {
  cursor: pointer;
}
</style>
