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
          <v-spacer></v-spacer>
          <router-link to="/docentes">
            <v-btn color="#8F8E73"> <v-icon>arrow_back_ios</v-icon> </v-btn>
          </router-link>
        </v-row>

        <div class="text-h5">Lista de docentes</div>
      </div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Nombres</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Celular</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(docente, index) in docentes" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ docente.docNombre }}</td>
              <td>{{ docente.docPaterno }}</td>
              <td>{{ docente.docMaterno }}</td>
              <td>{{ docente.docCelular }}</td>
              <td>
                <span v-bind:style="docente.docEstado == 0 ? 'background-color:red' : ''"
                  ><strong>Inactivo</strong></span
                >
              </td>
              <td>
                <v-btn fab dark color="#07A00F" small @click="activarDocente(docente)"
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
import * as docenteService from "../../services/docente_service";
export default {
  data() {
    return {
      txtBuscar: "",
      docentes: [],
      pagination: {
        current: 1,
        total: 0,
      },
    };
  },

  mounted() {
    this.loadDocentes();
  },
  methods: {
    loadDocentes: async function () {
      try {
        const response = await docenteService.loadDocentesInactivos(this.pagination.current);
        this.docentes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal",
        });
      }
    },
    loadSearch: async function (e) {
      if (e.length > 3) {
        const response = await docenteService.loadDocenteInactivosSearch(`${e}`);
        this.docentes = response.data.data;
        console.dir(e);
      }
      if (e.length <= 0) {
        const response = await docenteService.loadDocentesInactivos(
          this.pagination.current
        );
        this.docentes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
      }
    },
    onPageChange() {
      this.loadDocentes();
    },

    activarDocente: async function (docente) {
      Swal.fire({
        title: "Esta seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, activalo",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await docenteService.activarDocente(docente.id);
          this.loadDocentes();
          Swal.fire("Activado!", "Su registro ha sido activado.", "success");
        }
      });
    },
  },
};
</script>
