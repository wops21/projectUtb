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
          <router-link to="/solicitudesAprobadas">
            <v-btn color="#036F18"> <v-icon>how_to_reg</v-icon> </v-btn>
          </router-link>
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
            <v-btn dark @click="showNewSolicitudDialog()"
              ><v-icon>person_add</v-icon></v-btn
            >
          </v-col>
        </v-row>
        <div class="text-h5">Lista de solicitudes pendientes</div>
      </div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Estudiante</th>
              <th>Tutor</th>
              <th>Nro ruta</th>
              <th>Envio solicitud</th>
              <th>Respuesta solicitud</th>
              <th>Fecha presentación</th>
              <th>Carta Solicitud</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(solicitud, index) in solicitudes" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                {{ solicitud.relacion_estudiante.esPaterno }}
                {{ solicitud.relacion_estudiante.esMaterno }}
              </td>
              <td>
                {{ solicitud.relacion_docente.docPaterno }}
                {{ solicitud.relacion_docente.docMaterno }}
              </td>
              <td>{{ solicitud.solNumeroRuta }}</td>
              <td class="text-center">
                <v-icon
                  @click="aprobarEnvio(solicitud)"
                  dark
                  v-bind:class="
                    solicitud.envioSolicitud === 'completado' ? 'fact_check' : 'pending'
                  "
                  v-bind:disabled="
                    solicitud.envioSolicitud === 'completado' ? true : false
                  "
                  v-bind:color="
                    solicitud.envioSolicitud == 'completado' ? '#524E4E' : '#EF220C'
                  "
                ></v-icon>
              </td>
              <td class="text-center">
                <v-icon
                  @click="aprobarRespuesta(solicitud)"
                  align="center"
                  class="text-md-center"
                  dark
                  v-bind:class="
                    solicitud.respuestaSolicitud === 'completado'
                      ? 'fact_check'
                      : 'pending'
                  "
                  v-bind:disabled="
                    solicitud.envioSolicitud === 'pendiente' ? true : false
                  "
                  v-bind:color="
                    solicitud.respuestaSolicitud == 'completado' ? '#524E4E' : '#EF220C'
                  "
                ></v-icon>
              </td>
              <td
                v-bind:style="
                  solicitud.solFechaLimit > timestamp
                    ? ' backgroundColor: #6BF660 '
                    : 'backgroundColor:#FE714A'
                "
              >
                {{ solicitud.solFechaLimit }}
              </td>
              <td class="text-center">
                <v-icon
                  v-show="solicitud.nrosolicitud !== 0"
                  color="green"
                  @click="obtenerDatos(solicitud)"
                  >print</v-icon
                >
                <v-icon
                  v-show="solicitud.nrosolicitud == 0"
                  color="red"
                  @click="correlativoSolicitud(solicitud)"
                  >error</v-icon
                >
              </td>
              <td>
                <v-btn fab dark small @click="editSolicitud(solicitud)"
                  ><v-icon>edit</v-icon></v-btn
                >
                <v-btn fab dark color="#E53935" small @click="deleteSolicitud(solicitud)"
                  ><v-icon>delete</v-icon></v-btn
                >
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
        <v-form
          v-on:submit.prevent="createSolicitud"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-card-title class="blue darken-2 white--text">Crear Solicitud</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col class="text-center" cols="12" sm="6" md="6">
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
                <v-col cols="12" sm="6" md="6">
                  <v-autocomplete
                    v-model="solicitudData.id_estudiante"
                    :items="estudiantes"
                    :item-text="getItemTextEstudiantes"
                    item-value="id"
                    filled
                    label="Postulante"
                    :rules="[(v) => !!v || 'Debe ingresar el postulante']"
                    required
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-autocomplete
                    v-model="solicitudData.id_docente"
                    :items="docentes"
                    :item-text="getItemTextDocentes"
                    item-value="id"
                    filled
                    label="Tutor"
                    :rules="[(v) => !!v || 'Debe ingresar el Tutor']"
                    required
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-autocomplete
                    v-model="solicitudData.id_modalidad"
                    :items="modalidades"
                    item-text="nombreModalidad"
                    item-value="id"
                    filled
                    label="Modalidad"
                    :rules="[(v) => !!v || 'Debe ingresar la modalidad']"
                    required
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Nro ruta"
                    v-model="solicitudData.solNumeroRuta"
                    :rules="[(v) => !!v || 'Debe ingresar el nro de ruta']"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="hideNewSolicitudDialog" color="blue-grey" dark>Cancelar</v-btn>
            <v-btn :disabled="!valid" type="submit" color="blue darken-2" dark
              >Guardar</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogUpdate" max-width="500" persistent>
      <v-card>
        <v-form
          v-on:submit.prevent="updateSolicitud"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-card-title class="blue darken-2 white--text">Editar Solicitud</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-autocomplete
                    v-model="editSolicitudData.id_estudiante"
                    :items="Mestudiantes"
                    :item-text="getItemTextEstudiantesModal"
                    item-value="id"
                    filled
                    label="Postulante"
                    :rules="[(v) => !!v || 'Debe ingresar el postulante']"
                    required
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-autocomplete
                    v-model="editSolicitudData.id_docente"
                    :items="Mdocentes"
                    :item-text="getItemTextDocenteModal"
                    item-value="id"
                    filled
                    label="Docente"
                    :rules="[(v) => !!v || 'Debe ingresar el Tutor']"
                    required
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-autocomplete
                    v-model="editSolicitudData.id_modalidad"
                    :items="modalidades"
                    item-text="nombreModalidad"
                    item-value="id"
                    filled
                    label="Modalidad"
                    :rules="[(v) => !!v || 'Debe ingresar la modalidad']"
                    required
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Nro ruta"
                    v-model="editSolicitudData.solNumeroRuta"
                    :rules="[(v) => !!v || 'Debe ingresar el nro de ruta']"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="dialogUpdate = false" color="blue-grey" dark>Cancelar</v-btn>
            <v-btn type="submit" color="blue darken-2" dark>Guardar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogView" max-width="800">
      <v-card>
        <v-form v-on:submit.prevent="viewSolicitud">
          <v-card-title class="blue darken-2 white--text">Vista solicitud </v-card-title>
          <v-card-text>
            <div class="text-center">
              <Generar />
            </div>
            <Plantilla />
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="dialogView = false" color="blue-grey" dark>Cancelar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import * as solicitudService from "../../services/solicitud_service";
import * as estudianteService from "../../services/estudiante_service";
import * as docenteService from "../../services/docente_service";
import * as modalidadService from "../../services/modalidad_service";
import moment from "moment";

import Generar from "./Generar.vue";
import Plantilla from "./Plantilla.vue";
import { mapActions, mapGetters, mapMutations } from "vuex";
var writtenNumber = require("written-number");
writtenNumber.defaults.lang = "es";
export default {
  components: {
    Generar,
    Plantilla,
  },
  data() {
    return {
      overlay: true,
      valid: true,
      options: {
        month: "long",
      },
      options1: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
      pagination: {
        current: 1,
        total: 0,
      },
      dateSol: {},
      diaActual: "",
      fechaActual: "",
      fechaToday: new Date().toLocaleDateString(),
      comboData: "",
      dialogView: false,
      dialogCreate: false,
      dialogUpdate: false,
      operacion: "",
      buscador: "",
      modalidades: [],
      solicitudes: [],
      estudiantes: [],
      Mestudiantes: [],
      Mdocentes: [],
      docentes: [],
      allEstudiantes: [],
      solicitudData: {
        id: "",
        id_estudiante: "",
        id_docente: "",
        id_modalidad: "",
        solNumeroRuta: "",
      },
      carreraSelect: 1,
      viewData: {},
      correlativoData: {},
      editSolicitudData: {
        id: "",
        id_estudiante: "",
        id_docente: "",
        id_modalidad: "",
        solNumeroRuta: "",
      },
    };
  },

  computed: {
    timestamp: function () {
      return moment().format("YYYY/MM/DD");
    },
    ...mapGetters({
      soli: "getSolicitudes",
      fechaRegistro: "getFechaSol",
      carreras: "getCarreras",
      allCarreras: "getAllCarreras",
    }),
  },
  mounted() {
    this.fechaActual = this.printDate();
    this.loadSolicitudes();
    this.GET_CARRERAS();
    this.GET_ALL_CARRERAS();
  },

  methods: {
    ...mapActions(["GET_CARRERAS", "GET_ALL_CARRERAS"]),
    loadCombox: async function () {
      const response = await solicitudService.filtroSolicitudes(
        this.comboData,
        this.buscador
      );
      this.solicitudes = response.data.data;
      this.pagination.current = response.data.current_page;
      this.pagination.total = response.data.last_page;
    },
    actualizarSelect() {
      this.loadEstudiantes();
      this.loadDocentes();
    },
    printDate: function () {
      return new Date().toLocaleDateString();
      //  moment(new Date()).format("DD/MM/YYYY");
    },
    changeDate(fech) {
      const fechaRecibida = fech.solFecha;

      const fechaActual = new Date(fechaRecibida);

      const formatDate = fechaActual.setMinutes(
        fechaActual.getMinutes() + fechaActual.getTimezoneOffset()
      );
      const nuevaFecha = new Date(formatDate).toLocaleDateString("es-Es", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      this.$store.dispatch("GET_ACTUALFECHASOL", nuevaFecha);
    },
    correlativoSolicitud: async function (solicitud) {
      Swal.fire({
        title: "Esta seguro de generar la carta de solicitud?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, generar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await solicitudService.generarCorrelativoSolicitud(solicitud.id);
          this.loadSolicitudes();
          Swal.fire("Confirmado!", "Se ha generado su carta con exito.", "success");
        }
      });
    },
    obtenerDatos(solicitud) {
      this.loadSolicitudes();
      this.showViewSolicitudDialog();
      this.changeDate(solicitud);
      this.viewData = { ...solicitud };
      this.$store.dispatch("GET_SOLICITUDES", this.viewData);
    },
    testing() {
      this.obtenerDatos();
    },
    loadModalidades: async function () {
      try {
        const response = await modalidadService.loadModalidades();
        this.modalidades = response.data;
      } catch (error) {}
    },
    loadEstudiantes: async function () {
      try {
        const response = await estudianteService.getEstudianteSolicitud(
          this.carreraSelect
        );
        this.estudiantes = response.data;
        console.log(this.estudiantes);
      } catch (error) {
        console.log(error);
      }
    },
    loadEstudiantesModal: async function () {
      try {
        const response = await estudianteService.getEstudianteSolicitudModal();
        this.Mestudiantes = response.data;
      } catch (error) {}
    },
    loadAllEstudiantes: async function (estudiante) {
      try {
        this.findEstudiante(estudiante.id);
        //  const response = await estudianteService.getEstudiantes();
        // this.allEstudiantes = response.data;
        //  console.log(this.allEstudiantes);
      } catch (error) {
        console.log(error);
      }
    },
    loadDocentes: async function () {
      try {
        const response = await docenteService.loadDocentes(this.carreraSelect);
        this.docentes = response.data;
      } catch (error) {}
    },
    loadDocentesModal: async function () {
      try {
        const response = await docenteService.loadDocentesModal();
        this.Mdocentes = response.data;
      } catch (error) {}
    },
    loadSolicitudes: async function () {
      try {
        const response = await solicitudService.loadSolicitudes(
          this.comboData,
          this.pagination.current
        );
        this.solicitudes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
        this.overlay = false;
      } catch (error) {
        console.log(error);
      }
    },
    loadSearch: async function (e) {
      if (e.length > 1) {
        const response = await solicitudService.loadSolicitudesSearch(`${e}`);
        this.solicitudes = response.data.data;
        console.dir(e);
      }
      if (e.length <= 0) {
        const response = await solicitudService.loadSolicitudes(this.pagination.current);
        this.solicitudes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
      }
    },

    onPageChange() {
      this.loadSolicitudes();
    },

    createSolicitud: async function () {
      if (this.$refs.form.validate() === false) {
        this.$refs.form.validate();
      } else {
        let formData = new FormData();
        formData.append("id_estudiante", this.solicitudData.id_estudiante);
        formData.append("id_docente", this.solicitudData.id_docente);
        formData.append("id_modalidad", this.solicitudData.id_modalidad);
        formData.append("solNumeroRuta", this.solicitudData.solNumeroRuta);

        try {
          const response = await solicitudService.createSolicitud(formData);
          this.solicitudes.unshift(response.data);
          this.hideNewSolicitudDialog();
          this.loadEstudiantes();

          this.loadSolicitudes();
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
                text: "El estudiante ya tiene tutor, verifique por favor",
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
    updateSolicitud: async function () {
      if (this.$refs.form.validate() === false) {
        this.$refs.form.validate();
      } else {
        let formData = new FormData();
        formData.append("id_estudiante", this.editSolicitudData.id_estudiante);
        formData.append("id_docente", this.editSolicitudData.id_docente);
        formData.append("id_modalidad", this.editSolicitudData.id_modalidad);
        formData.append("solNumeroRuta", this.editSolicitudData.solNumeroRuta);
        formData.append("__method", "put");
        try {
          const response = await solicitudService.updateSolicitud(
            this.editSolicitudData.id,
            formData
          );
          this.solicitudes.unshift(response.data);
          this.loadSolicitudes();
          this.hideEditSolicitudDialog();
          this.editSolicitudData = {
            id: "",
            id_estudiante: "",
            id_docente: "",
            id_modalidad: "",
            solNumeroRuta: "",
          };
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
    deleteSolicitud: async function (solicitud) {
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
          await solicitudService.deleteSolicitud(solicitud.id);
          this.loadSolicitudes();
          this.loadEstudiantes();
          Swal.fire("Eliminado!", "Su registro ha sido eliminado.", "success");
        }
      });
    },
    aprobarEnvio: async function (solicitud) {
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
          await solicitudService.envioSolicitud(solicitud.id);
          this.loadSolicitudes();
          Swal.fire("Confirmado!", "Se ha confirmado su pendiente.", "success");
        }
      });
    },
    aprobarRespuesta: async function (solicitud) {
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
          await solicitudService.respuestaSolicitud(solicitud.id);
          this.loadSolicitudes();
          Swal.fire("Confirmado!", "Se ha confirmado su pendiente.", "success");
        }
      });
    },
    envioSolicitud(solicitud) {
      this.showEditSolicitudDialog();
      this.editSolicitudData = { ...solicitud };
    },
    editSolicitud(solicitud) {
      this.showEditSolicitudDialog();
      this.editSolicitudData = { ...solicitud };
    },
    showNewSolicitudDialog() {
      this.loadModalidades();
      this.loadEstudiantes();
      this.loadDocentes();
      this.dialogCreate = true;
    },
    hideNewSolicitudDialog() {
      this.dialogCreate = false;
      this.$refs.form.reset();
    },

    showViewSolicitudDialog() {
      this.dialogView = true;
    },
    hideViewSolicitudDialog() {
      this.dialogView = false;
    },
    showEditSolicitudDialog() {
      this.loadModalidades();
      this.loadEstudiantesModal();
      this.loadDocentesModal();
      this.dialogUpdate = true;
    },
    hideEditSolicitudDialog() {
      this.dialogUpdate = false;
    },

    getItemTextEstudiantes(estudiantes) {
      return `${estudiantes.esPaterno} ${estudiantes.esMaterno} `;
    },
    getItemTextDocentes(docentes) {
      return `${docentes.docPaterno} ${docentes.docMaterno} `;
    },
    getItemTextEstudiantesModal(Mestudiantes) {
      return `${Mestudiantes.esPaterno} ${Mestudiantes.esMaterno}`;
    },
    getItemTextDocenteModal(Mdocentes) {
      return `${Mdocentes.docPaterno} ${Mdocentes.docMaterno}`;
    },
  },
};
</script>
