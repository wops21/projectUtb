<template>
  <div class="contai">
    <img v-bind:src="require('../../../../public/logoUtb.png')" />
    <p style="font-family: Arial" align="right">
      <strong>DIRECCIÓN DE CARRERA </strong>
    </p>
    <p align="right" style="text-transform: uppercase">
      <strong
        >{{ solicitudes.relacion_estudiante.relacion_carrera.carreraNombre }}
      </strong>
    </p>
    <p align="right">
      La Paz, {{ fechaRegistro }}
    </p>
    <p align="right">
      <strong
        >CITE: UTB DIR.ING.COM No. {{  solicitudes.nrosolicitud }}/{{
          fecha.getFullYear()
        }}</strong
      >
    </p>
    <p>Señor:</p>
    <p>
      Lic. {{ solicitudes.relacion_docente.docNombre }}
      {{ solicitudes.relacion_docente.docPaterno }}
      {{ solicitudes.relacion_docente.docMaterno }}
    </p>
    <p><strong>DOCENTE</strong></p>
    <p><strong>UNIVERSIDAD TECNOLOGICA BOLIVIANA</strong></p>
    <p>Presente.-</p>
    <p align="right">
      <strong>Ref.: <u>DESIGNACION DE TUTOR</u></strong>
    </p>
    <p>De mi consideración:</p>
    <br />
    <p>
      Según las normas y reglamentos de la Universidad Tecnológica Boliviana y en atención
      a sus méritos, la Dirección de Carrera, ha decidido designarle
      <strong>TUTOR</strong> del Perfil de {{ solicitudes.relacion_modalidad.nombreModalidad }}, bajo los siguientes
      términos:
    </p>
    <br />
    <div align="center">
      <table border="1" cellspacing="0" cellpadding="0" width="576">
        <tbody>
          <tr>
            <td width="119">
              <p align="center">
                <strong>POSTULANTE</strong>
              </p>
            </td>
            <td width="114">
              <p align="center">
                <strong>MODALIDAD DE TITULACION</strong>
              </p>
            </td>
            <td width="179">
              <p align="center" style="font-size: 14px; padding: 1px">
                <strong>TITULO DEL PROYECTO</strong>
              </p>
            </td>
            <td width="164">
              <p align="center" style="font-size: 13px; padding: 10px">
                <strong>CARRERA</strong>
              </p>
            </td>
          </tr>
          <tr>
            <td width="119" style="font-size: 11px; padding: 10px">
              <p align="center">
                {{ solicitudes.relacion_estudiante.esNombres }}
                {{ solicitudes.relacion_estudiante.esPaterno }}
                {{ solicitudes.relacion_estudiante.esMaterno }}
              </p>
            </td>
            <td width="114">
              <p align="center" style="font-size: 11px; padding: 10px; text-transform: uppercase">
                PERFIL {{ solicitudes.relacion_modalidad.nombreModalidad }}
              </p>
            </td>
            <td width="179" style="text-transform: uppercase; font-size: 11px; padding: 10px; text-align: left;  ">
              <p>
"{{ solicitudes.relacion_estudiante.esTituloProyecto }}"
              </p>
            </td>
            <td width="164" style="font-size: 11px; padding: 10px; text-transform: uppercase">
              <p align="center">
                {{ solicitudes.relacion_estudiante.relacion_carrera.carreraNombre }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <p style="text-align: justify">
      Para tal propósito, le hago conocer en documento adjunto la propuesta del
      postulante, oficialmente aprobada, la misma deberá ser ejecutada en los términos,
      alcances y cronograma respectivos, así como sujetarse estrictamente al Reglamento
      Específico de Graduación y a las guías metodológicas para la modalidades de
      graduación de la UTB.
      <br />
        En este sentido, solicito tenga a bien hacerme llegar a esta Dirección en el lapso
      de 5 días el informe de observaciones, si el trabajo es o no procedente y la
      posibilidad de aceptar la tutoría.
   
    </p>
  
    <p>
      
    </p>
    <br />
    <p>Deseándole éxito en sus labores de tutoría, saludo a usted.</p>
    <br />
    <p>Atentamente,</p>
<pre>

<span style="font-size: 8pt; font-family: Arial"><strong>Adj./Lo indicado</strong></span>
<span style="font-size: 8pt; font-family: Arial"><strong>LACS/jmc</strong></span>                         <span style="font-style:normal;font-weight:normal; font-family: Vladimir Script; font-size: 13pt; ">Ing. Luis A. Copa Soto</span>
<span style="font-size: 8pt; font-family: Arial"><strong>c.c. archivo</strong></span>                          <span style="font-style:normal;font-weight:normal; font-family: Calibri; font-size: 9pt">DIRECTOR DE CARRERA</span>
                                <span style="font-style:normal;	font-weight:normal; font-family: Times New Roman; font-size: 8pt">Ingenieria Comercial U.T.B</span>                                                                                    
</pre>
   
  </div>
</template>

<script>
import store from "../../store";
import * as actions from "../../store/action-types";
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fecha: new Date(),
      options: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
    };
  },
  methods: {},
  computed: {
    ...mapGetters({
      solicitudes: "getSolicitudes",
      fechaRegistro: "getFechaSol",
      actual: "getCorrelativo",
      }),
  },
  mounted() {
    //  store.dispatch(actions.GET_SOLICITUDES)
  },
};
</script>

<style>
.contai {
  padding: 95px;
  color: black;
  font-family: Arial;
  font-size: 15px;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}
.wcdiv {
  text-align: center;
}
.wcspan {
  position: absolute;
  white-space: pre;
  color: #000000;
  font-size: 12pt;
}
.wcimg {
  position: absolute;
}
.wcsvg {
  position: absolute;
}
.wcpage {
  position: relative;
  margin: 10pt auto 10pt auto;
  overflow: hidden;
}
@media print {
  body {
    margin: 0pt;
    padding: 0pt;
  }
  .wcpage {
    page-break-after: always;
    margin: 0pt;
    padding: 0pt;
  }
}
.wctext001 {
  font-family: "Vladimir Script";
  font-style: normal;
  font-weight: normal;
}
.wctext002 {
  font-family: "Calibri";
  font-style: normal;
  font-weight: normal;
}
.wctext003 {
  font-family: "Times New Roman";
  font-style: normal;
  font-weight: normal;
}
.wctext004 {
  font-family: "Arial";
  font-style: normal;
  font-weight: normal;
}
.wctext005 {
  font-family: "Arial";
  font-style: normal;
  font-weight: bold;
}
</style>
