<template>
  <div>
    <v-container>
      <div>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field label="Buscador" append-icon="search"></v-text-field>
          </v-col>
          <v-spacer></v-spacer>

          <v-spacer></v-spacer>
          <v-col cols="12" sm="1">
            <v-btn dark @click="showViewDialogAddEstudiante"
              ><v-icon>person_add</v-icon></v-btn
            >
          </v-col>
        </v-row>
        <div class="text-h5">Mis asignaciones realizadas</div>
      </div>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Evento</th>
              <th>Estudiante</th>
              <th>Fecha asignación</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(asignacion, index) in userAsignacion" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ asignacion.relacion_evento.nombreEvento }}</td>
              <td>
                {{ asignacion.relacion_estudiante.esNombres }}
                {{ asignacion.relacion_estudiante.esPaterno }}
                {{ asignacion.relacion_estudiante.esMaterno }}
              </td>

              <td>{{ asignacion.fechaAsignacion }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div class="text-center"></div>
    </v-container>
    <v-dialog v-model="viewAddEstudiante" max-width="1000">
      <v-form
        v-on:submit.prevent="createAsignacion"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-card>
          <v-toolbar dense class="blue darken-2 white--text">
            <v-toolbar-title class="blue darken-2 white--text"
              >Registro de estudiantes
            </v-toolbar-title>
            <v-btn icon class="ml-auto" color="red" @click="hideViewDialogAddEstudiante">
              <v-icon color="red">mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="5" md="5">
                <v-select
                  v-model="asignacionData.id_evento"
                  :items="eventosActivos"
                  item-text="nombreEvento"
                  item-value="id"
                  label="Evento"
                  persistent-hint
                  single-line
                  :rules="[(v) => !!v || 'Debe ingresar el postulante']"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="5" md="5">
                <v-autocomplete
                  v-model="asignacionData.id_estudiante"
                  :items="estudiantes"
                  :item-text="getItemTextEstudiantes"
                  item-value="id"
                  filled
                  label="Estudiante"
                  :rules="[(v) => !!v || 'Debe ingresar el estudiante']"
                  required
                ></v-autocomplete>
              </v-col>
              <v-col cols="12" sm="5" md="5">
                <v-btn color="green" @click="showViewDialogDocente" small>Registrar puntos</v-btn>
              </v-col>
            </v-row>
            <div v-for="(item, index) in selected" :key="item.id">
              <v-row>
                <v-col cols="12" sm="5" md="5">
                  <v-list-item v-model="newArray.id" two-line>
                    <v-list-item-content>
                      <v-list-item-title>Docente {{ index + 1 }}</v-list-item-title>
                      <v-list-item-subtitle
                        ><strong>{{ item.docente }}</strong></v-list-item-subtitle
                      >
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="2" md="2">
                  <v-text-field
                  v-model="newArray[index].cantidad_puntos" 
                  :rules="[(v) => !!v || 'Debe agregar los puntos adicionales']"                  
                    suffix="Pts."
                  >
                  </v-text-field>
                </v-col>
                <v-col cols="12" sm="2" md="2">
                  <v-icon color="red" @click="deleteItem(item)">mdi-close</v-icon>
                </v-col>
              </v-row>
            </div>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn @click="hideViewDialogAddEstudiante" color="blue-grey" dark
              >Cancelar</v-btn
            >
            <v-btn :disabled="!valid" type="submit" color="blue darken-2" dark
              >Guardar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
    <v-dialog v-model="viewDocente" max-width="1000">
      <v-card>
        <v-toolbar dense class="blue darken-2 white--text">
          <v-toolbar-title class="blue darken-2 white--text"
            >Seleccionar docente
          </v-toolbar-title>
          <div class="d-flex justify-center align-center"></div>
          <v-btn icon class="ml-auto" color="red" @click="hideViewDialogDocente">
            <v-icon color="red">mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-container>
            <v-row> </v-row>
            <v-row>
              <v-col cols="12" md="2" sm="2" class="mx-auto">
                <v-btn
                  small
                  color="green"
                  v-show="sedeSeleccionada == '' || sedeSeleccionada == 'LA PAZ'"
                  @click="obtenerSede('EL ALTO')"
                  >El Alto</v-btn
                >
              </v-col>
              <v-col cols="12" md="2" sm="2" class="mx-auto">
                <v-btn
                  small
                  color="green"
                  v-show="sedeSeleccionada == '' || sedeSeleccionada == 'EL ALTO'"
                  @click="obtenerSede('LA PAZ')"
                >
                  La Paz</v-btn
                >
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" md="2" sm="2">
                <v-select
                  v-show="sedeSeleccionada !== ''"
                  v-model="turnoSeleccionado"
                  :items="turnos"
                  :menu-props="{ top: true, offsetY: true }"
                  label="Turno"
                ></v-select>
              </v-col>
              <v-col cols="12" md="1" sm="1">
                <v-select
                  v-show="turnoSeleccionado !== ''"
                  v-model="semestre"
                  :items="semestres"
                  @input="loadParalelos"
                  :menu-props="{ top: true, offsetY: true }"
                  label="Semestre"
                ></v-select>
              </v-col>
              <v-col cols="12" md="6" sm="6">
                <v-radio-group @change="loadHorarios" v-model="paraleloSeleccionado" row>
                  <v-radio
                    v-for="(parale, index) in paralelos"
                    :key="index"
                    :label="parale.paralelo"
                    :value="parale.paralelo"
                  ></v-radio>
                </v-radio-group>
              </v-col>
            </v-row>
            <v-row> </v-row>
            <v-data-table
              v-show="paraleloSeleccionado !== ''"
              v-model="selected"
              :headers="headers"
              :items="horarios"
              item-key="id"
              @click:row="rowClick"
              class="elevation-1"
            >
            </v-data-table>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn @click="hideViewDialogDocente" color="blue-grey" dark>Cancelar</v-btn>
          <v-btn :disabled="!valid" type="submit" color="blue darken-2" dark
            >Guardar</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
import * as eventUser from "../../../services/evento_service";
import * as estudianteService from "../../../services/estudiante_service";
import * as horarioService from "../../../services/horario_service";
export default {
  data() {
    return {
      selected: [],
      turnoSeleccionado: "",
      stateSede: "",
      sedeSeleccionada: "",
      paraleloSeleccionado: "",
      semestre: "",
      radioGroup: 1,
      paralelos: [],
      horarios: [],
      semestres: [1, 2, 3, 4, 5, 6, 7, 8],
      turnos: ["MAÑANA", "NOCHE", "SABADO"],
      value: 1,
      generos: [
        { genero: "femenino", bGenero: "Srta" },
        { genero: "masculino", bGenero: "Sr" },
      ],
      state: "",
      valid: "",
      estudiantes: [],
      eventosActivos: [],
      userAsignacion: [],
      viewAddEstudiante: "",
      viewDocente: "",
      asignacionData: {
        id_estudiante: "",
        id_evento: "",
      },
      estudianteData: {
        esNombres: "",
        esPaterno: "",
        esMaterno: "",
        esCelular: "",
        esGenero: "",
      },
      headers: [
        { text: "Sigla", value: "codigoH" },
        { text: "Materia", value: "nombreMateria" },
        { text: "Docente", value: "docente" },
      ],
      selectedIndex: null,
      newArray: [],
    };
  },

  computed: {
    ...mapGetters({
      profile: "getAuthenticate",
    }),
  },
  mounted() {
    this.loadEventosActivos();
    this.loadUserAsignacion();
  },
  methods: {
  
    deleteItem(item) {
      // Encuentra el índice del elemento en el array
      const index = this.selected.indexOf(item);

      // Si el elemento está en el array, borrarlo
      if (index > -1) {
        this.selected.splice(index, 1);
        this.newArray.splice(index, 1);
      }
    },
    rowClick: function (item, row) {
      const selectedIds = this.selected.map((item) => item.id);

      if (selectedIds.length < 2 || selectedIds.includes(item.id)) {
        const index = this.selected.findIndex(
          (selectedItem) => selectedItem.id === item.id
        );
        if (index > -1) {
          this.selected.splice(index, 1);
          this.newArray.splice(index, 1);
        } else {
          this.selected.push(item);

          this.newArray.push({ id: item.id });
        }
      } else {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Ya ha seleccionado dos docentes",
        });
      }
    },
    obtenerSede(sede) {
      this.sedeSeleccionada = sede;
      if (this.sedeSeleccionada === "EL ALTO") {
        this.stateSede = true;
      } else if (this.sedeSeleccionada === "LA PAZ") {
        this.stateSede = false;
      }
    },
    async loadHorarios() {
      try {
        const response = await horarioService.buscadorHorario(
          this.sedeSeleccionada,
          this.profile.id_carrera,
          this.semestre,
          this.turnoSeleccionado,
          this.paraleloSeleccionado
        );
        this.horarios = response.data;
      } catch (error) {}
    },
    async loadParalelos() {
      try {
        const response = await horarioService.getParalelo(
          this.sedeSeleccionada,
          this.profile.id_carrera,
          this.semestre,
          this.turnoSeleccionado
        );
        this.paralelos = response.data;
      } catch (error) {}
    },
    async loadEventosActivos() {
      try {
        const response = await eventUser.loadEventosActivos();
        this.eventosActivos = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async loadEstudiantes() {
      try {
        const response = await estudianteService.getAllEstudiantes();
        this.estudiantes = response.data;
      } catch (error) {}
    },
    async loadUserAsignacion() {
      try {
        const response = await eventUser.loadUserAsignaciones();
        this.userAsignacion = response.data.data;
      } catch (error) {}
    },
    async createAsignacion() {
      try {
        const formData = new FormData();
        formData.append("id_estudiante", this.asignacionData.id_estudiante);
        formData.append("id_evento", this.asignacionData.id_evento);
        formData.append("selected", JSON.stringify(this.newArray));
        const response = await eventUser.createAsignacionEvento(formData);
        this.hideViewDialogAddEstudiante();
        this.userAsignacion.unshift(response.data);
        this.loadUserAsignacion();
        this.$swal({
          icon: "success",
          title: "Actualizacion exitosa",
          text: "Usted ha actualizado exitosamente",
        });
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal",
        });
      }
    },
    async createEstudiante() {
      try {
        const formData = new FormData();
        formData.append("esNombres", this.estudianteData.esNombres);
        formData.append("esPaterno", this.estudianteData.esPaterno);
        formData.append("esMaterno", this.estudianteData.esMaterno);
        formData.append("esCelular", this.estudianteData.esCelular);
        formData.append("esGenero", this.estudianteData.esGenero);
        const response = await estudianteService.createAllEstudiantes(formData);
        this.estudiantes.unshift(response.data);
        this.hideViewDialogDocente();
        this.$swal({
          icon: "success",
          title: "Actualizacion exitosa",
          text: "Usted ha actualizado exitosamente",
        });
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal",
        });
      }
    },
    showViewDialogAddEstudiante() {
      this.loadEstudiantes();
      this.viewAddEstudiante = true;
    },
    hideViewDialogAddEstudiante() {
      this.asignacionData = {
        id_estudiante: "",
        id_evento: "",
      };
      this.viewAddEstudiante = false;
      this.$refs.form.resetValidation();
    },
    showViewDialogDocente() {
      this.viewDocente = true;
    },
    hideViewDialogDocente() {
      this.viewDocente = false;
    },
    getItemTextEstudiantes(estudiantes) {
      return `${estudiantes.esPaterno} ${estudiantes.esMaterno} `;
    },
  },
};
</script>
<style>
tr.v-data-table__selected {
  background: green !important;
}
</style>
