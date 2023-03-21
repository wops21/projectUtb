<template>
  <div>
    <v-container>
      <div>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field 
            @input="loadCombox"
              v-model="buscador"
              label="Buscador"
            ></v-text-field>
          </v-col>
          <router-link to="/asignacionesAprobadas">
            <v-btn color="#036F18"> <v-icon>how_to_reg</v-icon> </v-btn>
          </router-link>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="3"> 
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
            <v-btn dark @click="showNewAsignacionDialog()"
              ><v-icon>person_add</v-icon></v-btn
            >
          </v-col>
        </v-row>
        <div class="text-h5">Lista de asignaciones pendientes</div>
      </div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Estudiante</th>
              <th>Tribunal</th>
              <th>Envio solicitud</th>
              <th>Respuesta solicitud</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(asignacion, index) in asignaciones" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                {{ asignacion.relacion_estudiante.esPaterno }}
                {{ asignacion.relacion_estudiante.esMaterno }}
                {{ asignacion.relacion_estudiante.esNombres }}
              </td>
              <td>
                {{ asignacion.relacion_tribunal.docPaterno }}
                {{ asignacion.relacion_tribunal.docMaterno }}
                {{ asignacion.relacion_tribunal.docNombre }}
              </td>
              <td class="text-center">
                <v-icon
                  @click="aprobarEnvio(asignacion)"
                  dark
                  v-bind:class="
                    asignacion.cartaEnvio === 'completado' ? 'fact_check' : 'pending'
                  "
                  v-bind:disabled="asignacion.cartaEnvio === 'completado' ? true : false"
                  v-bind:color="
                    asignacion.cartaEnvio == 'completado' ? '#524E4E' : '#EF220C'
                  "
                ></v-icon>
              </td>
              <td class="text-center">
                <v-icon
                  @click="aprobarRespuesta(asignacion)"
                  align="center"
                  class="text-md-center"
                  dark
                  v-bind:class="
                    asignacion.cartaRespuesta === 'completado' ? 'fact_check' : 'pending'
                  "
                  v-bind:disabled="
                    asignacion.cartaEnvio === 'pendiente' ? true : false
                  "
                  v-bind:color="
                    asignacion.cartaEnvio == 'pendiente' ? '#524E4E' : '#EF220C'
                  "
                ></v-icon>
              </td>

              <td>
                <v-btn fab dark small @click="editAsignacion(asignacion)"
                  ><v-icon>edit</v-icon></v-btn
                >
                <v-btn fab dark color="#E53935" @click="deleteAsignacion(asignacion)" small><v-icon>delete</v-icon></v-btn>
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
    <v-dialog v-model="dialogCreate" max-width="350" persistent>
      <v-card>
        <v-form
          v-on:submit.prevent="createAsignacion"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-card-title class="blue darken-2 white--text">Crear Asignacion</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col class="text-center" cols="6" sm="10" md="10">
                  <v-select
                    @input="actualizarSelect"
                    v-model="carreraSelect"
                    :items="carreras"
                    item-text="carreraNombre"
                    item-value="id"
                    label="Carrera"
                    dense
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="6" sm="10" md="10">
                  <v-autocomplete
                    v-model="asignacionData.id_estudiante"
                    :items="estudiantes"
                    :item-text="getItemTextEstudiantes"
                    item-value="id"
                    filled
                    label="Estudiante"
                    :rules="[(v) => !!v || 'Debe ingresar el postulante']"
                    required
                  ></v-autocomplete>
                </v-col>
              </v-row>
                <v-row>
                  <v-col cols="12" sm="10" md="10">
                    <v-autocomplete
                      v-model="asignacionData.id_tribunal"
                      :items="docentes"
                      :item-text="getItemTextDocentes"
                      item-value="id"
                      filled
                      label="Docente"
                      :rules="[(v) => !!v || 'Debe ingresar el tribunal']"
                      required
                    ></v-autocomplete>
                  </v-col>
                </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="hideNewAsignacionDialog" color="blue-grey" dark>Cancelar</v-btn>
            <v-btn type="submit" :disabled="!valid" color="blue darken-2" dark>Guardar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogUpdate" max-width="500" persistent>
      <v-card>
        <v-form
          v-on:submit.prevent="updateAsignacion"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-card-title class="blue darken-2 white--text">Editar Asignacion</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="6" sm="10" md="10">
                  <v-autocomplete
                    v-model="editAsignacionData.id_estudiante"
                    :items="Mestudiantes"
                    :item-text="getItemTextEstudiantesM"
                    item-value="id"
                    filled
                    label="Estudiante"
                    :rules="[(v) => !!v || 'Debe ingresar el postulante']"
                    required
                  ></v-autocomplete>
                </v-col>
              </v-row>
                <v-row>
                  <v-col cols="12" sm="10" md="10">
                    <v-autocomplete
                      v-model="editAsignacionData.id_tribunal"
                      :items="Mdocentes"
                      :item-text="getItemTextDocentesM"
                      item-value="id"
                      filled
                      label="Docente"
                      :rules="[(v) => !!v || 'Debe ingresar el tribunal']"
                      required
                    ></v-autocomplete>
                  </v-col>
                </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="hideEditAsignacionDialog" color="blue-grey" dark>Cancelar</v-btn>
            <v-btn type="submit" color="blue darken-2" dark>Guardar</v-btn>
          </v-card-actions>
        </v-form>
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
import * as asignacionService from "../../services/asignacion_service";
import * as docenteService from "../../services/docente_service";
import * as estudianteService from "../../services/estudiante_service";
import { mapActions, mapGetters } from 'vuex';
export default {
  data() {
    return {
      overlay: true,
      valid: false,
      pagination: {
        current: 1,
        total: 0,
      },
      dialogCreate: false,
      dialogUpdate: false,
      operacion: "",
      buscador: "",
      BuscadorId: "",
      comboData: "",
      asignaciones: [],
      docentes: [],
      Mdocentes: [],
      estudiantes: [],
      Mestudiantes: [],
      allEstudiantes: [],
      asignacionData: {
        id: "",
        id_estudiante: "",
        id_tribunal: "",
      },
      editAsignacionData: {
        id: "",
        id_estudiante: "",
        id_tribunal: "",
      },
      buscarDataSolicitud: {},
      recibiendo: {},
      errors: {},
      carreraSelect: 1,
    };
  },
  computed: {
    ...mapGetters({carreras:"getCarreras",allCarreras: "getAllCarreras"})
  },
  mounted() {
    this.loadAsignaciones();
    this.loadAllEstudiantes();
    this.GET_ALL_CARRERAS();
  },

  methods: {
      ...mapActions(["GET_CARRERAS","GET_ALL_CARRERAS"]),
      loadCombox: async function(){
        const response = await asignacionService.loadAsignacionesSearch(this.comboData,this.buscador );
        this.asignaciones = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
       },
    actualizarSelect() {
      this.loadDocentes();
      this.loadEstudiantes();
    },
    loadAsignaciones: async function () {
      try {
        const response = await asignacionService.loadAsignaciones(this.comboData,
          this.pagination.current
        );
        this.asignaciones = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
        this.overlay = false;
      } catch (error) {
        console.log(error);
      }
    },
    onPageChange() {
      this.loadAsignaciones();
    },
    loadDocentes: async function () {
      try {
        const response = await docenteService.loadDocentes(this.carreraSelect);
        this.docentes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    loadDocentesModal: async function () {
      try {
        const response = await docenteService.loadDocentesModal();
        this.Mdocentes = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    loadEstudiantes: async function () {
      try {
        const response = await estudianteService.getEstudianteAsignacion(this.carreraSelect);
        this.estudiantes = response.data;
        console.log(this.estudiantes);
      } catch (error) {
        console.log(error);
      }
    },
    loadEstudiantesModal: async function () {
      try {
        const response = await estudianteService.getEstudianteAsignacionModal();
        this.Mestudiantes = response.data;
        console.log(this.estudiantes);
      } catch (error) {
        console.log(error);
      }
    },
    loadAllEstudiantes: async function () {
      try {
        const response = await estudianteService.getEstudiantes();
        this.allEstudiantes = response.data;
        console.log(this.estudiantes);
      } catch (error) {
        console.log(error);
      }
    },
    createAsignacion: async function () {
      if (this.$refs.form.validate() === false) {
        this.$refs.form.validate();
      } else {
        let formData = new FormData();
        formData.append("id_estudiante", this.asignacionData.id_estudiante);
        formData.append("id_tribunal", this.asignacionData.id_tribunal);
        try {
          const response = await asignacionService.createAsignacion(formData);
          console.log(formData);
          this.asignaciones.unshift(response.data);
          this.loadAsignaciones();
          this.loadEstudiantes();
          this.hideNewAsignacionDialog();
          this.asignacionData = {
            id: "",
            id_estudiante: "",
            id_tribunal1: "",
            id_tribunal2: "",
          };
          this.$swal({
            icon: "success",
            title: "Registro exitoso",
            text: "Usted ha registrado exitosamente",
          });
        } catch (error) {
          switch (error.response.status) {
            case 401:
              this.$swal({
                icon: "error",
                title: "Oops...",
                text: "Ya se ha registrado dos tribunales, verifique por favor",
              });
              break;
            case 402:
              this.$swal({
                icon: "error",
                title: "Oops...",
                text: "Debe asignar un tutor al postulante, verifique por favor",
              });
              break;
            case 500:
              this.$swal({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal",
              });
          }
        }
      }
    },

    aprobarEnvio: async function (asignacion) {
      Swal.fire({
        title: "Esta seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, completar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await asignacionService.envioAsignacion(asignacion.id);
          this.loadAsignaciones();
          Swal.fire("Confirmado!", "Se ha confirmado su pendiente.", "success");
        }
      });
    },
    aprobarRespuesta: async function (asignacion) {
      Swal.fire({
        title: "Esta seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, completar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await asignacionService.respuestaAsignacion(asignacion.id);
          this.loadAsignaciones();
          Swal.fire("Confirmado!", "Se ha confirmado su pendiente.", "success");
        }
      });
    },
    updateAsignacion: async function(){
     // console.log(this.asignacion.id);
      if (this.$refs.form.validate() === false) {
        this.$refs.form.validate();
      } else {
        let formData = new FormData();
        formData.append("id_estudiante", this.editAsignacionData.id_estudiante);
        formData.append("id_tribunal", this.editAsignacionData.id_tribunal);
        formData.append("__method", "put");
        try {
          const response = await asignacionService.updateAsignacion(this.editAsignacionData.id,formData);
          console.log(response);
          console.log(formData);
          this.asignaciones.unshift(response.data);
          this.loadAsignaciones();
          this.loadEstudiantes();
          this.hideEditAsignacionDialog();
          this.asignacionData = {
            id: "",
            id_estudiante: "",
            id_tribunal1: "",
            id_tribunal2: "",
          };
          this.$swal({
            icon: "success",
            title: "Registro exitoso",
            text: "Usted ha registrado exitosamente",
          });
        } catch (error) {
          switch (error.response.status) {
            case 401:
              this.$swal({
                icon: "error",
                title: "Oops...",
                text: "Ya se ha registrado dos tribunales, verifique por favor",
              });
              break;
            case 402:
              this.$swal({
                icon: "error",
                title: "Oops...",
                text: "Debe asignar un tutor al postulante, verifique por favor",
              });
              break;
            case 500:
              this.$swal({
                icon: "error",
                title: "Oops...",
                text: "Algo salió mal",
              });
          }
        }
      }
    },
    deleteAsignacion: async function(asignacion){
      Swal.fire({
        title: "Esta seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, completar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await asignacionService.deleteAsignacion(asignacion.id);
          this.loadAsignaciones();
          this.loadEstudiantes();
          Swal.fire("Confirmado!", "Se ha confirmado su pendiente.", "success");
        }
      });
    },
    editAsignacion(asignacion) {
      this.showEditAsignacionDialog();
      this.editAsignacionData = { ...asignacion };
      console.log(asignacion);
    },
    showNewAsignacionDialog() {
      this.GET_CARRERAS();
      this.loadEstudiantes();
      this.loadDocentes();
      this.dialogCreate = true;
    },
    hideNewAsignacionDialog() {
      this.$refs.form.resetValidation();
      this.dialogCreate = false;
    },
    showEditAsignacionDialog() {
      this.loadEstudiantesModal();
      this.loadDocentesModal();
      this.dialogUpdate = true;
    },
    hideEditAsignacionDialog() {
      this.dialogUpdate = false;
    },
    getItemTextDocentes(docentes) {
      return `${docentes.docPaterno} ${docentes.docMaterno} `;
    },
    getItemTextEstudiantes(estudiantes) {
      return `${estudiantes.esPaterno} ${estudiantes.esMaterno} `;
    },
    getItemTextEstudiantesM(Mestudiantes){
      return `${Mestudiantes.esPaterno} ${Mestudiantes.esMaterno}`;
    },
    getItemTextDocentesM(Mdocentes) {
      return `${Mdocentes.docPaterno} ${Mdocentes.docMaterno} `;
    },
  },
};
</script>
