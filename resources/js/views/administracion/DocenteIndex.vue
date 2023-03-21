<template>
  <div class="">
    <v-container>
      <div>
        <v-row>
          <v-col cols="12" sm="4">
            <v-text-field
              @input="loadCombox"
              v-model="buscador"
              label="Buscador"
            ></v-text-field>
          </v-col>
          <v-spacer></v-spacer>
         <v-col cols="12" sm="4"> 
            <v-select
            v-model="comboData"
            @change="loadCombox"
            :items="allCarreras"
            item-text="carreraNombre"
            item-value="id"
            label="carreras"
            :return-object="false"
            >
            </v-select>
          </v-col>

          <v-col cols="12" sm="1">
            <router-link to="/docentesInactivos">
              <v-btn color="red">
                <v-icon>person_off</v-icon>
              </v-btn>
            </router-link>
          </v-col>
          <v-col cols="12" sm="1">
            <v-btn dark @click="showNewDocenteDialog()"
              ><v-icon>person_add</v-icon></v-btn
            >
          </v-col>
        </v-row>
        <div class="text-h5">Lista de docentes</div>
      </div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Nombres</th>
              <th>Apellido Paterno</th>
              <th>Apellido Materno</th>
              <th>Celular</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(docente, index) in docentes" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ docente.docNombre }}</td>
              <td>{{ docente.docPaterno }}</td>
              <td>{{ docente.docMaterno }}</td>
              <td>{{ docente.docCelular }}</td>
              <td>
                <span
                  v-bind:style="docente.docEstado == 1 ? 'background-color:#5AEE4E' : ''"
                  ><strong>Activo</strong></span
                >
              </td>
              <td>
                <v-btn fab dark small @click="editDocente(docente)"
                  ><v-icon>edit</v-icon></v-btn
                >
                <v-btn fab dark color="#E53935" small @click="deleteDocente(docente)"
                  ><v-icon>delete</v-icon></v-btn
                >
                <v-icon @click="historialdocente(docente)">history</v-icon>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
      <div class="text-center">
        <v-pagination
          v-model="pagination.current"
          :length="pagination.total"
          @input="onPageChange"
          light
          circle
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </v-container>
    <v-dialog v-model="dialogCreate" max-width="500" persistent>
      <v-card>
        <v-form v-on:submit.prevent="createDocente" ref="form"
          v-model="valid"
          lazy-validation >
          <v-card-title class="blue darken-2 white--text">Crear Docente</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="docenteData.docNombre"
                    label="Nombres"
                    :rules="[v => !!v || 'Debe ingresar los nombres', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un nombre valido']"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="docenteData.docPaterno"
                    :rules="[v => !!v || 'Debe ingresar el apellido paterno', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un apellido valido']"
                    label="Apellido Paterno"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="docenteData.docMaterno"
                    label="Apellido Materno"
                    :rules="[v => !!v || 'Debe ingresar el apellido materno', v => /[Aa-zZ]$/.test(v) || 'Debe ingresar un apellido valido']"
                  required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" >
                  <v-text-field
                    v-model="docenteData.docCelular"
                    :rules="[v => !!v || 'Debe ingresar un número de celular', v => /[0-9]$/.test(v) || 'Debe ingresar un número de celular valido']"
                    label="Celular"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" >
                  <v-select
                    v-model="docenteData.docGrado"
                    :items="['Lic.', 'MSc.', 'Dr.']"
                    label="Grado Académico"
                    :rules="[v => !!v || 'Debe seleccionar un grado académico']"
                    persistent-hint
                    single-line
                    require
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" >
                  <v-select
                    v-model="docenteData.id_carrera"
                    :items="carreras"
                    item-text="carreraNombre"
                    item-value="id"
                    label="Carrera"
                    :rules="[v => !!v || 'Debe seleccionar una carrera']"
                    required
                    persistent-hint
                    single-line
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="hideNewDocenteDialog" color="blue-grey" dark>Cancelar</v-btn>
            <v-btn :disabled="!valid" type="submit" color="blue darken-2" dark>Guardar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogUpdate" max-width="500" persistent>
      <v-form v-on:submit.prevent="updateDocente" ref="form" v-model="valid" lazy-validation >
        <v-card>
          <v-card-title class="blue darken-2 white--text">Docente</v-card-title>

          <v-card-text>
            <v-container>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="editDocenteData.docNombre"
                    label="Nombres"
                    :rules="[v => !!v || 'Debe ingresar los nombres', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un nombre valido']"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="editDocenteData.docPaterno"
                    label="Apellido Paterno"
                    :rules="[v => !!v || 'Debe ingresar el apellido paterno', v => /[aA-zZ]$/.test(v) || 'Debe ingresar un apellido valido']"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6">
                  <v-text-field
                    v-model="editDocenteData.docMaterno"
                    label="Apellido Materno"
                    :rules="[v => !!v || 'Debe ingresar el apellido materno', v => /[Aa-zZ]$/.test(v) || 'Debe ingresar un apellido valido']"
                  required
                  ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" >
                  <v-text-field
                    v-model="editDocenteData.docCelular"
                    label="Celular"
                    :rules="[v => !!v || 'Debe ingresar un número de celular', v => /[0-9]$/.test(v) || 'Debe ingresar un número de celular valido']"
                    required
                  ></v-text-field>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" >
                  <v-select
                    v-model="editDocenteData.docGrado"
                    :items="['Lic.', 'MSc.', 'Dr.']"
                    label="Grado Academico"
                    persistent-hint
                    single-line
                    :rules="[v => !!v || 'Debe seleccionar un grado académico']"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="6" >
                  <v-select
                    v-model="editDocenteData.id_carrera"
                    :items="carreras"
                    item-text="carreraNombre"
                    item-value="id"
                    label="Carrera"
                    :rules="[v => !!v || 'Debe seleccionar una carrera']"
                    required
                    persistent-hint
                    single-line
                  ></v-select>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="hideEditDocenteDialog()" color="blue-grey" dark
              >Cancelar</v-btn
            >
            <v-btn type="submit" :disabled="!valid" color="blue darken-2" dark>Guardar</v-btn>
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
    <v-dialog v-model="dialogView" max-width="1000" persistent>
      <v-card>
        <v-card-title>Información del docente</v-card-title>
       
       <div class="d-flex justify-end align-center">
    <v-btn color="red" @click="hideViewDocenteDialog">Cerrar</v-btn>
  </div>
        <div class="text-center"><Generar /></div>
        <v-card-text> 
          <InformacionDocente />
        </v-card-text>
      </v-card>

    </v-dialog>
    <v-overlay :value="overlay">
      <v-progress-circular
        indeterminate
        size="64"
      ></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import * as docenteService from "../../services/docente_service";
import InformacionDocente from './InformacionDocente.vue';
import Generar from "./GenerarInformeDocente.vue";
import { mapGetters, mapActions } from 'vuex';
export default {
  components: {
    InformacionDocente,
    Generar
  },
  data() {
    return {
      overlay: true,
      buscador: '',
      comboData: '',
      dialogView: false,
      valid: true,
      page: 1,
      pagination: {
        current: 1,
        total: 0,
      },
      dialogCreate: false,
      dialogUpdate: false,
      operacion: "",
      search: "",
      docentes: [],
      docenteData: {
        id: "",
        id_carrera: "",
        docPaterno: "",
        docMaterno: "",
        docCelular: "",
        docGrado: "",
      },
      editDocenteData: {
        id: "",
        id_carrera: "",
        docNombre: "",
        docPaterno: "",
        docMaterno: "",
        docCelular: "",
        docGrado: "",
      },
      historyDocente: {
      },
      historyDocenteP1: {
        
      },
      dates:{
        date1: "",
        date2: ""
      }
    };
  },

  mounted() {
    this.loadDocentes();
    this.GET_CARRERAS();
    this.GET_ALL_CARRERAS();

  },
computed: {
  ...mapGetters({carreras: "getCarreras",allCarreras: "getAllCarreras"})
},
  methods: {
    ...mapActions(["GET_CARRERAS","GET_ALL_CARRERAS"]),
    loadDocentes: async function () {
      try {
        const response = await docenteService.loadDocente(this.comboData, this.pagination.current);
        this.docentes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
        this.overlay = false;
      } catch (error) {
        console.log(error);
      }
    },
    loadCombox: async function(){
       try {
        const response = await docenteService.loadDocenteSearch(this.comboData,this.buscador );
        this.docentes = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
     
      } catch (error) {
        console.log(error)
       }
       },

    onPageChange() {
      this.loadDocentes();
    },
    createDocente: async function () {
      if( this.$refs.form.validate() === false){
        this.$refs.form.validate()
      }else {
        let formData = new FormData();
      formData.append("docNombre", this.docenteData.docNombre);
      formData.append("docPaterno", this.docenteData.docPaterno);
      formData.append("docMaterno", this.docenteData.docMaterno);
      formData.append("docCelular", this.docenteData.docCelular);
      formData.append("docGrado", this.docenteData.docGrado);
      formData.append("id_carrera", this.docenteData.id_carrera);
      try {
        const response = await docenteService.createDocente(formData);
        this.docentes.unshift(response.data);
        this.hideNewDocenteDialog();
        this.$swal({
          icon: "success",
          title: "Registro exitoso",
          text: "Usted ha registrado exitosamente",
        });
      } catch (error) {
        console.log(error)
      }
      }
     
    },
    updateDocente: async function () {
      if(this.$refs.form.validate() === false){
        this.$refs.form.validate();
      }
      else{
        try {
        const formData = new FormData();
        formData.append("docNombre", this.editDocenteData.docNombre);
        formData.append("docPaterno", this.editDocenteData.docPaterno);
        formData.append("docMaterno", this.editDocenteData.docMaterno);
        formData.append("docCelular", this.editDocenteData.docCelular);
        formData.append("docGrado", this.editDocenteData.docGrado);
        formData.append("id_carrera", this.editDocenteData.id_carrera);
        formData.append("__method", "put");
        await docenteService.updateDocente(this.editDocenteData.id, formData);
        this.loadDocentes();
        this.hideEditDocenteDialog();
        this.$swal({
          icon: "success",
          title: "Actualizacion exitosa",
          text: "Usted ha actualizado exitosamente",
        });
      } catch (error) {
        console.log(error)
      }
      }
      
    },
    deleteDocente: async function (docente) {
      Swal.fire({
        title: "Esta seguro?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, bórralo!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await docenteService.desactivarDocente(docente.id);
          this.loadDocentes();
          Swal.fire("Eliminado!", "Su registro ha sido eliminado.", "success");
        }
      });
    },
    historialDocenteP1: async function(docente){
      try {
        const response = await docenteService.filtroDocentePrimerPanel(docente.id);

var b= JSON.stringify(response.data);
var c = b.substring(1,b.length-1);
this.historyDocenteP1 = JSON.parse(c);
 this.historyDocenteP1 = { ...response.data};
        this.$store.dispatch("GET_DOCENTE_P1", this.historyDocenteP1)
        const formData = new FormData();
      this.dates.date1 = this.dates.date1.replace(/-/g, '/');
    this.dates.date2 = this.dates.date2.replace(/-/g, '/');
        formData.append('from',this.dates.date1);
        formData.append('to', this.dates.date2);
     
        this.$store.dispatch('GET_REPORTE_DOCENTEP1', {
docente: docente.id,
payload: formData
});
      } catch (error) {
        console.log(error)
      }
    },
    historialdocente(docente){
      this.showViewDocenteDialog();
      this.historyDocente = {...docente}
      this.historialDocenteP1(docente);
      this.$store.dispatch("GET_DOCENTE", this.historyDocente);

    },
    showNewDocenteDialog() {
      this.dialogCreate = true;
    },
    hideNewDocenteDialog() {
      this.docenteData = {
          id: "",
          docNombre: "",
          docPaterno: "",
          docMaterno: "",
          docCelular: "",
          docGrado: "",
          id_carrera: ""
        };
      this.dialogCreate = false;
      this.$refs.form.reset();

    },
    editDocente(docente) {
      this.showEditDocenteDialog();
      this.editDocenteData = { ...docente };
    },
    showEditDocenteDialog() {
      this.dialogUpdate = true;
    },
    hideEditDocenteDialog() {
      this.dialogUpdate = false;
    },
    showViewDocenteDialog(){
      this.dialogView = true;
    },
    hideViewDocenteDialog(){
      this.dialogView = false;
      this.$store.commit('limpiarReporteA');
      this.$store.commit('limpiarReporteP1');
      this.$store.commit('limpiarReporteP2');
      this.$store.commit('limpiarReporteP3');
    }
  },
};
</script>
