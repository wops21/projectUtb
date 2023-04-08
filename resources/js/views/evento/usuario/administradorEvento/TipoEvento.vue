<template>
    <div class="maint">
         <v-btn color="green" dark @click="showNewTipo"
              ><v-icon>event_note</v-icon></v-btn
            >
  

    <v-dialog v-model="viewTipoEventoModal" max-width="500">
          <v-container>

      <div class="maint">
  
        <v-card>
            <v-toolbar dense class="blue darken-2 white--text">
            <v-toolbar-title class="blue darken-2 white--text"
              >Registro del evento
            </v-toolbar-title>
            <v-btn icon class="ml-auto" color="red" @click="hideNewTipo">
              <v-icon color="red">mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
            <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              @input="loadBuscador"
              v-model="buscador"
              label="Buscador"
              append-icon="search"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>

          <v-spacer></v-spacer>
          <v-col cols="12" sm="1">
            <v-btn color="green" dark @click="showViewDialogAddEvento"
              ><v-icon>event_note</v-icon></v-btn
            >
          </v-col>
        </v-row>
        </v-card>
     
      </div>
    </v-container>

    </v-dialog>

    </div>
</template>
<script>
export default {
    data(){
        return {
             viewAddEvento: "",
      viewEditEvento: "",
      pagination: {
        current: 1,
        total: 0,
      },
      eventos:[],
      date1: "",
      date2: "",
      modal1: false,
      modal2: false,
      dates: {
        date1: "",
        date2: "",
      },
      buscador: '',
      overlay: true,
      eventoData: {
        id_tipoEvento: '',
        lugar:'',
        orador: '',
        horaAcademica: '',
        fechaInicio: '',
        fechaFinal: '',
        nombreEvento: ''

      },
      tipoEventos: [],
      valid: '',
      editEvento: {},
      viewTipoEventoModal: ''
    }
      
    }, methods: {
        hideNewTipo(){
            this.viewTipoEventoModal = false;
        },
        showNewTipo(){
            this.viewTipoEventoModal = true;
        }

    }, 
}
</script>
<style>
.maint {
    background-color: white;
}
</style>