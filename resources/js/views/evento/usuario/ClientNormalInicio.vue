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
              <td>{{ asignacion.relacion_estudiante.esNombres }} {{ asignacion.relacion_estudiante.esPaterno }} {{ asignacion.relacion_estudiante.esMaterno }}</td>
       
                 <td>{{ asignacion.fechaAsignacion }}</td>
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
    <v-dialog v-model="viewAddEstudiante" max-width="700">
      <v-form v-on:submit.prevent="createAsignacion" ref="form" v-model="valid" lazy-validation>
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
              <v-col cols="12" sm="2" md="2">
                <v-icon color="green" @click="showViewDialogEstudiante"
                  >person_add</v-icon
                >
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions class="justify-center">
            <v-btn @click="hideViewDialogAddEstudiante" color="blue-grey" dark>Cancelar</v-btn>
            <v-btn :disabled="!valid" type="submit" color="blue darken-2" dark
              >Guardar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
    <v-dialog v-model="viewEstudiante" max-width="500">
      <v-form v-on:submit.prevent="createEstudiante" ref="form1"
          v-model="valid"
          lazy-validation >
       <v-card>
        <v-toolbar dense class="blue darken-2 white--text">
            <v-toolbar-title class="blue darken-2 white--text"
              >Registro del evento
            </v-toolbar-title>
            <v-btn icon class="ml-auto" color="red" @click="hideViewDialogEstudiante">
              <v-icon color="red">mdi-close</v-icon>
            </v-btn>
          </v-toolbar>   <v-card-text>
            <v-container>
              <v-row>  
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="estudianteData.esNombres"
                    label="Nombres"
                    :rules="[v => !!v || 'Debe ingresar un apellido', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un apellido valido']"
                  required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="estudianteData.esPaterno"
                    label="Apellido Paterno"
                    :rules="[v => !!v || 'Debe ingresar un apellido', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un apellido valido']"
                  required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="estudianteData.esMaterno"
                    label="Apellido Materno"
                    :rules="[v => !!v || 'Debe ingresar un apellido', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un apellido valido']"
                  required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="4">
                  <v-text-field
                    v-model="estudianteData.esCelular"
                    label="Celular"
                    :rules="[v => !!v || 'Debe ingresar un número de celular', v => /[0-9]$/.test(v) || 'Debe ingresar un número de celular valido']"
                  required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-select
                    v-model="estudianteData.esGenero"
                    :items="generos"
                    item-text="genero"
                    item-value="bGenero"
                    label="Genero"
                    persistent-hint
                    single-line
                    :rules="[v => !!v || 'Debe seleccionar un genero', v => /[aA-zZ]$/.test(v)]"
                    required
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="hideViewDialogEstudiante" color="blue-grey" dark>Cancelar</v-btn>
            <v-btn :disabled="!valid" type="submit" color="blue darken-2" dark>Guardar</v-btn>
          </v-card-actions>
       </v-card>
        </v-form>
    </v-dialog>
  </div>
</template>
<script>
import * as eventUser from '../../../services/evento_service';
import * as estudianteService from '../../../services/estudiante_service';
export default {
  data() {
    return {
      generos: [{genero: 'femenino', bGenero: 'Srta'},{genero: 'masculino', bGenero: 'Sr'}],
      valid: '',
      estudiantes: [],
      eventosActivos: [],  
      userAsignacion: [],
      viewAddEstudiante: "",
      viewEstudiante: "",
      asignacionData: {
        id_estudiante: '',
        id_evento: ''
      },
      estudianteData: {
        esNombres: "",
        esPaterno: "",
        esMaterno: "",
        esCelular: "",
        esGenero: ""
      },
    };
  },
  mounted() {
    this.loadEventosActivos();
    this.loadUserAsignacion();
  },
  methods: {
    async loadEventosActivos(){
        try {
       const response = await eventUser.loadEventosActivos();
       this.eventosActivos = response.data;
        } catch (error) {
            console.log(error)
        }
    },
    async loadEstudiantes(){
      try {
        
      const response = await estudianteService.getAllEstudiantes();
      this.estudiantes = response.data;
      } catch (error) {
        
      }
    },
    async loadUserAsignacion(){
      try {
        const response = await eventUser.loadUserAsignaciones();
        this.userAsignacion = response.data.data;
      } catch (error) {
        
      }
    },
    async createAsignacion(){
      try {
        const formData = new FormData();
      formData.append('id_estudiante', this.asignacionData.id_estudiante);
      formData.append('id_evento', this.asignacionData.id_evento);
      const response = await eventUser.createAsignacionEvento(formData);
      this.hideViewDialogAddEstudiante()
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
    async createEstudiante(){
     try {
      const formData = new FormData();
      formData.append("esNombres",this.estudianteData.esNombres);
      formData.append("esPaterno",this.estudianteData.esPaterno);
      formData.append("esMaterno",this.estudianteData.esMaterno);
      formData.append("esCelular",this.estudianteData.esCelular);
      formData.append("esGenero",this.estudianteData.esGenero);
     const response = await estudianteService.createAllEstudiantes(formData);
      this.estudiantes.unshift(response.data);
      this.hideViewDialogEstudiante()
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
        id_evento: ""
      }
      this.viewAddEstudiante = false;
      this.$refs.form.resetValidation();
    },
    showViewDialogEstudiante() {
      this.viewEstudiante = true;
    },
    hideViewDialogEstudiante() {
      this.  estudianteData = {
        esNombres: "",
        esPaterno: "",
        esMaterno: "",
        esCelular: "",
        esGenero: ""
      },
      this.$refs.form1.resetValidation();
      this.viewEstudiante = false;
    },
    getItemTextEstudiantes(estudiantes) {
      return `${estudiantes.esPaterno} ${estudiantes.esMaterno} `;
    },
  },
};
</script>
