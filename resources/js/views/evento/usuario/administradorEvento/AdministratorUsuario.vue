<template>
  <v-data-table
    :headers="headers"
    :items="users"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>Usuarios</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="viewDialogAddUser" max-width="500px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">
              Nuevo
            </v-btn>
          </template>
          <v-form @submit.prevent="createUser" ref="form"  v-model="valid"
          lazy-validation>
            <v-card>
            <v-toolbar dense class="blue darken-2 white--text">
              <v-toolbar-title class="blue darken-2 white--text"
                >Registro del usuario
              </v-toolbar-title>
              <v-btn icon class="ml-auto" color="red">
                <v-icon color="red">mdi-close</v-icon>
              </v-btn>
            </v-toolbar>
            <v-card-text>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                  v-model="userData.nombres"
                    label="Nombres"
                    :rules="[
                      (v) => !!v || 'Debe ingresar un nombre',
                      (v) => /[aA-zZ]$/.test(v),
                    ]"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                  v-model="userData.apellidoPaterno"
                    label="Apellido paterno"
                    :rules="[
                      (v) => !!v || 'Debe ingresar un apellido',
                      (v) => /[aA-zZ]$/.test(v),
                    ]"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                  v-model="userData.apellidoMaterno"
                    label="Apellido Materno"
                    :rules="[
                      (v) => !!v || 'Debe ingresar un apellido',
                      (v) => /[aA-zZ]$/.test(v),
                    ]"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                  v-model="userData.role"
                    :items="cargos"
                    item-text="cargo"
                    item-value="role"
                    label="Rol"
                    persistent-hint
                    single-line
                    :rules="[(v) => !!v || 'Debe seleccionar un rol']"
                    required
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                  v-model="userData.email"
                    label="Correo"
                    :rules="[
                      (v) => !!v || 'Debe ingresar un correo',
                      (v) => /[aA-zZ]$/.test(v),
                    ]"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                  v-model="userData.id_carrera"
                  :items="carreras"
                    item-text="carreraNombre"
                    item-value="id"
                    label="Carrera"
                    persistent-hint
                    single-line
                    required
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                    <v-text-field
                v-model="userData.password"
                :rules="[(v) => !!v || 'Ingrese una contraseña']"
                :type="passwordShow ? 'text' : 'password'"
                label="Contraseña"
                placeholder="Password"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                required
              />
                </v-col>
                <v-col cols="12" sm="6" md="6">
                    <v-text-field
                v-model="userData.password_confirmation"
                :rules="[(v) => !!v || 'Confirmar contraseña']"
                :type="passwordShow ? 'text' : 'password'"
                label="Contraseña"
                placeholder="Password"
                prepend-inner-icon="mdi-key"
                :append-icon="passwordShow ? 'mdi-eye' : 'mdi-eye-off'"
                @click:append="passwordShow = !passwordShow"
                required
              />
                </v-col>
              </v-row>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-grey" dark>Cancelar</v-btn>
              <v-btn :disabled="!valid" type="submit" color="blue darken-2" dark
                >Guardar</v-btn
              >
            </v-card-actions>
          </v-card>
          </v-form>
        </v-dialog>
      </v-toolbar>
    </template>
   

  </v-data-table>
</template>
<script>
import { mapActions, mapGetters } from 'vuex';
import * as authService from '../../../../services/auth_service' 
export default {
  data(){
    return {
        valid: true,
        password: "",
    confirmPassword: "",
    passwordShow: false,
    users: [],
    headers: [
        {text: 'id',value: 'id'},
        {text: 'Nombres',value: 'nombres'},
        {text: 'Apellido paterno',value: 'apellidoPaterno'},
        {text: 'Apellido materno',value: 'apellidoMaterno'}
    ],
    cargos: [
      { cargo: "Admin control", role: "administratorMain" },
      { cargo: "Admin eventos", role: "administratorMainSem" },
      { cargo: "Admin seminarios", role: "administratorSem" },
      { cargo: "Admin registro", role: "user" },
    ],
    viewDialogAddUser: false,
    dialogDelete: false,
    passwordShow: false,
    userData: {
        id_carrera: '',
        role: '',
        nombres: '',
        apellidoPaterno: '',
        apellidoMaterno: '',
        email: '',
        password: '',
        password_confirmation: '',

    }
    }
  },
  mounted(){
    this.GET_CARRERAS();
    this.loadUsers();
  },
  computed:{
    ...mapGetters({carreras: "getCarreras"}),
  },
  methods: {
    ...mapActions(["GET_CARRERAS"]),
    async createUser(){
        try {
            
        const formData = new FormData();
        formData.append("id_carrera",this.userData.id_carrera);
        formData.append("role",this.userData.role);
        formData.append("nombres",this.userData.nombres);
        formData.append("apellidoPaterno",this.userData.apellidoPaterno);
        formData.append("apellidoMaterno",this.userData.apellidoMaterno);
        formData.append("email",this.userData.email);
        formData.append("password",this.userData.password);
        formData.append("password_confirmation",this.userData.password_confirmation);
        await authService.registerUser(formData)
        this.hideViewDialogAddUser()
        this.$swal({
          icon: "success",
          title: "Registro exitoso",
          text: "Usted ha registrado exitosamente",
        });
    } catch (error) {
            
        }
    },
    async loadUsers(){
        const response = await authService.users();
        this.users = response.data
    },
    hideViewDialogAddUser(){
        this.viewDialogAddUser = false
    },
    showViewDialogAddUser(){
        this.viewDialogAddUser = true
    }
  }
};
</script>
