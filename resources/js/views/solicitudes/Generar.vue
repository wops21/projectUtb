<template>
<div>

  <v-btn @click="generatePDF" color="green"><v-icon>print</v-icon></v-btn>

<div>{{actua}}</div>
  <vue-html2pdf
    :show-layout="false"
    :float-layout="true"
    :enable-download="false"
    :preview-modal="true"
    :paginate-elements-by-height="1400"
    :filename="name"
    :pdf-quality="2"
    :manual-pagination="false"
    pdf-format="letter"
    :pdf-margin="50"
    pdf-orientation="portrait"
    pdf-content-width="800px"
    @progress="onProgress($event)"
    ref="html2Pdf"
  >
    <Plantilla slot="pdf-content">
  
    </Plantilla >
    
  </vue-html2pdf>
    
</div>

</template>

<script>
import Plantilla from "./Plantilla.vue";
import { mapGetters } from "vuex";
export default {
data(){
    return {
        name: 'pdf.pdf',
        viewData: {},
        solicitud: {}
    }
},
components: {
    Plantilla,
  },
  computed: {
    ...mapGetters({
      solicitudes: "getSolicitudes",
      fechaRegistro: "getFechaSol",
 
    }),
  },
  watch: {
    solicitudes (){

    }
  },
  methods: {
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

<style></style>
