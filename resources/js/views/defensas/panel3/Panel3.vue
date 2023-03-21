<template>
  <div>
    <v-container>
      <div>
        <v-row>
          <v-col cols="12" sm="6">
            <v-text-field v-model="buscador" @input="loadSearch" label="Buscador"></v-text-field>
          </v-col>
          <router-link to="/asignacionesAprobadas">
            <v-btn color="#036F18"> <v-icon>how_to_reg</v-icon> </v-btn>
          </router-link>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="3">
            <v-select
              v-model="comboData"
              @change="loadSearch"
              :items="allCarreras"
              item-text="carreraNombre"
              item-value="id"
              label="carreras"
              :return-object="false"
            >
            </v-select>
          </v-col>
          <v-spacer></v-spacer>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="1">
            <v-btn dark @click="showNewAsignacionDialog()"
              ><v-icon>assignment_add</v-icon></v-btn
            >
          </v-col>
        </v-row>
        <div class="text-h5">programaciones tercer panel</div>
      </div>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Estudiante</th>
              <th>Tribunal 1</th>
              <th>Tribunal 2</th>
              <th>Hora defensa</th>
              <th>Fecha defensa</th>
              <th>Habilitacion 3er panel</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, index) in panels3" :key="index">
              <td>{{ index + 1 }}</td>
              <td>
                <v-expansion-panels>
                  <v-expansion-panel>
                    <v-expansion-panel-header>
                      {{ item.relacion_estudiante.esPaterno }}
                      {{ item.relacion_estudiante.esMaterno }}
                      <template v-slot:actions>
                      <div v-for="itemC in item.relacion_detalle_estudiante">
                        <v-icon
                          color="error"
                          v-if="itemC.esCorrecion == 'pendiente'"
                        >
                          mdi-alert-circle
                        </v-icon>
                    
                        <v-icon
                        v-if="itemC.esCorrecion == 'completado'"
                          color="teal"
                          small
                        >
                          mdi-check
                        </v-icon>
                      </div>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-card light flat>
                        <v-card-text class="py-0">
                          <v-timeline align-top dense>
                            <div v-for="itemC in item.relacion_detalle_estudiante">
                            <v-timeline-item small
                            v-show="itemC.esCorrecion == 'pendiente'"
                              color="pink"
                            >
                              <v-layout pt-12>
                                <v-flex xs10>
                                 
                                  <strong>CORRECION PENDIENTE</strong>
                                  <div class="caption">correcion</div>
                                  <div class="caption"><v-icon @click="completarCorrecion(itemC)">check_small</v-icon></div>
                                  <div class="caption" v-bind:style="itemC.fechaLimiteCorrecion > timestamp ? ' backgroundColor: #6BF660 '
                    : 'backgroundColor:#FE714A'">Limite de correcion {{ itemC.fechaLimiteCorrecion }}</div>
                                 
                                </v-flex>
                              </v-layout>
                            </v-timeline-item>
                          </div>
                          </v-timeline>
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              </td>
              <td v-for="itemChild in item.relacion_detalle_final">
                <v-expansion-panels >
                  <v-expansion-panel >
                    <v-expansion-panel-header >
                      {{ itemChild.relacion_tribunal.docPaterno }}
                      {{ itemChild.relacion_tribunal.docMaterno }}
                      {{ itemChild.relacion_tribunal.docNombre }}
                      <template v-slot:actions>
                        <v-icon
                          color="error"
                          v-if="itemChild.solicitudInforme == 'pendiente'"
                          small
                        >
                          mdi-alert-circle
                        </v-icon>
                        <v-icon
                          color="error"
                          v-if="itemChild.actaRespuesta == 'pendiente'"
                          small
                        >
                          mdi-alert-circle
                        </v-icon>
                        <v-icon
                          color="error"
                          v-if="itemChild.cartaProRespuesta == 'pendiente'"
                          small
                        >
                          mdi-alert-circle
                        </v-icon>
                        <v-icon
                          color="teal"
                          v-if="itemChild.solicitudInforme == 'completado'"
                          small
                        >
                          mdi-check
                        </v-icon>
                        <v-icon
                          color="teal"
                          v-if="itemChild.cartaProRespuesta == 'completado'"
                          small
                        >
                          mdi-check
                        </v-icon>
                        <v-icon
                          color="teal"
                          v-if="itemChild.actaRespuesta == 'completado'"
                          small
                        >
                          mdi-check
                        </v-icon>
                      </template>
                    </v-expansion-panel-header>
                    <v-expansion-panel-content>
                      <v-card light flat>
                        <v-card-text class="py-0">
                          <v-timeline align-top dense>
                            <v-timeline-item
                              v-show="itemChild.cartaProRespuesta == 'pendiente'"
                              color="pink"
                              small
                            >
                              <v-layout pt-3>
                                <v-flex xs4>
                                  <strong>Generar</strong>
                                  <div class="caption">Carta</div>
                                  <div
                                    v-for="item2 in item.relacion_estudiante
                                      .relacion_solicitud"
                                  >
                                  <div class="caption">
                                      <v-icon color="red" @click="generCartaDef(item)" v-show="itemChild.nroCartaDefensa == 0">error</v-icon>
                                      <v-icon
                                  color="green" v-show="itemChild.nroCartaDefensa !== 0" @click="generarCarta(itemChild, item, item2)"
                                        >print</v-icon
                                      >
                                    </div>
                              
                                  </div>
                                </v-flex>
                                <v-flex xs5>
                                  <strong>PENDIENTES</strong>
                                  <div class="caption">Carta</div>
                                  <div class="caption">
                                    <v-icon @click="confirmarCarta(itemChild)"
                                      >check_small</v-icon
                                    >
                                  </div>
                                </v-flex>
                              </v-layout>
                            </v-timeline-item>
                            <v-timeline-item
                              v-show="itemChild.actaRespuesta == 'pendiente'"
                              color="pink"
                              small
                            >
                              <v-layout pt-3>
                                <v-flex xs4>
                                  <strong>Generar</strong>
                                  <div class="caption">ACTAS</div>
                                  <div
                                    v-for="item2 in item.relacion_estudiante
                                      .relacion_solicitud"
                                  >
                                    <div class="caption">
                                      <v-icon
                                        @click="generateActa(itemChild, item2, item)"
                                        >print</v-icon
                                      >
                                    </div>
                                    <div class="caption">
                                      Limite de acta: 
                                    </div>
                                  </div>
                                </v-flex>
                                <v-flex xs5 v-if="itemChild.actaRespuesta == 'pendiente'">
                                  <strong>PENDIENTES</strong>
                                  <div class="caption">ACTAS</div>
                                  <div class="caption">
                                    <v-icon @click="confirmarActa(itemChild)"
                                      >check_small</v-icon
                                    >
                                  </div>
                             
                                  <div class="caption" v-bind:style="itemChild.fechaLimiteActa > timestamp ? ' backgroundColor: #6BF660 '
                    : 'backgroundColor:#FE714A'">
                                  {{ itemChild.fechaLimiteActa }}
                                  </div>
                                </v-flex>
                              </v-layout>
                            </v-timeline-item>

                            <v-timeline-item
                              v-show="itemChild.cartaEmpaste == 'pendiente'"
                              color="pink"
                              small
                            >
                              <v-layout pt-3>
                                <v-flex xs4>
                                  <strong>Generar</strong>
                                  <div class="caption">CARTA EMPASTE</div>
                                  <div   v-for="item3 in item.relacion_estudiante.relacion_solicitud">
                                    <v-icon color="red" @click="generarEmpaste(item)" v-show="itemChild.nroCartaEmpaste == 0">error</v-icon>
                                      <div class="caption"><v-icon color="green" v-show="itemChild.nroCartaEmpaste !== 0" @click="generateCartaEmpaste(itemChild, item, item3)">print</v-icon></div>
                                 </div>
                               
                                  <div class="caption">FECHA LIMITE: </div>
                                </v-flex>
                                <v-flex xs5>
                                  <strong>PENDIENTES</strong>
                                  <div class="caption">INFORME EMPASTE</div>
                                  <div class="caption">
                                    <v-icon @click="confirmarInforme(itemChild, item)"
                                      >check_small</v-icon
                                    >
                                  </div>
                                  <div v-bind:style="itemChild.fechaLimiteEmpaste >  timestamp ? ' backgroundColor: #6BF660 '
                    : 'backgroundColor:#FE714A' ">{{ itemChild.fechaLimiteEmpaste }}</div>
                                </v-flex>
                              </v-layout>
                            </v-timeline-item>
                          </v-timeline>
                        </v-card-text>
                      </v-card>
                    </v-expansion-panel-content>
                  </v-expansion-panel>
                </v-expansion-panels>
              
              </td>
             
              <td>{{ item.horaDefensa }}</td>
              <td>{{ item.fechaDefensa }}</td>
              <td class="text-center">  <v-icon @click="habilitarData(item)" color="red">check_box</v-icon>
              </td>
              <td>
                <v-icon @click="eliminarDetalles(item)">delete</v-icon>
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
        <v-form
          v-on:submit.prevent="createProgramacion"
          ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-card-title class="blue darken-2 white--text">Crear Asignacion</v-card-title>
          <v-card-text>
            <v-container>
              <v-row>
                <v-col class="text-center" cols="12" sm="6" md="6">
                  <v-select
                  @input="actualizarSelect"
                  v-model="carreraSelect"
                    :items="carreras"
                    item-text="carreraNombre"
                    item-value="id"
                    label="Carrera"
                    dense
                    outlined
                  ></v-select>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-autocomplete
                    v-model="programacionData.id_estudiante"
                    :items="estudiantes"
                    :item-text="getItemTextEstudiantes"
                    item-value="id"
                    filled
                    label="Postulante"
                    :rules="[(v) => !!v || 'Debe ingresar el postulante']"
                    required
                  ></v-autocomplete>
                </v-col>
                <v-spacer></v-spacer>
                <v-col cols="12" sm="6" md="6">
                  <v-text-field
                    v-model="programacionData.nroPanel"
                    :disabled="true"
                    label="nroPanel"
                  ></v-text-field>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-dialog
                    ref="dialog"
                    v-model="modal2"
                    :return-value.sync="programacionData.horaDefensa"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="time"
                        label="Hora"
                        prepend-icon="mdi-clock-time-four-outline"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        :rules="[(v) => !!v || 'Debe ingresar la hora']"
                        required
                      ></v-text-field>
                    </template>
                    <v-time-picker v-if="modal2" v-model="time" full-width>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal2 = false"> Cancel </v-btn>
                      <v-btn text color="primary" @click="$refs.dialog.save(time)">
                        OK
                      </v-btn>
                    </v-time-picker>
                  </v-dialog>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-dialog
                    ref="dialogF"
                    v-model="modal"
                    :return-value.sync="programacionData.fechaDefensa"
                    persistent
                    width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="date"
                        label="Fecha"
                        prepend-icon="mdi-calendar"
                        readonly
                        v-bind="attrs"
                        v-on="on"
                        :rules="[(v) => !!v || 'Debe ingresar la fecha']"
                        required
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="date" scrollable>
                      <v-spacer></v-spacer>
                      <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
                      <v-btn text color="primary" @click="$refs.dialogF.save(date)">
                        OK
                      </v-btn>
                    </v-date-picker>
                  </v-dialog>
                </v-col>
              </v-row>
            </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>

            <v-btn @click="dialogCreate = false" color="blue-grey" dark>Cancelar</v-btn>
            <v-btn
              type="submit"
              color="success"
              class="mr-4"
              dark
              >Guardar</v-btn
            >
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogUpdate" max-width="500" persistent>
      <v-card>
        <v-form v-on:submit.prevent="updateAsignacion">
          <v-card-title class="blue darken-2 white--text">Editar Asignacion</v-card-title>
          <v-card-text>
            <v-container> </v-container>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="dialogUpdate = false" color="blue-grey" dark>Cancelar</v-btn>
            <v-btn type="submit" color="blue darken-2" dark>Guardar</v-btn>
          </v-card-actions>
        </v-form>
      </v-card>
    </v-dialog>
    <v-dialog v-model="dialogActa" max-width="1000">
      <v-card>
        <v-card-title class="blue darken-2 white--text">Acta para tribunales </v-card-title>
        <v-card-text>
          <v-container>
            <PlantillaActa />
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogCartaView" max-width="900">
      <v-card>
       <v-card-title class="blue darken-2 white--text">Carta defensa</v-card-title>
       
        <v-card-text>
          <div class="text-center"><GenerarCarta /></div>
          <PlantillaCartaP1 />
        </v-card-text>
      </v-card>
    </v-dialog>

    <v-dialog v-model="dialogAprobar" max-width="300">
      <v-card class="container">
        <v-form v-on:submit.prevent="habilitar"
        ref="form"
          v-model="valid"
          lazy-validation
        >
          <v-card-title>Detalle de aprobacion</v-card-title>
        <v-card-text>
          <v-text-field v-model="aprobarData.notaDefensa" label="Ingrese la nota"
          :rules="[v => !!v || 'Debe ingresar la nota del postulante', v => /[0-9]$/.test(v) || 'Debe ingresar un nombre valido']"
                  required
          >

          </v-text-field>
          <v-select
          v-show="aprobarData.notaDefensa >= 60"
                    v-model="aprobarData.correcion"
                    :items="correciones"
                    item-text="correcion"
                    item-value="bCorrecion"
                    label="Correciones"
                    persistent-hint
                    single-line

                  ></v-select>
        </v-card-text>
        <v-card-actions>
          <v-btn @click="hideDialogAprobar">Cancelar</v-btn>
          <v-btn type="submit" :disabled="!valid">Guardar</v-btn> 
        </v-card-actions>
        </v-form>
        
      </v-card>
    </v-dialog>
   <v-dialog v-model="dialogEmpasteView">
    <v-card>
       <v-card-title class="blue darken-2 white--text">Carta empaste</v-card-title>
       
        <v-card-text>
          <div class="text-center"><GenerarEmpaste /></div>
          <PlantillaCartaEmpaste />
        </v-card-text>
      </v-card>
   </v-dialog>
  </div>
</template>
<script>
import * as panel1Service from "../../../services/programacion_service";
import * as estudianteService from "../../../services/estudiante_service";
import PlantillaActa from "./PlantillaActaDefensa.vue";
import PlantillaCartaP1 from "./PlantillaCartaPanel1.vue";
import GenerarCarta from "./GenerarPanel1.vue";
import PlantillaInforme from "./PlantillaInformeDefensa.vue"
import PlantillaCartaEmpaste from "./PlantillaInformeEmpaste.vue"
import GenerarEmpaste from "./GenerarInformeEmpaste.vue"
import moment from "moment";
import { mapActions, mapGetters } from 'vuex';
var writtenNumber = require("written-number");
writtenNumber.defaults.lang = "es";
export default {
  components: {
    PlantillaActa,
    PlantillaCartaP1,
    GenerarCarta,
    PlantillaInforme,
    PlantillaCartaEmpaste,
    GenerarEmpaste
  },
  data() {
    return {
      correciones: [{correcion: 'Con correciones', bCorrecion: 'si'},{correcion: 'Sin correciones', bCorrecion: 'no'}],
      options: {
        month: "long",
      },
      options1: {
        year: "numeric",
        month: "long",
        day: "numeric",
      },
      dialogEmpasteView: false,
      dialogAprobar: false,
      dialogComent: false,
      time: null,
      menu2: false,
      modal2: false,
      valid: true,
      name: "",
      date: "",
      menu: false,
      modal: false,
      menu2: false,
      buscador: '',
      pagination: {
        current: 1,
        total: 0,
      },
      dialogCartaView: false,
      dialogCreate: false,
      dialogUpdate: false,
      dialogActa: false,
      panels3: [],
      estudiantes: [],
      programacionData: {
        id: "",
        id_estudiante: "",
        nroPanel: "Tercer Panel",
        horaDefensa: "",
        fechaDefensa: "",
      },
      comboData: '',
      detalleSol: {},
      actaData: {},
      detalleActa: {},
      diaActa: "",
      mesActa: "",
      añoActa: "",
      carreraSelect: 1,
      aprobarData: {
        id: '',
        notaDefensa: '',
        correcion: ''
      }
    };
  },
  computed: {
    timestamp: function () {
      return moment().format("YYYY/MM/DD");
    },
    ...mapGetters({carreras:"getCarreras",allCarreras: "getAllCarreras"})
  },
  mounted() {
    this.GET_ALL_CARRERAS();
    this.loadEstudiantes();
    this.loadPanel3();

  },

  methods: {
    ...mapActions(["GET_CARRERAS","GET_ALL_CARRERAS"]),
    actualizarSelect(){
      this.loadEstudiantes();
    },
    confirmarCarta: async function (itemChild) {
      Swal.fire({
        title: "Esta seguro de completar esta tarea?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, completar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await panel1Service.confirmarCartaPro(itemChild.id);
          this.loadPanel3();
          Swal.fire("Completado!", "Su registro ha sido actualizado.", "success");
        }
      });
    },
    confirmarActa: async function (itemChild) {
      Swal.fire({
        title: "Esta seguro de completar el acta?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, completar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await panel1Service.actaRespuesta(itemChild.id);
          this.loadPanel3();
          Swal.fire("Completado!", "Su registro ha sido actualizado.", "success");
        }
      });
    },
    confirmarInforme: async function (itemChild) {
      Swal.fire({
        title: "Esta seguro de completar el informe?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, completar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await panel1Service.solicitudRespuesta(itemChild.id);
          this.loadPanel3();
          Swal.fire("Completado!", "Su registro ha sido actualizado.", "success");
        }
      });
    },
    loadPanel3: async function () {
      try {
        const response = await panel1Service.loadDefensasPanel3(this.comboData,
          this.pagination.current);
        this.panels3 = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
        
      } catch (error) {}
    },
    loadSearch: async function () {
      const response = await panel1Service.loadDefensasPanel3Search(
        this.comboData,
        this.buscador
      );
      this.panels3 = response.data.data;
    },
    onPageChange() {
      this.loadPanel3();
    }, 
    loadEstudiantes: async function () {
      try {
        const response = await estudianteService.getEstudiantesp3(this.carreraSelect);
        this.estudiantes = response.data;
        console.log(this.estudiantes);
      } catch (error) {
        console.log(error)
      }
    },
    createProgramacion: async function () {
      if(this.$refs.form.validate() === false){
        this.$refs.form.validate()
      }else {
        let formData = new FormData();
      formData.append("id_estudiante", this.programacionData.id_estudiante);
      formData.append("nroPanel", this.programacionData.nroPanel);
      formData.append("fechaDefensa", this.programacionData.fechaDefensa);
      formData.append("horaDefensa", this.programacionData.horaDefensa);

      try {
        const response = await panel1Service.createProgramacionP1(formData);
        this.panels3.unshift(response.data);
        this.loadPanel3();
        this.hideNewAsignacionDialog();
        this.loadEstudiantes();
        this.programacionData = {
          id_estudiante: "",
          nroPanel: "Tercer Panel",
          horaDefensa: null,
          fechaDefensa: null,
        },
          this.$swal({
            icon: "success",
            title: "Registro exitoso",
            text: "Usted ha registrado exitosamente",
          });
      } catch (error) {
        switch (error.response.status) {
          case 401:
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Debe asignar jurados, verifique por favor",
            });
            break;
            case 403:
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "El estudiante ya esta registrado, verifique por favor",
            });
            break;
          case 500:
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Algo salió mal",
            });
        }
      }

      }
     
    },
    eliminarDetalles: async function(item){
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
          await panel1Service.eliminarDetalles(item.id);
          this.loadPanel3();
          this.loadEstudiantes();
          Swal.fire("Eliminado!", "Su registro ha sido eliminado.", "success");
        }
      });
    },
    completarCorrecion: async function(itemC){
      Swal.fire({
        title: "Esta seguro de completar esta correción?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, completar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await panel1Service.completarCorrecion(itemC.id);
          this.loadPanel3();
          Swal.fire("Completado!", "Su registro ha sido actualizado.", "success");
        }
      });
    },
    habilitarData(item){
      this.aprobarData = { ...item };
      this.showNewDialogAprobar();
    },
    habilitar: async function(){
      if(this.$refs.form.validate() === false){
        this.$refs.form.validate() 
      }else {
        try {
    const formData = new FormData();
    formData.append("notaDefensa", this.aprobarData.notaDefensa);
    formData.append("correcion", this.aprobarData.correcion);
    formData.append("__method","put");
  await panel1Service.habilitarEmpaste(this.aprobarData.id, formData)
  this.loadPanel3();
  this.hideDialogAprobar();
  this.aprobarData = {
    notaDefensa: "",
    correcion: ""
  }
  this.$swal({
          icon: "success",
          title: "Actualizacion exitosa",
          text: "Usted ha actualizado exitosamente",
        });
  } catch (error) {
    switch (error.response.status) {
          case 402:
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Debe aprobar la entrega de los informes de habilitacion para el segundo panel",
            });
            break;
            case 403: this.$swal({
              icon: "error",
              title: "Oops...",
              text: "El postulante ya ha sido programado, verifique por favor",
            });
            break;
          case 500:
            this.$swal({
              icon: "error",
              title: "Oops...",
              text: "Algo salió mal",
            });
        }
  }
      }
 
    },
    generCartaDef: async function(item){
      Swal.fire({
        title: "Esta seguro de generar la carta de defensa?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, generar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await panel1Service.generarCorrelativoCartaDefFinal(item.id);
          this.loadPanel3();   
          Swal.fire("Confirmado!", "Se ha generado su carta con exito.", "success");
       
        }
      });
    },
    changeDate(date) {
      console.log(`de date ${date.fechaDefensa}`);
      const fechaRecibida = date.fechaDefensa;

      console.log(fechaRecibida);
      const fechaActual = new Date(fechaRecibida);
      console.log(fechaActual);
      const formatDate = fechaActual.setMinutes(
        fechaActual.getMinutes() + fechaActual.getTimezoneOffset()
      );
      const nuevaFecha = new Date(formatDate);
      console.log(nuevaFecha);
      console.log(fechaActual);
      const month = nuevaFecha.toLocaleDateString("es-ES", this.options);
      const day = nuevaFecha.getDate();
      //  const month = fechaActual.getUTCMonth();
      const year = nuevaFecha.getFullYear();
      const mes = nuevaFecha.toLocaleDateString("es-ES", this.options);
      this.$store.dispatch("GET_MESACTA", mes);
      const tDate = nuevaFecha.toLocaleDateString("es-ES", this.options1);
      this.$store.dispatch("GET_TACTA", tDate);
      const diaActa = writtenNumber(day);
      this.$store.dispatch("GET_DATEACTA", diaActa);
      const anioActa = writtenNumber(year);
      this.$store.dispatch("GET_ANIOACTA", anioActa);
      const diaS = nuevaFecha.toLocaleDateString("es-ES", { weekday: "long" });
      this.$store.dispatch("GET_SDIA", diaS);
    },
    changeTime(hora) {
      const Time = new Date(`8 ${hora.horaDefensa}`);
      console.log(Time);
      var hours = Time.getHours();
      var minutes = Time.getMinutes();
      console.log(`esta es la hora ${hours} y su minuto ${minutes}`);
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 24;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      console.log(`horaaa ${strTime}`);
      this.$store.dispatch("GET_HORADEFENSA", strTime);
    },
    changeToday(fech) {
      const fechaRecibida = fech.fechaCartaProRespuestaR;
      console.log(fechaRecibida);
      const fechaActual = new Date(fechaRecibida);
      console.log(fechaActual);
      const formatDate = fechaActual.setMinutes(
        fechaActual.getMinutes() + fechaActual.getTimezoneOffset()
      );
      const nuevaFecha = new Date(formatDate).toLocaleDateString("es-Es", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      this.$store.dispatch("GET_ACTUALFECHA", nuevaFecha);
      console.log(`fechaaaaa ${nuevaFecha}`);
    },
    changeTodayInforme(fech) {
      const fechaRecibida = fech.fechaCartaSolInformeR;
      const fechaActual = new Date(fechaRecibida);
      console.log(fechaActual);
      const formatDate = fechaActual.setMinutes(
        fechaActual.getMinutes() + fechaActual.getTimezoneOffset()
      );
      const nuevaFecha = new Date(formatDate).toLocaleDateString("es-Es", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
      this.$store.dispatch("GET_ACTUALFECHA", nuevaFecha);
      console.log(`fechaaaaa ${nuevaFecha}`);
    },
    generateActa(itemChild, item2, item) {
      this.showNewActaDialog();
      console.log("hello");
      this.changeDate(item);
      this.changeDate(item);
      this.changeToday(itemChild);
      this.actaData = { ...itemChild };
      this.$store.dispatch("GET_ACTA1", this.actaData);
      this.detalleActa = { ...item };
      this.$store.dispatch("GET_DETALLE_ACTA1", this.detalleActa);
      this.detalleSol = { ...item2 };
      this.$store.dispatch("GET_DETALLE_SOL", this.detalleSol);
    },
    generateCartaInforme(itemChild,item, item3 ) {
      this.showInformeView();
      this.changeTime(item);
      this.changeDate(item);
      this.changeDate(item);
      this.changeToday(itemChild);
      this.actaData = { ...itemChild };
      this.$store.dispatch("GET_ACTA1", this.actaData);
      this.detalleActa = { ...item };
      this.$store.dispatch("GET_DETALLE_ACTA1", this.detalleActa);
      this.detalleSol = { ...item3 };
      this.$store.dispatch("GET_DETALLE_SOL", this.detalleSol);
    },
    generarCarta(itemChild, item, item2) {
      this.showCartaView();
      this.changeTime(item);
      this.changeDate(item);
      this.changeToday(item);
      this.actaData = { ...itemChild };
      this.$store.dispatch("GET_ACTA1", this.actaData);
      this.detalleActa = { ...item };
      this.$store.dispatch("GET_DETALLE_ACTA1", this.detalleActa);
      this.detalleSol = { ...item2 };
      this.$store.dispatch("GET_DETALLE_SOL", this.detalleSol);
    },
    generateCartaEmpaste(itemChild,item, item3){
      this.showViewEmpaste();
      this.changeTime(item);
      this.changeDate(item);
      this.changeToday(item);
      this.actaData = { ...itemChild };
      this.$store.dispatch("GET_ACTA1", this.actaData);
      this.detalleActa = { ...item };
      this.$store.dispatch("GET_DETALLE_ACTA1", this.detalleActa);
      this.detalleSol = { ...item3 };
      this.$store.dispatch("GET_DETALLE_SOL", this.detalleSol);
    },
    generarEmpaste: async function(item){
      Swal.fire({
        title: "Esta seguro de generar la carta de solicitud de empaste?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, generar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await panel1Service.generarCorrelativoEmpaste(item.id);
          this.loadPanel3();   
          Swal.fire("Confirmado!", "Se ha generado su carta con exito.", "success");
       
        }
      });
    },
    showViewEmpaste(){
      this.dialogEmpasteView = true;
    },
    hideViewEmpaste(){
      this.dialogEmpasteView = false;
    },
    showComent() {
      this.dialogComent = true;
    },

    showCartaView() {
      this.dialogCartaView = true;
    },
    showNewActaDialog() {
      this.dialogActa = true;
    },

    hideNewActaDialog() {
      this.dialogActa = false;
    },
    showNewAsignacionDialog() {
      this.dialogCreate = true;
    },
    hideNewAsignacionDialog() {
      this.dialogCreate = false;
    },
    showEditAsignacionDialog() {
      this.dialogUpdate = true;
    },
    hideEditAsignacionDialog() {
      this.dialogUpdate = false;
    },
    showNewDialogAprobar(){
      this.dialogAprobar = true
    },
    hideDialogAprobar(){
      this.dialogAprobar = false
    },
    getItemTextDocentes(docentes) {
      return `${docentes.docPaterno} ${docentes.docMaterno} `;
    },
    getItemTextEstudiantes(estudiantes) {
      return `${estudiantes.esPaterno} ${estudiantes.esMaterno} `;
    },
  },
};
</script>
