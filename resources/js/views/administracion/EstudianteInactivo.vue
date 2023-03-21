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
              append-icon="search"
            ></v-text-field>
          </v-col>
          <router-link to="/estudiantes">
            <v-btn color="#8F8E73"> <v-icon>arrow_back_ios</v-icon> </v-btn>
          </router-link>

          <v-spacer></v-spacer>
        </v-row>
        <div class="text-h5">Lista de estudiantes</div>
      </div>
      <v-simple-table>
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
              <td v-bind:style="estudiante.esEstado == 0 ? 'color:red' : ''">
                <strong>Inactivo</strong>
              </td>
              <td>
                <v-btn
                  fab
                  dark
                  color="#07A00F"
                  small
                  @click="activeEstudiante(estudiante)"
                  ><v-icon>toggle_on</v-icon></v-btn
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
  </div>
</template>
<script>
import * as estudianteService from "../../services/estudiante_service";

export default {
  data() {
    return {
       pagination: {
        current: 1,
        total: 0,
      },
      txtBuscar: "",
      estudiantes: [],
    };
  },
 
  mounted() {
    this.loadEstudiantes();
  },

  methods: {
    loadEstudiantes: async function () {
      try {
        const response = await estudianteService.loadEstudianteInactivos(this.pagination.current);
        this.estudiantes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;

      } catch (error) {
        console.log(error);
      }
    },
    loadSearch: async function (e) {
      if (e.length > 3) {
        const response = await estudianteService.loadEstudianteInactivosSearch(`${e}`);
        this.estudiantes = response.data.data;
        console.dir(e);
      }
      if (e.length <= 0) {
         const response = await estudianteService.loadEstudianteInactivos(this.pagination.current);
        this.estudiantes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
      }
    },

    onPageChange() {
      this.loadEstudiantes();
    },

    activeEstudiante: async function (estudiante) {
      Swal.fire({
        title: "Esta seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, activalo!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await estudianteService.activarEstudiante(estudiante.id);
          this.loadEstudiantes();
          Swal.fire("Activado!", "Su registro ha sido activado.", "success");
        }
      });
    },
  },
};
</script>
