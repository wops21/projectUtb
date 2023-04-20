<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title class="text-center"
          >Mis registros realizados</v-card-title
        >
        <v-card-text>
          <div>
            <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
          </div>

          <div class="text-right">
            <h4>Descargar en excel</h4>
            <v-icon class="text-center" color="green" @click="exportExcel"
              >download</v-icon
            >
          </div>
          <v-data-table  :search="search" :headers="headers" :items="reportes" class="elevation-1">

          </v-data-table>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import xlsx from "xlsx/dist/xlsx.full.min";
import * as eventoService from "../../../services/evento_service"  
export default {
  data() {
    return {
      search: '',
      headers: [
        { text: "Id",filterable: false, value: "id" },
        { text: "Paterno",filterable: false, value: "paterno" },
        { text: "Materno",filterable: false, value: "materno" },
        { text: "Nombre",filterable: false, value: "nombres" },
        { text: "Tipo",filterable: false, value: "tipo" },
        { text: "Titulo", value: "titulo" },
        { text: "Costo",filterable: false, value: "costo" },
        { text: "Carrera",filterable: false, value: "estado" },
      ],
      items: [],
      reportes: []
    };
  },
  mounted() {
    this.loadReporteAsignaciones();
  },
  methods: {
    exportExcel() {
  const totalCosto = this.reportes.reduce((total, reporte) => {
    return total + reporte.costo;
  }, 0);

  const items = this.reportes.map((reporte) => {
    return {
      Paterno: reporte.paterno,
      Materno: reporte.materno,
      Nombres: reporte.nombres,
      Tipo: reporte.tipo,
      Titulo: reporte.titulo,
      Costo: reporte.costo,
      Puntos: reporte.puntos
    };
  });

  items.push({ "Total Costo": totalCosto });

  const XLSX = xlsx;
  const workbook = XLSX.utils.book_new();
  const worksheet = XLSX.utils.json_to_sheet(items);
  XLSX.utils.book_append_sheet(workbook, worksheet, "framework");
  XLSX.writeFile(workbook, "Doc.xlsx");
},

    async loadReporteAsignaciones(){
      const response = await eventoService.loadReporteAsignacion();
      this.reportes = response.data
    }
  },
 
};
</script>
<style>
.estado-pendiente {
  color: red;
}

.estado-entregado {
  color: green;
}
</style>
