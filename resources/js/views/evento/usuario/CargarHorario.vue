<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title>Cargar horario</v-card-title>
        <v-spacer></v-spacer>
       
        <v-card-text>
          <v-row>
            <v-col cols="12" sm="4" md="4"  class="text-right">
              <v-file-input
                id="archivoExcel"
                @change="subirExcel"

                color="blue"
                counter
                label="Subir horario"
                multiple
                placeholder="Select your files"
                prepend-icon="mdi-paperclip"
                outlined
                :show-size="1000"
              >
                <template v-slot:selection="{ index, text }">
                  <v-chip v-if="index < 2" color="deep-purple accent-4" dark label small>
                    {{ text }}
                  </v-chip>

                  <span
                    v-else-if="index === 2"
                    class="text-overline grey--text text--darken-3 mx-2"
                  >
                    +{{ files.length - 2 }} File(s)
                  </span>
                </template>
              </v-file-input>
            </v-col>
            <v-spacer></v-spacer>
            <v-spacer></v-spacer>
            <v-col cols="12" sm="4" md="4">
              <v-btn @click="cargarDatos" color="green" :disabled="items.length == 0 "><v-icon>upload_file</v-icon></v-btn>
            </v-col>
            <v-col cols="12" sm="4" md="4">
              <v-btn @click="borrarTabla" color="red"><v-icon>delete_forever</v-icon></v-btn>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="12" sm="6" md="6">
              <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
            </v-col>
          </v-row>
          <v-row>
            
            <v-data-table :headers="headers" :items="items"  :search="search" dense>

  </v-data-table>
          </v-row>
        </v-card-text>
      </v-card>
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
import * as horarioService from "../../../services/horario_service";
import readXlsFile from "read-excel-file";
export default {
  data() {
    return {
      overlay: '',
      items: [],
      search: '',
      headers: [
        { text: 'Carrera', value: 'carrera' },
        { text: 'Código', value: 'codigo' },
        { text: 'Materno', value: 'materno' },
        { text: 'Docente', value: 'docente' },
        { text: 'Lunes', value: 'lunes' },
        { text: 'Martes', value: 'martes' },
        { text: 'Miércoles', value: 'miercoles' },
        { text: 'Jueves', value: 'jueves' },
        { text: 'Viernes', value: 'viernes' },
        { text: 'Sábado', value: 'sabado' },
        { text: 'Semestre', value: 'semestre' },
        { text: 'Paralelo', value: 'paralelo' },
        { text: 'Turno', value: 'turno' },
        { text: 'Unidad', value: 'unidad' },
      ],
      
    };
  },

  methods: {
    subirExcel() {
      const input = document.getElementById("archivoExcel");
      readXlsFile(input.files[0]).then((rows) => {
  // Transformar la matriz de matrices en una matriz de objetos
  const items = rows.map((row) => {
    return {
      carrera: row[0],
      codigo: row[1],
      materno: row[2],
      docente: row[3],
      lunes: row[4],
      martes: row[5],
      miercoles: row[6],
      jueves: row[7],
      viernes: row[8],
      sabado: row[9],
      semestre: row[10],
      paralelo: row[11],
      turno: row[12],
      unidad: row[13],
    };
  });
  // Asignar los datos a la propiedad `items` para mostrarlos en la tabla
  this.items = items;
});

    },
    async cargarDatos() {
      try {
        const formData = new FormData();
        formData.append("items", JSON.stringify(this.items));
        this.overlay = true;
       if(await horarioService.createHorario(formData)) {
        this.overlay = false;
  this.$swal({
          icon: "success",
          title: "Registro exitoso",
          text: "Usted ha registrado exitosamente",
        });
       }
      
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: "Algo salió mal",
        });
      }
    },
    async borrarTabla(){
        await horarioService.deleteTable();

    }
  },
};
</script>
