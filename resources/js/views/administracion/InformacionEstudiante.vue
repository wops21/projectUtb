<template>
 <div class="main">

 <v-card  max-width="mx-auto" class="text-center"
  tile>
    <ul>
      <li> Fecha reporte: {{ timestamp }}</li>
      <li>Nombres: <strong style="text-transform:uppercase">{{ history.esNombres }}</strong></li>
      <li>Apellidos: <strong style="text-transform:uppercase">{{ history.esPaterno }} {{ history.esMaterno }}</strong></li>
      <li>Carrera : <strong style="text-transform:uppercase">{{ history.relacion_carrera.carreraNombre }}</strong></li>
    </ul>
 
  <v-list-item class="center-div">
    <v-list-item-content>
      <v-list-item-title><strong>TUTORES ASIGNADOS</strong> </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
<table class="padding-table">
  <thead class="cel-padding">
        <tr class="cel-padding">
          <th class="cel-padding">N°</th>
          <th class="cel-padding">Nombre tutor</th>
          <th class="cel-padding">Fecha de asignación</th>
          <th class="cel-padding">Fecha de finalización</th>
        </tr>
      </thead>
      <tbody>
        <tr class="cel-padding" v-for="(tutor, index) in history.relacion_solicitud" :key="index">
          <td class="cel-padding"> {{ index + 1}}</td>
          <td class="cel-padding">{{tutor.relacion_docente.docNombre }} {{tutor.relacion_docente.docPaterno }} {{tutor.relacion_docente.docMaterno }} </td>
          <td class="cel-padding">{{ tutor.solFecha }}</td>
          <td class="cel-padding"><strong style="color:green" v-if="tutor.solFechaDesactivar === null"> El tutor sigue con la asignación</strong>{{ tutor.solFechaDesactivar }}</td>
        </tr>
      </tbody>
</table> 
<br>
<v-list-item class="center-div">
    <v-list-item-content>
      <v-list-item-title><strong>JURADOS ASIGNADOS</strong> </v-list-item-title>
    </v-list-item-content>
  </v-list-item>
  
  <table class="padding-table">
    <thead>
        <tr class="cel-padding">
          <th class="cel-padding">N°</th>
          <th class="cel-padding">Nombre jurado</th>
          <th class="cel-padding">Fecha asignación</th>
          <th class="cel-padding">Fecha de finalización</th>
        </tr>
      </thead>
      <tbody>
        <tr class="cel-padding" v-for="(jurado, index) in history.relacion_asignacion" :key="index">
          <td class="cel-padding">{{ index + 1 }}</td>
          <td class="cel-padding">{{jurado.relacion_tribunal.docNombre }} {{jurado.relacion_tribunal.docPaterno}} {{jurado.relacion_tribunal.docMaterno }}</td>
          <td class="cel-padding">{{ jurado.fechaAsignacion }}</td>
          <td class="cel-padding"><strong style="color:green" v-if="jurado.fechaDesactivar === null">El jurado sigue con la asignación</strong>{{ jurado.fechaDesactivar }}</td>
        </tr>
      </tbody>
  </table>
<br>
  <v-list-item class="center-div">
    <v-list-item-content>
      <v-list-item-title><strong>PROGRAMACIONES REALIZADAS</strong> </v-list-item-title>
    </v-list-item-content>
  </v-list-item>

  <table class="padding-table">
 <thead>
    <tr>
      <th class="cel-padding">Nro</th>
      <th class="cel-padding">Nota defensa</th>
      <th class="cel-padding">Correciones</th>
      <th class="cel-padding">Número panel</th>
      <th class="cel-padding">Hora defensa</th>
      <th class="cel-padding">Fecha defensa</th>
      <th class="cel-padding">Fecha programación</th>
      <th class="cel-padding">Estado defensa</th>
    </tr>
  </thead>
  <tbody >
    <tr  class="cel-padding" v-for="(programacion, index) in history.relacion_programacion" :key="index">
      <td class="cel-padding">{{  index + 1 }}</td>
      <td class="cel-padding">{{programacion.notaDefensa}}</td>
      <td class="cel-padding">{{programacion.correcion}} </td>
      <td class="cel-padding">{{programacion.nroPanel}}</td>
      <td class="cel-padding">{{ programacion.horaDefensa }}</td>
      <td class="cel-padding">{{ programacion.fechaDefensa }}</td>
      <td class="cel-padding">{{ programacion.fechaProgramacion }}</td>
      <td class="cel-padding" v-bind:style="programacion.proEstado === 'pendiente' ? 'color:red' : ''">{{ programacion.proEstado }}</td>
    </tr>
  </tbody>
</table>
<br>

  <v-list-item class="center-div">
    <v-list-item-content>
      <v-list-item-title><strong>CORRECIONES DEL POSTULANTE</strong> </v-list-item-title>
    </v-list-item-content>
  </v-list-item>

  <table class="padding-table">
    <thead>
      <tr >
        <th class="cel-padding">N°</th>
        <th class="cel-padding">Correción</th>
        <th class="cel-padding">Número panel</th>
      </tr>
    </thead>
    <tbody  v-for="(programacion, indexs) in history.relacion_programacion" :key="indexs">
          
          <tr class="cel-padding" v-for="(detalle, index) in programacion.relacion_detalle_estudiante" :key="index">
          <td class="cel-padding"> {{ indexs + 1 }}</td>
          <td class="cel-padding"> <strong style="color: red" v-if="detalle.fechaCorrecion == null">pendiente</strong> {{ detalle.fechaCorrecion}}</td>
          <td class="cel-padding">{{ programacion.nroPanel}}</td>
        </tr>
      </tbody>
  </table>
<br>
   <v-list-item class="center-div">
    <v-list-item-content>
      <v-list-item-title><strong>OBSERVACIONES REALIZADAS AL POSTULANTE</strong> </v-list-item-title>
    </v-list-item-content>
  </v-list-item>

  <table  class="padding-table">
    <thead >
      <tr class="cel-padding">
        <th class="cel-padding" >N°</th>
        <th>Motivo</th>
        <th>Detalle</th>
        <th>Fecha observacion</th>
      </tr>
    </thead>
    <tbody >
      <tr class="cel-padding" v-for=" (observacion, index) in history.relacion_observacion" :key="index">
        <td class="cel-padding">{{ index + 1}}</td>
        <td  class="cel-padding">{{observacion.observacion}}</td>
        <td class="cel-padding">{{ observacion.detalleObservacion }}</td>
        <td class="cel-padding">{{ observacion.fechaObservacion }}</td>
      </tr>
    </tbody>
  </table>
 </v-card>
</div>


</template>
<script>
import { mapGetters } from 'vuex';
import moment from 'moment';
export default {

  computed: {
    ...mapGetters({
      history: "getEstudiantes",
      historyData: "getHistorialEstudiante"
    }),
    timestamp: function () {
      return moment().format("YYYY/MM/DD");
    },
  }
};
</script>
<style >
.main {
font-family: Arial, Helvetica, sans-serif;
margin-bottom: 500;
margin-top: 500;
padding: 20px
}
.card-font {
  text-align: center;
  padding: 20px;
}



.cel-padding {
  border: 1px solid black;
  text-align: center;
  padding: 2px;
}
.padding-table {
  font-size: 14px;
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: auto;
  margin-left:auto;margin-right:auto;
  border: 1px solid black;
  
}
.center-div {
  text-align: center;
}
</style>