<template>
  <div class="main">
    <ul>
      <li>Fecha reporte: {{ timestamp }}</li>
      <li>
        Nombres:
        <strong style="text-transform: uppercase">{{ historyData.docNombre }}</strong>
      </li>
      <li>
        Apellidos:
        <strong style="text-transform: uppercase"
          >{{ historyData.docPaterno }} {{ historyData.docMaterno }}</strong
        >
      </li>
    </ul>
    <v-list-item class="center-div">
      <v-list-item-content>
        <v-list-item-title><strong>DETALLE DE TUTORIAS</strong> </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <table class="padding-table">
      <thead>
        <tr class="cel-padding">
          <th class="cel-padding">Nro</th>
          <th class="cel-padding">Estudiante</th>
          <th class="cel-padding">Carta respondida</th>
        </tr>
      </thead>
      <tbody>
        <tr class="cel-padding" v-for="(reporte, index) in reporteA" :key="index">
          <td class="cel-padding">{{ index + 1 }}</td>
          <td class="cel-padding">
            {{ reporte.relacion_estudiante.esPaterno }}
            {{ reporte.relacion_estudiante.esMaterno }}
            {{ reporte.relacion_estudiante.esNombres }}
          </td>
          <td
            class="cel-padding"
            style="color: red"
            v-if="reporte.solFechaAprobar === null"
          >
            Pendiente
          </td>
          <td class="cel-padding" v-else>{{ reporte.solFechaAprobar }}</td>
        </tr>
      </tbody>
    </table>
    <v-list-item class="center-div">
      <v-list-item-content>
        <v-list-item-title><strong>ASIGNACION PARA TRIBUNALES</strong> </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <table class="padding-table">
      <thead>
        <tr class="cel-padding">
          <th class="cel-padding">Nro</th>
          <th class="cel-padding">Estudiante</th>
          <th class="cel-padding">Fecha asignacion</th>
          <th class="cel-padding">Fecha de finalizacion</th>
        </tr>
      </thead>
      <tbody>
        <tr class="cel-padding" v-for="(reporte, index) in reporteAs" :key="index">
          <td class="cel-padding">{{ index + 1 }}</td>
          <td class="cel-padding">
            {{ reporte.relacion_estudiante.esPaterno }}
            {{ reporte.relacion_estudiante.esMaterno }}
            {{ reporte.relacion_estudiante.esNombres }}
          </td>
          <td
            class="cel-padding"
            style="color: red"
            v-if="reporte.solFechaAprobar === null"
          >
            Pendiente
          </td>
          <td class="cel-padding" v-else>{{ reporte.fechaAsignacion }}</td>
        </tr>
      </tbody>
    </table>
    <v-list-item class="center-div">
      <v-list-item-content>
        <v-list-item-title
          ><strong>Detalle de las programaciones Primer Panel</strong>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <table class="padding-table">
      <thead>
        <tr class="cel-padding">
          <th class="cel-padding">Nro</th>
          <th class="cel-padding">Estudiante</th>
          <th class="cel-padding">Carta respuesta</th>
          <th class="cel-padding">Acta entregado</th>
          <th class="cel-padding">Carta informe entregado</th>
        </tr>
      </thead>
      <tbody>
        <tr class="cel-padding" v-for="(reporte, index) in reporteP1" :key="index">
          <td class="cel-padding">{{ index + 1 }}</td>
          <td class="cel-padding">
            {{ reporte.relacion_estudiante.esPaterno }}
            {{ reporte.relacion_estudiante.esMaterno }}
            {{ reporte.relacion_estudiante.esNombres }}
          </td>
          <td
            style="color: red"
            class="cel-padding"
            v-if="reporte.fechaCartaProRespuesta === null"
          >
            Pendiente
          </td>
          <td class="cel-padding" v-else>{{ reporte.fechaCartaProRespuesta }}</td>
          <td
            style="color: red"
            class="cel-padding"
            v-if="reporte.fechaActaRespuesta === null"
          >
            Pendiente
          </td>
          <td class="cel-padding" v-else>{{ reporte.fechaActaRespuesta }}</td>
          <td
            style="color: red"
            class="cel-padding"
            v-if="reporte.fechaCartaSolInforme === null"
          >
            Pendiente
          </td>
          <td class="cel-padding" v-else>{{ reporte.fechaCartaSolInforme }}</td>
        </tr>
      </tbody>
    </table>
    <v-list-item class="center-div">
      <v-list-item-content>
        <v-list-item-title
          ><strong>Detalle de las programaciones Segundo Panel</strong>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <table class="padding-table">
      <thead>
        <tr class="cel-padding">
          <th class="cel-padding">Nro</th>
          <th class="cel-padding">Estudiante</th>
          <th class="cel-padding">Carta respuesta</th>
          <th class="cel-padding">Acta entregado</th>
          <th class="cel-padding">Carta informe entregado</th>
        </tr>
      </thead>
      <tbody>
        <tr class="cel-padding" v-for="(reporte, index) in reporteP2" :key="index">
          <td class="cel-padding">{{ index + 1 }}</td>
          <td class="cel-padding">
            {{ reporte.relacion_estudiante.esPaterno }}
            {{ reporte.relacion_estudiante.esMaterno }}
            {{ reporte.relacion_estudiante.esNombres }}
          </td>
          <td
            style="color: red"
            class="cel-padding"
            v-if="reporte.fechaCartaProRespuesta === null"
          >
            Pendiente
          </td>
          <td class="cel-padding" v-else>{{ reporte.fechaCartaProRespuesta }}</td>
          <td
            style="color: red"
            class="cel-padding"
            v-if="reporte.fechaActaRespuesta === null"
          >
            Pendiente
          </td>
          <td class="cel-padding" v-else>{{ reporte.fechaActaRespuesta }}</td>
          <td
            style="color: red"
            class="cel-padding"
            v-if="reporte.fechaCartaSolInforme === null"
          >
            Pendiente
          </td>
          <td class="cel-padding" v-else>{{ reporte.fechaCartaSolInforme }}</td>
        </tr>
      </tbody>
    </table>

    <v-list-item class="center-div">
      <v-list-item-content>
        <v-list-item-title
          ><strong>Detalle de las programaciones Tercer Panel</strong>
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    <table class="padding-table">
      <thead>
        <tr class="cel-padding">
          <th class="cel-padding">Nro</th>
          <th class="cel-padding">Estudiante</th>
          <th class="cel-padding">Carta respuesta</th>
          <th class="cel-padding">Acta entregado</th>
          <th class="cel-padding">Carta informe entregado</th>
        </tr>
      </thead>
      <tbody>
        <tr class="cel-padding" v-for="(reporte, index) in reporteP3" :key="index">
          <td class="cel-padding">{{ index + 1 }}</td>
          <td class="cel-padding">
            {{ reporte.relacion_estudiante.esPaterno }}
            {{ reporte.relacion_estudiante.esMaterno }}
            {{ reporte.relacion_estudiante.esNombres }}
          </td>
          <td
            style="color: red"
            class="cel-padding"
            v-if="reporte.fechaCartaProRespuesta === null"
          >
            Pendiente
          </td>
          <td class="cel-padding" v-else>{{ reporte.fechaCartaProRespuesta }}</td>
          <td
            style="color: red"
            class="cel-padding"
            v-if="reporte.fechaActaRespuesta === null"
          >
            Pendiente
          </td>
          <td class="cel-padding" v-else>{{ reporte.fechaActaRespuesta }}</td>
          <td
            style="color: red"
            class="cel-padding"
            v-if="reporte.fechaCartaSolInforme === null"
          >
            Pendiente
          </td>
          <td class="cel-padding" v-else>{{ reporte.fechaCartaSolInforme }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
import moment from "moment";
export default {
  data() {
    return {
      date1: "",
      date2: "",
      modal1: false,
      modal2: false,
      dates: {
        date1: "",
        date2: "",
      },
    };
  },
  computed: {
    ...mapGetters({
      historyData: "getDocente",
      historyP1: "getDocenteP1",
      reporteP1: "getReporteP1",
      reporteP2: "getReporteP2",
      reporteP3: "getReporteP3",
      reporteA: "getReportePa",
      reporteAs: "getReporteAs"
    }),
    timestamp: function () {
      return moment().format("YYYY/MM/DD");
    },
  },
  methods: {

  },
};
</script>
<style>
.main {
  font-family: Arial, Helvetica, sans-serif;
  margin-bottom: 500;
  margin-top: 500;
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
  margin-left: auto;
  margin-right: auto;
  border: 1px solid black;
}
.center-div {
  text-align: center;
}
</style>
