<template>
  <div>
    <v-btn color="#FDD835" @click="newCommentDialog"><v-icon>comment</v-icon></v-btn>
    <v-dialog v-model="dialogComent" max-width="500">
      <v-container>
      <v-form v-on:submit.prevent="addObservacion">
        <v-card> 
          <v-card-title class="text-center">Agregar observacion</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col class="text-center" cols="6" sm="10" md="10">
                  <v-select
                    @input="actualizarSelect"
                    v-model="carreraSelect"
                    :items="carreras"
                    item-text="carreraNombre"
                    item-value="id"
                    label="Carrera"
                    dense
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
            <v-row>
              <v-autocomplete
                v-model="commentData.id_estudiante"
                :items="estudiantes"
                :item-text="getItemTextEstudiantes"
                item-value="id"
                filled
                label="Postulante"
                :rules="[(v) => !!v || 'Debe ingresar el postulante']"
                required
              ></v-autocomplete>
            </v-row>

            <v-row>
              <v-textarea
              v-model="commentData.observacion"
                label="Motivo"
                auto-grow
                outlined
                rows="1"
                row-height="15"
              ></v-textarea>
            </v-row>
            <v-row>
              <v-textarea
              v-model="commentData.detalleObservacion"
                background-color="amber lighten-4"
                color="orange orange-darken-4"
                label="Detalle observación"
              ></v-textarea>
            </v-row>
            <v-row class="text-center">
              <v-btn @click="hideDialogComment" color="blue darken-2" dark>Cancelar</v-btn>
              <v-spacer></v-spacer>
              <v-btn type="submit" color="blue darken-2" dark>Guardar</v-btn>
            </v-row>
            </v-container>
          </v-card-text>
        </v-card>
      </v-form>
      </v-container>
    </v-dialog>
  </div>
</template>

<script>
import * as carreraService from '../../services/carrera_service'
import * as estudianteService from "../../services/estudiante_service";
export default {

data(){
    return {
        dialogComent: false,
        carreras: [],
        estudiantes: [],
        commentData: {
            id_estudiante: '',
            observacion: '',
            detalleObservacion: ''
        },
        carreraSelect: 1
    }
},

mounted(){
    this.loadCarreras();
    this.loadEstudiantes();
},
methods: {
    actualizarSelect(){
        this.loadEstudiantes();
    },
    loadCarreras: async function () {
      try {
        const response = await carreraService.loadCarreras();
        this.carreras = response.data;

      } catch (error) {
        console.log(error);
      }
    },
    loadEstudiantes: async function () {
      try {
        const response = await estudianteService.loadEstudiante(this.carreraSelect);
        this.estudiantes = response.data;
 
      } catch (error) {
        console.log(error);
      }
    },
    addObservacion: async function(){
        try {
            const formData = new FormData();
            formData.append("id_estudiante", this.commentData.id_estudiante);
            formData.append("observacion", this.commentData.observacion);
            formData.append("detalleObservacion", this.commentData.detalleObservacion);
            
           await estudianteService.observacion(formData);
            this.hideDialogComment();
            this.commentData = {
                id_estudiante: "",
                observacion: "",
                detalleObservacion: ""
            }
        } catch (error) {
            console.log(error)
        }
    }
 ,
    hideDialogComment(){
        this.dialogComent = false;
    },
    newCommentDialog(){
        this.dialogComent = true;
    },
    getItemTextEstudiantes(estudiantes) {
      return `${estudiantes.esPaterno} ${estudiantes.esMaterno} `;
    },
}
}
</script>

<style>

</style>