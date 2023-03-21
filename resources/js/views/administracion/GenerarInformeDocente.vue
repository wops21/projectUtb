<template>
  <div>
    <br />
    <v-btn @click="generatePDF()" color="green">Generar pdf</v-btn>
    <div class="t-1">
      <v-row >
        <v-spacer></v-spacer>
        <v-col cols="12" sm="4">
          <v-dialog
            v-model="modal1"
            :return-value.sync="dates.date1"
            ref="dialogF1"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date1"
                label="Fecha inicio"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                :rules="[(v) => !!v || 'Debe ingresar la fecha']"
                required
              ></v-text-field>
            </template>
            <v-date-picker v-model="date1" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal1 = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.dialogF1.save(date1)"> OK </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col cols="12" sm="4">
          <v-dialog
            v-model="modal2"
            :return-value.sync="dates.date2"
            ref="dialogF"
            persistent
            width="290px"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-text-field
                v-model="date2"
                label="Fecha final"
                prepend-icon="mdi-calendar"
                readonly
                v-bind="attrs"
                v-on="on"
                :rules="[(v) => !!v || 'Debe ingresar la fecha']"
                required
              ></v-text-field>
            </template>
            <v-date-picker v-model="date2" scrollable>
              <v-spacer></v-spacer>
              <v-btn text color="primary" @click="modal2 = false"> Cancel </v-btn>
              <v-btn text color="primary" @click="$refs.dialogF.save(date2)"> OK </v-btn>
            </v-date-picker>
          </v-dialog>
        </v-col>
        <v-col cols="12" sm="2">
          <v-btn @click="test1">Buscar</v-btn>
        </v-col>
      </v-row>
    </div>

    <vue-html2pdf
      :show-layout="false"
      :float-layout="true"
      :enable-download="false"
      :preview-modal="true"
      :paginate-elements-by-height="1000"
      v-bind:filename="name"
      :pdf-quality="2"
      :manual-pagination="false"
      pdf-format="letter"
      :pdf-margin="50"
      pdf-orientation="portrait"
      pdf-content-width="800px"
      @progress="onProgress($event)"
      ref="html2Pdf"
    >
      <Plantilla slot="pdf-content"> </Plantilla>
    </vue-html2pdf>
  </div>
</template>

<script>
import Plantilla from "./InformacionDocente.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {
      name: "test",
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

  components: {
    Plantilla,
  },
  computed: {
    ...mapGetters({
      historyData: "getDocente",
      historyP1: "getDocenteP1",
      reporteP1: "getReporteP1",
      reporteP2: "getReporteP2",
    }),
  },

  methods: {
    test1() {
      try {
        const formData = new FormData();
        this.dates.date1 = this.dates.date1.replace(/-/g, "/");
        this.dates.date2 = this.dates.date2.replace(/-/g, "/");
        formData.append("from", this.dates.date1);
        formData.append("to", this.dates.date2);

        this.$store.dispatch("GET_REPORTE_DOCENTEP1", {
          docente: this.historyData.id,
          payload: formData,
        });
        this.$store.dispatch("GET_REPORTE_DOCENTEP2", {
          docente: this.historyData.id,
          payload: formData,
        });
        this.$store.dispatch("GET_REPORTE_DOCENTEP3", {
          docente: this.historyData.id,
          payload: formData,
        });
        this.$store.dispatch("GET_REPORTE_DOCENTEPA", {
          docente: this.historyData.id,
          payload: formData,
        });
        this.$store.dispatch("GET_REPORTE_DOCENTEAS", {
          docente: this.historyData.id,
          payload: formData,
        });
      } catch (error) {
        console.log(error);
      }
    },
    onProgress(event) {
      console.log(`Processed: ${event} / 100`);
    },
    hasGenerated() {
      alert("PDF generated successfully!");
    },
    generatePDF() {
      this.$refs.html2Pdf.generatePdf();
    },
  },
};
</script>
<style>
.t-1 {
  padding: 15px;
  align-content: center;
}
</style>
