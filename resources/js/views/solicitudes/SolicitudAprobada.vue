<template>
  <div>
    <v-container>
      <div>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field @input="loadSearch" label="Buscador"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="1">
            <router-link to="/solicitudes">
              <v-btn color="#8F8E73"> <v-icon>arrow_back_ios</v-icon> </v-btn>
            </router-link>
          </v-col>
        </v-row>
        <div class="text-h5">List de solicitudes aprobadas</div>
      </div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Estudiante</th>
              <th>Tutor</th>
              <th>Nro ruta</th>
              <th>Estado</th>
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
              <td>
                <span
                  v-bind:style="
                    solicitud.solEstado == 1 ? 'background-color:#5AEE4E' : 'color:red'
                  "
                  ><strong v-show=" solicitud.solEstado == 1 ">Activo</strong>
                  <strong v-show=" solicitud.solEstado == 0 ">Inactivo</strong>
                  </span
                >
              </td>

              <td>
                <v-btn v-bind:disabled=" solicitud.solEstado == 1 ? false : ''" fab dark small @click="deleteSolicitud(solicitud)"
                  ><v-icon color="red">delete</v-icon></v-btn
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

    <v-dialog v-model="dialogUpdate" max-width="500" persistent>
      <v-card>
        <v-form v-on:submit.prevent="updateSolicitud">
          <v-card-title class="blue darken-2 white--text">Editar Solicitud</v-card-title>
          <v-card-text>
            <v-container>
              <v-row> </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-autocomplete
                    v-model="editSolicitudData.id_estudiante"
                    :items="estudiantes"
                    :item-text="getItemTextEstudiantes"
                    item-value="id"
                    label="Estudiante"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-autocomplete
                    v-model="editSolicitudData.id_docente"
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
                    v-model="editSolicitudData.id_modalidad"
                    :items="modalidades"
                    item-text="nombreModalidad"
                    item-value="id"
                    filled
                    label="Modalidad"
                  ></v-autocomplete>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    label="Nro ruta"
                    v-model="editSolicitudData.solNumeroRuta"
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
  </div>
</template>
<script>
import * as solicitudService from "../../services/solicitud_service";
import * as estudianteService from "../../services/estudiante_service";
import * as docenteService from "../../services/docente_service";
import * as modalidadService from "../../services/modalidad_service";
export default {
  data() {
    return {
      pagination: {
        current: 1,
        total: 0,
      },
      dialogUpdate: false,
      operacion: "",
      txtBuscar: "",
      modalidades: [],
      solicitudes: [],
      estudiantes: [],
      docentes: [],

      editSolicitudData: {},
    };
  },

  mounted() {
    this.loadSolicitudes();
    this.loadEstudiantes();
    this.loadDocentes();
    this.loadModalidades();
  },

  methods: {
    loadModalidades: async function () {
      try {
        const response = await modalidadService.loadModalidades();
        this.modalidades = response.data;
        console.log(this.modalidades);
      } catch (error) {}
    },

    loadEstudiantes: async function () {
      try {
        const response = await estudianteService.loadEstudiante();
        this.estudiantes = response.data;
        //  console.log(this.estudiantes);
      } catch (error) {}
    },
    loadDocentes: async function () {
      try {
        const response = await docenteService.loadDocentes();
        this.docentes = response.data;
        // console.log(this.docentes);
      } catch (error) {}
    },
    loadSolicitudes: async function () {
      try {
        const response = await solicitudService.loadSolicitudesAprobadas(
          this.pagination.current
        );
        this.solicitudes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;

        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
    loadSearch: async function (e) {
      if (e.length > 1) {
        const response = await solicitudService.loadSolicitudesAprobadasSearch(`${e}`);
        this.solicitudes = response.data.data;
        console.dir(e);
      }
      if (e.length <= 0) {
        const response = await solicitudService.loadSolicitudesAprobadas(
          this.pagination.current
        );
        this.solicitudes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
      }
    },

    onPageChange() {
      this.loadSolicitudes();
    },
    deleteSolicitud: async function(solicitud){
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
          await solicitudService.desactivarSol(solicitud.id);
          this.loadSolicitudes();
          Swal.fire("Desactivado!", "Su registro ha sido desactivado el tribunal.", "success");
        }
      });
    },

    updateSolicitud: async function () {
      let formData = new FormData();
      formData.append("id_estudiante", this.editSolicitudData.id_estudiante);
      formData.append("id_docente", this.editSolicitudData.id_docente);
      formData.append("id_modalidad", this.editSolicitudData.id_modalidad);
      formData.append("solNumeroRuta", this.editSolicitudData.solNumeroRuta);
      try {
        const response = await solicitudService.updateSolicitud(formData);
        this.solicitudes.unshift(response.data);
        this.loadSolicitudes();
        this.hideEditSolicitudDialog();
        this.editSolicitudData = "";
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
    },

    editSolicitud(solicitud) {
      this.showEditSolicitudDialog();
      this.editSolicitudData = { ...solicitud };
    },

    showEditSolicitudDialog() {
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
  },
};
</script>
