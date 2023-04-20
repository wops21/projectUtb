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
        </v-row>
        <div class="text-h5">Lista de estudiantes</div>
      </div>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Carrera</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Nombres</th>
              <th>Grado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(estudiante, index) in estudiantes" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ estudiante.relacion_carrera.carreraNombre }}</td>
              <td>{{ estudiante.esPaterno }}</td>
              <td>{{ estudiante.esMaterno }}</td>
              <td>{{ estudiante.esNombres }}</td>
              <td>{{ estudiante.esGrado  }}</td>
              <td><v-icon @click="historyEstudiante(estudiante)" color="green">info</v-icon></td>
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
    <v-dialog v-model="dialogViewInformacion" max-width="1000" >
   
          <InformacionEstudiante />
      
    </v-dialog>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import InformacionEstudiante from "./InformacionEstudiante.vue"
import { mapActions, mapGetters } from "vuex";
import * as adminService from "../../../../services/evento_service";
export default {
    components:{
        InformacionEstudiante
    },
  data() {
    return {
        dialogViewInformacion: false,
      buscador: "",
      pagination: {
        current: 1,
        total: 0,
      },
      overlay: true,
      estudiantes: [],
      comboData: "",
    };
  },
  mounted() {
    this.loadEstudiantes();
    this.GET_ALL_CARRERAS();
  },
  computed: {
    ...mapGetters({ allCarreras: "getAllCarreras" }),
  },
  methods: {
    ...mapActions(["GET_ALL_CARRERAS"]),
    async loadEstudiantes() {
      try {
        const response = await adminService.todosEstudiantes(
          this.pagination.current,
          "",
          ""
        );
        this.estudiantes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
        this.overlay = false;
      } catch (error) {}
    },
    async loadCombox() {
      try {
        const response = await adminService.todosEstudiantes(
          "",
          this.comboData,
          this.buscador
        );
        this.estudiantes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
      } catch (error) {}
    },
    historyEstudiante(estudiante){

        this.$store.dispatch("GET_REPORTE_EVENTO",{estudiante: estudiante.id})
        this.showDialogInformacionEstudiante();
    },
    onPageChange() {
      this.loadEstudiantes();
    },
    hideDialogInformacionEstudiante(){
        this.dialogViewInformacion = false;
    },
    showDialogInformacionEstudiante(){
        this.dialogViewInformacion = true;
    }
  },
};
</script>
