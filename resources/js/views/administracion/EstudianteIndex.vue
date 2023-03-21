<template>
  <div>
    <v-container>
      <div>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              @input="loadCombox"
              v-model="buscador"
              label="Buscador"
              append-icon="search"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="4"> 
            <v-select
            v-model="comboData"
            @change="loadCombox"
            :items="allCarreras"
            item-text="carreraNombre"
            item-value="id"
            label="carreras"
            :return-object="false"
            >
            </v-select>
          </v-col>

          <v-col cols="12" sm="1">
            <router-link to="/estudiantesInactivos">
              <v-btn color="red">
                <v-icon>person_off</v-icon>
              </v-btn>
            </router-link>
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="1">
            <v-btn dark @click="showNewEstudianteDialog()"
              ><v-icon>person_add</v-icon></v-btn
            >
          </v-col>
        </v-row>
        <div class="text-h5">Lista de estudiantes</div>
      </div>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Carrera</th>
              <th>Titulo Proyecto</th>
              <th>Nombres</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Celular</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(estudiante, index) in estudiantes" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ estudiante.relacion_carrera.carreraNombre }}</td>
              <td>{{ estudiante.esTituloProyecto }}</td>
              <td>{{ estudiante.esNombres }}</td>
              <td>{{ estudiante.esPaterno }}</td>
              <td>{{ estudiante.esMaterno }}</td>
              <td>{{ estudiante.esCelular }}</td>
              <td>
                <span
                  v-bind:style="
                    estudiante.esEstado == 1 ? 'background-color:#5AEE4E' : 'background-color:blue'
                  "
                  ><strong>Activo</strong></span
                >
              </td>
              <td >
                <v-chip>
                  <v-icon color="black" fab dark small @click="editEstudiante(estudiante)"
                    >edit</v-icon
                  >
                </v-chip>
                <v-chip>
                  <v-icon
                    fab
                    dark
                    color="#E53935"
                    small
                    @click="deleteEstudiante(estudiante)"
                    >delete</v-icon
                  >
                </v-chip>
                <v-chip>
                  <v-icon @click="cargarDatos(estudiante)">history</v-icon>
                </v-chip>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div class="text-center">
        <v-pagination
          v-model="pagination.current"
          :length="pagination.total"
          @input="onPageChange"
          light
          circle
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </v-container>
    <v-dialog v-model="dialogCreate" max-width="500" persistent>
      <v-card>
        <v-form v-on:submit.prevent="createEstudiante" ref="form"
          v-model="valid"
          lazy-validation >
          <v-card-title class="blue darken-2 white--text">Registrar Estudiante</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>  
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="estudianteData.esNombres"
                    label="Nombres"
                    :rules="[v => !!v || 'Debe ingresar un apellido', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un apellido valido']"
                  required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="estudianteData.esPaterno"
                    label="Apellido Paterno"
                    :rules="[v => !!v || 'Debe ingresar un apellido', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un apellido valido']"
                  required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="estudianteData.esMaterno"
                    label="Apellido Materno"
                    :rules="[v => !!v || 'Debe ingresar un apellido', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un apellido valido']"
                  required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="estudianteData.esCelular"
                    label="Celular"
                    :rules="[v => !!v || 'Debe ingresar un número de celular', v => /[0-9]$/.test(v) || 'Debe ingresar un número de celular valido']"
                  required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="10" md="10">
                  <v-textarea
                    v-model="estudianteData.esTituloProyecto"
                    label="Tema"
                    auto-grow
                    outlined
                    rows="1"
                    row-height="15"
                    :rules="[v => !!v || 'Debe ingresar titulo de proyecto']"
                    required
                  ></v-textarea>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="estudianteData.id_carrera"
                    :items="carreras"
                    item-text="carreraNombre"
                    item-value="id"
                    label="Carrera"
                    persistent-hint
                    single-line
                    :rules="[v => !!v || 'Debe seleccionar una carrera']"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="estudianteData.esGenero"
                    :items="generos"
                    item-text="genero"
                    item-value="bGenero"
                    label="Genero"
                    persistent-hint
                    single-line
                    :rules="[v => !!v || 'Debe seleccionar un genero', v => /[aA-zZ]$/.test(v)]"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="hideNewEstudianteDialog" color="blue-grey" dark>Cancelar</v-btn>
            <v-btn :disabled="!valid" type="submit" color="blue darken-2" dark>Guardar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogUpdate" max-width="500" persistent>
      <v-form v-on:submit.prevent="updateEstudiante" ref="form"
          v-model="valid"
          lazy-validation >
        <v-card>
          <v-card-title class="blue darken-2 white--text">Editar Estudiante</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="editEstudianteData.esNombres"
                    label="Nombres"
                    :rules="[v => !!v || 'Debe ingresar los nombres', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un nombre valido']"
                  required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="editEstudianteData.esPaterno"
                    label="Apellido Paterno"
                    :rules="[v => !!v || 'Debe ingresar un apellido', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un nombre valido']"
                  required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="editEstudianteData.esMaterno"
                    label="Apellido Materno"
                    :rules="[v => !!v || 'Debe ingresar un apellido', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un nombre valido']"
                  required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="editEstudianteData.esCelular"
                    label="Celular"
                    :rules="[v => !!v || 'Debe ingresar un número de celular', v => /[0-9]$/.test(v) || 'Debe ingresar un nombre valido']"
                  required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="10" md="10">
                  <v-textarea
                    label="Tema"
                    auto-grow
                    outlined
                    rows="1"
                    row-height="15"
                    v-model="editEstudianteData.esTituloProyecto"
                    :rules="[v => !!v || 'Debe ingresar titulo de proyecto', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un nombre valido']"
                    required
                  ></v-textarea>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="editEstudianteData.id_carrera"
                    :items="carreras"
                    item-text="carreraNombre"
                    item-value="id"
                    label="Carrera"
                    persistent-hint
                    single-line
                    :rules="[v => !!v || 'Debe seleccionar una carrera']"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="editEstudianteData.esGenero"
                    :items="generos"
                    item-text="genero"
                    item-value="bGenero"
                    label="Genero"
                    persistent-hint
                    single-line
                    :rules="[v => !!v || 'Debe seleccionar un genero', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un nombre valido']"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="hideEditEstudianteDialog()" color="blue-grey" dark
              >Cancelar</v-btn
            >
            <v-btn :disabled="!valid" type="submit" color="blue darken-2" dark>Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
    <v-dialog v-model="dialogView" max-width="1000" >
    <v-card>
        <v-card-title>Informacion estudiante</v-card-title>
        <div class="text-center"> <Generar /></div>
        <v-card-text> 
          <Informacion />
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template> 
<script>
import * as estudianteService from "../../services/estudiante_service";
import Generar from './GenerarInformeEstudiante.vue';
import Informacion from './InformacionEstudiante.vue';
import { mapActions, mapGetters } from 'vuex';
export default {
  components:{
    Informacion,
    Generar
  },
  data() {
    return {
      overlay: true,
      valid: true,
      generos: [{genero: 'femenino', bGenero: 'Srta'},{genero: 'masculino', bGenero: 'Sr'}],
      pagination: {
        current: 1,
        total: 0,
      },
      buscador: '',
      comboData: '',
      dialogView: false,
      dialogCreate: false,
      dialogUpdate: false,
      operacion: "",
      txtBuscar: "",
      historyData: {},
      estudiantes: [],
      historialEstudiante: [],
      page: 1,
      estudianteData: {
        id: "",
        id_carrera: "",
        esNombres: "",
        esPaterno: "",
        esMaterno: "",
        esCelular: "",
        esTituloProyecto: "",
        esGenero: ""
      },
      editEstudianteData: {
        id: "",
        id_carrera: "",
        esNombres: "",
        esPaterno: "",
        esMaterno: "",
        esCelular: "",
        esTituloProyecto: "",
        esGenero: ""
      },
    };
  },
  mounted() {
    this.loadEstudiantes();
    this.GET_CARRERAS();
    this.GET_ALL_CARRERAS();
  },
  computed:{
    ...mapGetters({carreras: "getCarreras",allCarreras: "getAllCarreras"}),
  },
  methods: {
    ...mapActions(["GET_CARRERAS","GET_ALL_CARRERAS"]),

    loadEstudiantes: async function () {
      try {
        const response = await estudianteService.loadEstudiantes(this.comboData,this.pagination.current);
        this.estudiantes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
        this.overlay = false;
      } catch (error) {
        console.log(error);
      }
    },
    loadCombox: async function(){
        const response = await estudianteService.filtroEstudianteDash(this.comboData,this.buscador );
        this.estudiantes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
       },
    onPageChange() {
      this.loadEstudiantes();
    },
    viewEstudiante(){
      this.showViewEstudianteDialog();
    },
    createEstudiante: async function () {
    if( this.$refs.form.validate() === false){
      this.$refs.form.validate()
    }else {
      
      try {
        let formData = new FormData();
      formData.append("id_carrera", this.estudianteData.id_carrera);
      formData.append("esNombres", this.estudianteData.esNombres);
      formData.append("esPaterno", this.estudianteData.esPaterno);
      formData.append("esMaterno", this.estudianteData.esMaterno);
      formData.append("esCelular", this.estudianteData.esCelular);
      formData.append("esGenero", this.estudianteData.esGenero);
      formData.append("esTituloProyecto", this.estudianteData.esTituloProyecto);
       await estudianteService.createEstudiante(formData);
        this.loadEstudiantes();
        this.hideNewEstudianteDialog();
        this.$swal({
          icon: "success",
          title: "Registro exitoso",
          text: "Usted ha registrado exitosamente",
        });
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal",
        });
      }
    }
    },
    updateEstudiante: async function () {
      if(this.$refs.form.validate() === false){
        this.$refs.form.validate() 
      }else {
        try {
        const formData = new FormData();
        formData.append("id_carrera", this.editEstudianteData.id_carrera);
        formData.append("esNombres", this.editEstudianteData.esNombres);
        formData.append("esPaterno", this.editEstudianteData.esPaterno);
        formData.append("esMaterno", this.editEstudianteData.esMaterno);
        formData.append("esCelular", this.editEstudianteData.esCelular);
        formData.append("esGenero", this.editEstudianteData.esGenero);
        formData.append("esTituloProyecto", this.editEstudianteData.esTituloProyecto);
        formData.append("__method", "put");

        await estudianteService.updateEstudiante(this.editEstudianteData.id, formData);
        this.loadEstudiantes();
        this.hideEditEstudianteDialog();
        this.$swal({
          icon: "success",
          title: "Actualizacion exitosa",
          text: "Usted ha actualizado exitosamente",
        });
      } catch (error) {
       console.log(error)
      }
      }
      
    },
    historiaEstudiantes(estudiante){
      try {
        const response = estudianteService.getHistorialEstudiante(estudiante.id);
        this.historiaEstudiante = response.data;
        this.$store.dispatch("GET_HISTORIALESTUDIANTE", this.historiaEstudiante);

      } catch (error) {
        console.log(error);
      }
    },
    deleteEstudiante: async function (estudiante) {
      Swal.fire({
        title: "Esta seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, bórralo!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await estudianteService.desactivarEstudiante(estudiante.id);
          this.loadEstudiantes();
          Swal.fire("Eliminado!", "Su registro ha sido eliminado.", "success");
        }
      });
    },
    showViewEstudianteDialog(){
      this.dialogView = true;
    },
    hideViewEstudianteDialog(){
      this.dialogView = false;
    },
    showNewEstudianteDialog() {
      this.dialogCreate = true;
    },
    hideNewEstudianteDialog() {
      this.estudianteData = {
          id: "",
          id_carrera: "",
          esNombres: "",
          esPaterno: "",
          esMaterno: "",
          esCelular: "",
          esGenero: "",
          esTituloProyecto: "",
        };
        this.dialogCreate = false;
        this.$refs.form.resetValidation();
    },
    editEstudiante(estudiante) {
      this.showEditEstudianteDialog();
      this.editEstudianteData = { ...estudiante };
    },
    cargarDatos(estudiante){
      this.historiaEstudiantes(estudiante);
      this.dialogView = true;
      this.historyData = { ...estudiante};
      this.$store.dispatch("GET_ESTUDIANTES", this.historyData);
    },
    showEditEstudianteDialog() {
      this.dialogUpdate = true;
    },
    hideEditEstudianteDialog() {
      this.dialogUpdate = false;
    },
  },
};
</script>
