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

          <v-spacer></v-spacer>
          <v-col cols="12" sm="1">
            <v-btn dark @click="showViewDialogAddEstudiante"
              ><v-icon>person_add</v-icon></v-btn
            >
          </v-col>
        </v-row>
        <div class="text-h5">Lista de certificados pendientes</div>
      </div>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Carrera</th>
              <th>Estudiante</th>
              <th>Estado de entrega</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(asignacion, index) in asignaciones" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ asignacion.relacion_estudiante.relacion_carrera.carreraNombre }}</td>
              <td>{{ asignacion.relacion_estudiante.esPaterno }} {{ asignacion.relacion_estudiante.esMaterno }} {{ asignacion.relacion_estudiante.esNombres }}</td>
              <td><v-icon color="red" @click="entregarCertificado(asignacion)">pending</v-icon></td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div class="text-center">
        <v-pagination
          @input="onPageChange"
          light
          circle
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </v-container>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import * as eventoService from "../../../../services/evento_service";
export default {
  data() {
    return {
      overlay: true,
      asignaciones: [],
      pagination: {
        current: 1,
        total: 0,
      },
      comboData: "",
    };
  },
  computed: {
    ...mapGetters({ allCarreras: "getAllCarreras" }),
  },
  mounted() {
    this.GET_ALL_CARRERAS();
    this.loadAsignaciones();
  },
  methods: {
    ...mapActions(["GET_ALL_CARRERAS"]),
    async loadAsignaciones() {
      try {
        const response = await eventoService.loadEventosPendientesCarreras(
          this.comboData,
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
    entregarCertificado(asignacion) {
      Swal.fire({
        title: "Esta seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, entregar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await eventoService.entregarCertificado(asignacion.id)
          this.loadAsignaciones();
          Swal.fire("Confirmado!", "Se ha confirmado la entrega.", "success");
        }
      });
    },
  },
};
</script>
