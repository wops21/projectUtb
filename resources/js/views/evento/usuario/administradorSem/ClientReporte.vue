<template>
 <div>
<v-container>
  <v-card>
    <v-card-title>Subir documentos</v-card-title>
    <v-spacer></v-spacer>
    <v-btn @click="cargarDatos">Cargar datos</v-btn>
    <v-card-text>
      <v-row>
        <v-col cols="12" sm="6" md="6">
          <v-file-input
          id="archivoExcel"
          @change="subirExcel"
    v-model="files"
    color="blue"
    counter
    label="Subir documento"
    multiple
    placeholder="Select your files"
    prepend-icon="mdi-paperclip"
    outlined
    :show-size="1000"
  >
    <template v-slot:selection="{ index, text }">
      <v-chip
        v-if="index < 2"
        color="deep-purple accent-4"
        dark
        label
        small
      >
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
      </v-row>
    <v-row>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Carrera</th>
              <th>Estudiante</th>
              <th>seminario</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>

            <tr v-for="(row, index) in items" :key="index">
              <td v-for="(cell, index) in row" :key="index">{{ cell }}</td>
              </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-row>
    </v-card-text>

  </v-card>
</v-container>
 </div>
</template>
<script>
import * as eventService from '../../../../services/evento_service'
import readXlsFile from "read-excel-file"
export default {
  data(){
    return {
      headers: [
        {
        text: "estudiante",
        value: 0
      },
      {
        text: "seminario",
        value: 1
      }
      ],
      files: [{estudiante:"tes"}],
      items: {}
    }
  },
  methods: {
    subirExcel(){
      const input = document.getElementById("archivoExcel");
      readXlsFile(input.files[0]).then((rows)=> {
        this.items = rows
      })
    },
   async cargarDatos(){ 
    try {
      const formData = new FormData();
      formData.append("items",JSON.stringify(this.items) );
    await eventService.control(formData);
      alert("se ha completado")
    } catch (error) {
      console.log(error)
    }
   }
  }
}
</script>