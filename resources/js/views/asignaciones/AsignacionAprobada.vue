<template>
  <div>
    <v-container>
      <div>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field
              @input="loadSearch"
              v-model="txtBuscar"
              label="Buscador"
            ></v-text-field>
          </v-col>
          <router-link to="/asignaciones">
            <v-btn color="#036F18"> <v-icon>arrow_back_ios</v-icon> </v-btn>
          </router-link>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
        </v-row>
        <div class="text-h5">List de asignaciones</div>
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
              <th>estado</th>
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

              <td>
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
              <td>
                <v-icon
                  @click="aprobarRespuesta(asignacion)"
                  align="center"
                  class="text-md-center"
                  dark
                  v-bind:class="
                    asignacion.cartaRespuesta === 'completado' ? 'fact_check' : 'pending'
                  "
                  v-bind:disabled="
                    asignacion.cartaRespuesta === 'completado' ? true : false
                  "
                  v-bind:color="
                    asignacion.cartaRespuesta == 'completado' ? '#524E4E' : '#EF220C'
                  "
                ></v-icon>
              </td>
              <td v-if="asignacion.asiEstado == 1" style="color:green">
              Activo
              </td>
              <td v-if="asignacion.asiEstado == 0" style="color:red">Inactivo</td>
              <td>
               
                <v-btn v-bind:disabled=" asignacion.asiEstado == 1 ? false : ''" fab dark color="#E53935" small @click="desactivarAsignacion(asignacion)"><v-icon>delete</v-icon></v-btn>
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
    <v-dialog v-model="dialogUpdate" max-width="500" persistent>
      <v-card>
        <v-form v-on:submit.prevent="updateAsignacion">
          <v-card-title class="blue darken-2 white--text">Editar Asignacion</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-autocomplete
                    v-model="editAsignacionData.id_estudiante"
                    :items="estudiantes"
                    :item-text="getItemTextEstudiantes"
                    item-value="id"
                    filled
                    disabled="true"
                    label="Estudiante"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-autocomplete
                    v-model="editAsignacionData.id_tribunal"
                    :items="docentes"
                    :item-text="getItemTextDocentes"
                    item-value="id"
                    filled
                    label="Docente"
                  ></v-autocomplete>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-autocomplete
                    v-model="editAsignacionData.id_tribunal"
                    :items="docentes"
                    :item-text="getItemTextDocentes"
                    item-value="id"
                    filled
                    label="Docente"
                  ></v-autocomplete>
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
  </div>
</template>
<script>
import * as asignacionService from "../../services/asignacion_service";
import * as docenteService from "../../services/docente_service";
import * as estudianteService from "../../services/estudiante_service";
export default {
  data() {
    return {
      pagination: {
        current: 1,
        total: 0,
      },
      dialogCreate: false,
      dialogUpdate: false,
      operacion: "",
      txtBuscar: "",
      BuscadorId: "",
      asignaciones: [],
      docentes: [],
      estudiantes: [],
      asignacionData: {
        id: "",
        id_estudiante: "",
        id_tribunal1: "",
        id_tribunal2: "",
      },
      editAsignacionData: {},
      buscarDataSolicitud: {},
      recibiendo: {},
    };
  },
  computed: {},
  mounted() {
    this.loadDocentes();
    this.loadEstudiantes();
    this.loadAsignaciones();
  },

  methods: {
    loadAsignaciones: async function () {
      try {
        const response = await asignacionService.loadAsignacionesAprobadas(
          this.pagination.current
        );
        this.asignaciones = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
        // console.log(this.asignaciones);
      } catch (error) {}
    },
    loadSearch: async function (e) {
      if (e.length > 2) {
        const response = await asignacionService.loadAsignacionesAprobadasSearch(`${e}`);
        this.asignaciones = response.data.data;
        console.dir(e);
      }
      if (e.length <= 0) {
        const response = await asignacionService.loadAsignacionesAprobadas(
          this.pagination.current
        );
        this.asignaciones = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
      }
    },
    onPageChange() {
      this.loadAsignaciones();
    },

    loadDocentes: async function () {
      try {
        const response = await docenteService.loadDocente();
        this.docentes = response.data;
        // console.log(this.docentes);
      } catch (error) {}
    },

    loadEstudiantes: async function () {
      try {
        const response = await estudianteService.loadEstudiante();
        this.estudiantes = response.data;
        //  console.log(this.estudiantes);
      } catch (error) {}
    },
desactivarAsignacion: async function (asignacion) {
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
          await asignacionService.desactivarAsignacion(asignacion.id);
          this.loadAsignaciones();
          Swal.fire("Confirmado!", "Se ha confirmado su pendiente.", "success");
        }
      });
    },
    

    editAsignacion(asignacion) {
      this.showEditAsignacionDialog();
      this.editAsignacionData = { ...asignacion };
    },

    showNewAsignacionDialog() {
      this.dialogCreate = true;
    },
    hideNewAsignacionDialog() {
      this.dialogCreate = false;
    },

    showEditAsignacionDialog() {
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
  },
};
</script>
