<template>
  <div>
    <v-container>
      <v-card>
        <v-card-title class="text-center"
          >Información de todas las activiades</v-card-title
        >
        <v-card-text>
          <div class="text-right">
            <h4>Descargar en excel</h4>
            <v-icon class="text-center" color="green" @click="exportExcel"
              >download</v-icon
            >
          </div>
          <v-data-table :headers="headers" :items="informacions" class="elevation-1">
            <template v-slot:item.estado="{ item }">
              <td
                :class="[
                  item.estado === 'pendiente' ? 'estado-pendiente' : 'estado-entregado',
                ]"
              >
                {{ item.estado }}
              </td>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>
<script>
import xlsx from "xlsx/dist/xlsx.full.min";

import { mapGetters } from "vuex";
export default {
  data() {
    return {
      headers: [
        { text: "Tipo evento", value: "tipoEvento" },
        { text: "seminario", value: "nombreEvento" },
        { text: "Fecha registro", value: "fechaAsignacion" },
        { text: "Estado", value: "estado" },
      ],
      items: [],
    };
  },
  methods: {
    exportExcel() {
      const items = this.informacions.map((informacions) => {
        return {
          "Tipo de evento": informacions.tipoEvento,
          Nombre: informacions.nombreEvento,
          "Fecha del registro": informacions.fechaAsignacion,
          Estado: informacions.estado,
        };
      });

      const XLSX = xlsx;
      const workbook = XLSX.utils.book_new();
      const worksheet = XLSX.utils.json_to_sheet(items);
      XLSX.utils.book_append_sheet(workbook, worksheet, "framework");
      XLSX.writeFile(workbook, "Doc.xlsx");
    },
  },
  computed: {
    ...mapGetters({ informacions: "getReporteEvento" }),
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
