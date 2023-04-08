<template>
  <v-container>
    <v-card>
      <v-card-title class="text-h5">
        Información de Asignación de Evento
      </v-card-title>
      <v-card-text>
        <v-list>
          <v-list-item-group>
            <v-list-item>
              <v-list-item-content v-for="(dato,index) in datos" :key="index">
                <v-list-item-title>Fecha de Asignación:</v-list-item-title>
                <v-list-item-subtitle>{{ dato.fechaAsignacion }}</v-list-item-subtitle>
                <v-list-item-title>Nombre completo:</v-list-item-title>
                <v-list-item-subtitle>{{ dato.relacion_estudiante_evento.esPaterno }} {{ dato.relacion_estudiante_evento.esMaterno }} {{ dato.relacion_estudiante_evento.esNombres }}</v-list-item-subtitle>
                <v-list-item-title>Nombre del evento:</v-list-item-title>
                <v-list-item-subtitle>{{ dato.relacion_evento.nombreEvento }}</v-list-item-subtitle>
                <v-list-item-title>Nombre del evento:</v-list-item-title>
                <v-list-item-subtitle>{{ dato.relacion_evento.lugar }}</v-list-item-subtitle>
                
              </v-list-item-content>
            </v-list-item>
 
          </v-list-item-group>
        </v-list>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import * as eventService from '../../services/evento_service'
export default {
    data(){
        return {
            datos: {}
        }
    },
    mounted() {
    this.loadCorreo();
    },
    methods: {
       async loadCorreo  (){
   
    try {
      const response = await eventService.getQrInfo(this.$route.params.ci,this.$route.params.idE,this.$route.params.idA);
      this.datos = response.data;
    } catch (error) {
      console.log(error);
    }
  }
    },
  
}
</script>