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
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>ing. comercial</td>
              <td>perez perez juan</td>
               <td><v-btn @click="showInformacionDialogEstudiante"> +</v-btn></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Comercio exterior</td>
              <td>anda luz maria</td>
              <td><v-btn @click="showInformacionDialogEstudiante"> +</v-btn></td>
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
      <v-form v-on:submit.prevent="" ref="form" v-model="valid" lazy-validation>
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
                  item-text="genero"
                  item-value="bGenero"
                  label="Evento"
                  persistent-hint
                  single-line
                  :rules="[
                    (v) => !!v || 'Debe seleccionar el evento',
                    (v) => /[aA-zZ]$/.test(v),
                  ]"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="5" md="5">
                <v-select
                  item-text="genero"
                  item-value="bGenero"
                  label="Estudiante"
                  persistent-hint
                  single-line
                  :rules="[
                    (v) => !!v || 'Debe seleccionar el estudiante',
                    (v) => /[aA-zZ]$/.test(v),
                  ]"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="2" md="2">
                <v-icon color="green" @click="showViewDialogEstudiante"
                  >person_add</v-icon
                >
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-form>
    </v-dialog>
    <v-dialog v-model="viewEstudiante" max-width="500">
      <v-form v-on:submit.prevent="" ref="form" v-model="valid" lazy-validation>
        <v-card>
          <v-toolbar dense class="blue darken-2 white--text">
            <v-toolbar-title class="blue darken-2 white--text"
              >Registro de estudiante
            </v-toolbar-title>
            <v-btn icon class="ml-auto" color="red" v-on:click="hideViewDialogEstudiante">
              <v-icon color="red">mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Nombres"
                  :rules="[
                    (v) => !!v || 'Debe ingresar un apellido',
                    (v) => /[aA-zZ]$/.test(v) || 'Debe ingresar un apellido valido',
                  ]"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Paterno"
                  :rules="[
                    (v) => !!v || 'Debe ingresar un apellido',
                    (v) => /[aA-zZ]$/.test(v) || 'Debe ingresar un apellido valido',
                  ]"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Materno"
                  :rules="[
                    (v) => !!v || 'Debe ingresar un apellido',
                    (v) => /[aA-zZ]$/.test(v) || 'Debe ingresar un apellido valido',
                  ]"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Carnet"
                  :rules="[
                    (v) => !!v || 'Debe ingresar un apellido',
                    (v) => /[aA-zZ]$/.test(v) || 'Debe ingresar un apellido valido',
                  ]"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  label="Celular"
                  :rules="[
                    (v) => !!v || 'Debe ingresar un apellido',
                    (v) => /[aA-zZ]$/.test(v) || 'Debe ingresar un apellido valido',
                  ]"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-form>
    </v-dialog>
    <v-dialog v-model="viewInformacionEstudiante" max-width="500">
    <v-form v-on:submit.prevent="" ref="form"
      v-model="valid"
      lazy-validation >
      <v-card>
        <v-toolbar dense class="blue darken-2 white--text">
          <v-toolbar-title class="blue darken-2 white--text">Registro de estudiante
          </v-toolbar-title>
          <v-btn icon class="ml-auto" color="red" v-on:click="hideViewDialogEstudiante">
            <v-icon color="red">mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
            
            <h3>nombre: Juan perez</h3>
            <h3>horas academicas: 130 hrs.</h3>
            <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Seminario</th>
              <th>Hora Academica</th>

            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Actualizacion</td>
              <td>50</td>
            </tr>
            <tr>
                <td>1</td>
              <td>Viaje a la paz</td>
              <td>80
                </td>
              
            </tr>
          
          </tbody>
        </template>
      </v-simple-table>
  
        </v-card-text>
      </v-card>
    </v-form>
  </v-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      viewAddEstudiante: "",
      viewEstudiante: "",
      viewInformacionEstudiante: ""
    };
  },
  methods: {
    showViewDialogAddEstudiante() {
      this.viewAddEstudiante = true;
    },
    hideViewDialogAddEstudiante() {
      this.viewAddEstudiante = false;
    },
    showViewDialogEstudiante() {
      this.viewEstudiante = true;
    },
    hideViewDialogEstudiante() {
      this.viewEstudiante = false;
    },
    hideInformacionDialogEstudiante(){
        this.viewInformacionEstudiante = false
    },
    showInformacionDialogEstudiante(){
        this.viewInformacionEstudiante = true
    }
  },
};
</script>
