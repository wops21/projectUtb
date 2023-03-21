<template>
  <div>
    <v-app>
      <nav>
        <v-app-bar color="blue-grey darken-4" class="app-bar" dark app>
          <v-app-bar-nav-icon @click.stop="drawer = !drawer"
            ><span class="material-icons"> menu </span></v-app-bar-nav-icon
          > 
          <v-toolbar-title class="text-uppercase">
            <span class="font-weight-light">Universidad Tecnológica Bolivana</span>
          </v-toolbar-title>
          <v-spacer></v-spacer>
          <Observacion/>
          <v-spacer></v-spacer>
          <v-icon v-model="switch1" flat @click="toggle_dark_mode">
       {{ darkModeIcon}}
      </v-icon>

          <v-btn color="indigo darken-4" @click="pushRutePerfil">Perfil</v-btn>
        <br>
          <v-btn color="indigo darken-4" @click="pushRute">
            <v-icon>settings_applications</v-icon>
          </v-btn>
       
        </v-app-bar>
        <v-navigation-drawer v-model="drawer" dark app class="darken-4" id="v-nav">
          <v-layout column align-center>
            <v-flex class="mt-1">
              <v-avatar size="150">
                <v-img src="/logo_1_0.png"></v-img>
              </v-avatar>
            </v-flex>
          </v-layout>

          <v-list>
            <v-list-item v-for="link in links1" :key="link.text" router :to="link.route" v-if="link.role == 'admin'">
              <v-list-item-action>
                <v-icon>
                  {{ link.action }}
                </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ link.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
            <v-list-group
              v-for="item in items"
              :key="item.title"
              v-model="item.active"
              :prepend-icon="item.action"
              no-action
            >
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title v-text="item.title"></v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="child in item.items"
                :key="child.title"
                router
                :to="child.route"
              >
                <v-list-item-content>
                  <v-list-item-title v-text="child.title"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </v-list-group>
            <v-list-item v-for="link in links" :key="link.title" router :to="link.route">
              <v-list-item-action>
                <v-icon>
                  {{ link.action }}
                </v-icon>
              </v-list-item-action>
              <v-list-item-content>
                <v-list-item-title>{{ link.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
          <v-layout row style="position: absolute; bottom: 0" align-center="">
            <v-flex md-10>
              <v-card color="grey darken-1">
                <v-list-item dense>
                  <v-list-item-action>
                    <v-list-item dense>
                      <v-list-item-avatar class="ml-2">
                        <v-img src="/logo_1_0.png"></v-img>
                      </v-list-item-avatar>
                      <v-list-item-action class="ml-8">
                        <v-badge color="error" overlap>
                          <template slot="badge"> 5 </template>
                          <v-icon color="tertiary">mdi-bell</v-icon>
                        </v-badge>
                      </v-list-item-action>
                    </v-list-item>
                  </v-list-item-action>
                  <v-list-item-content>
                    <v-tooltip top>
                      <template v-slot:activator="{ on }">
                        <v-btn @click="logout" text icon v-on="on" class="mt-2">
                          <v-icon dark right>logout</v-icon>
                        </v-btn>
                      </template>
                      <span>Salir</span>
                    </v-tooltip>
                  </v-list-item-content>
                </v-list-item>
              </v-card>
            </v-flex>
          </v-layout>
        </v-navigation-drawer>
      </nav>
      <v-main>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-main>
      <Footer />
    </v-app>
  </div>
</template>
<script>
import Footer from "./Footer.vue";
import * as auth from "../services/auth_service.js";
import Observacion from "../views/administracion/Observacion.vue"
export default {
  components: {
    Footer,
    Observacion
  },
  data: () => ({
    switch1: "",
    darkModeIcon: "",
    drawer: true,
 
    links: [
      { action: "assignment", title: "Solicitudes", route: "/solicitudes", role: 'admin'},
      { action: "assignment", title: "Asignaciones", route: "/asignaciones", role: 'user' },
      { action: "assignment_ind", title: "Defensa", route: "/defensa" },
    ],
    links1: [
      {
        title: "Inicio",
        action: "analytics",
        route: { name: "dashboards" },
        role: 'user'
      },
    ],
    items: [
      {
        action: "group",
        items: [
          { title: "Estudiantes", route: "/estudiantes" },
          { title: "Docentes", route: "/docentes" },
        ],
        title: "Administración",
      },
    ],
  }),
  mounted() {
    const theme = localStorage.getItem("dark_theme");
    if (theme) {
      if (theme === "true") {
      this.darkModeIcon = "mdi-moon-waning-crescent"
        this.$vuetify.theme.dark = true;
      } else {
        this.darkModeIcon = "mdi-white-balance-sunny"
        this.$vuetify.theme.dark = false;
     
      }
    } else if (
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      this.$vuetify.theme.dark = true;

      localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
    }
  },
  methods: {
    pushRute() {
      this.$router.push("/config");
    },
    pushRutePerfil(){
      this.$router.push("/perfil");
    },
    toggle_dark_mode: function () {
      console.log(this.darkModeIcon)
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark;
     localStorage.setItem("dark_theme", this.$vuetify.theme.dark.toString());
     const state = localStorage.getItem("dark_theme");
       if(state == "true"){
        this.darkModeIcon = "mdi-moon-waning-crescent"   
      }else {
        this.darkModeIcon = "mdi-white-balance-sunny"
      }  
    },
    logout: async function () {
      auth.logout();
      this.$router.push("/");
    },
  },
};
</script>

<style scoped>
#v-nav {
  width: 250px !important;
}
.app-bar {
  width: auto !important;
}
</style>
