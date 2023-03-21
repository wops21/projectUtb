<template>
  <div>
    <v-container>
      <div>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
            v-model="buscador"
              @input="loadCombox"
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
        </v-row> 
        <div class="text-h5">Lista de estudiantes</div>
      </div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Estado</th>
              <th>Estudiante</th>
              <th>Carrera</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(estudiante, index) in estudiantes" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                <strong>{{ estudiante.esFinal }}</strong>
              </td>
              <td>
                {{ estudiante.esPaterno }} {{ estudiante.esMaterno }}
                {{ estudiante.esNombres }}
              </td>
              <td>{{ estudiante.relacion_carrera.carreraNombre }}</td>
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
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import * as estudianteService from "../services/estudiante_service";
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
    return {
      overlay: true,
      comboData: '',
      pagination: {
        current: 0,
        total: 0,
      },
      buscador: '',
      estudiantes: [],
      carreras: [],
      commentData: {
            id_estudiante: '',
            observacion: '',
            detalleObservacion: ''
        },
    };
  },
  computed: {
    ...mapGetters({
      allCarreras: "getAllCarreras",
    })
  },
  mounted() {
    this.loadEstudiantes();
    this.GET_ALL_CARRERAS();
  },

  methods: {
    ...mapActions(["GET_ALL_CARRERAS"]),
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
  },
};
</script>
