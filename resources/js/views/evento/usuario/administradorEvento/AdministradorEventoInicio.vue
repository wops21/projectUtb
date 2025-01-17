<template>
  <div>
    <v-container>
      <div>
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

          <v-col cols="12" sm="1">
            <v-btn color="green" dark @click="showViewTipoEvento"
              ><v-icon>event_note</v-icon></v-btn
            >
          </v-col>
          <v-spacer></v-spacer>
          <v-col cols="12" sm="1">
            <v-btn color="green" dark @click="showViewDialogAddEvento"
              ><v-icon>event_note</v-icon></v-btn
            >
          </v-col>
        </v-row>
        <div class="text-h5">Lista de eventos activos</div>
      </div>
      <v-simple-table dense>
        <template v-slot:default>
          <thead>
            <tr>
              <th>Nro</th>
              <th>Tipo de evento</th>
              <th>Nombre evento</th>
              <th>Fecha inicio</th>
              <th>Fecha final</th>
              <th>Lugar</th>
              <th>Hora Academica</th>
              <th>Costo</th>
              <th>Estado</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(evento, index) in eventos" :key="index">
              <td>{{ index + 1 }}</td>
              <td>{{ evento.relacion_tipo_evento.tipoEvento }}</td>
              <td>{{ evento.nombreEvento }}</td>
              <td>{{ evento.fechaInicio }}</td>
              <td>{{ evento.fechaFinal }}</td>
              <td>{{ evento.lugar }}</td>
              <td>{{ evento.horaAcademica }}</td>
              <td>{{ evento.costo }}</td>
              <td>
                <v-icon color="red" @click="desactivarEvento(evento)"
                  >visibility_off</v-icon
                >
              </td>
              <td>
                <v-icon color="red" @click="deleteEvento(evento)">delete</v-icon>
                <v-icon @click="editDataEvento(evento)">edit</v-icon>
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
    <v-dialog v-model="viewAddEvento" max-width="500">
      <v-form
        v-on:submit.prevent="createEvento"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-card>
          <v-toolbar dense class="blue darken-2 white--text">
            <v-toolbar-title class="blue darken-2 white--text"
              >Registro del evento
            </v-toolbar-title>
            <v-btn icon class="ml-auto" color="red" @click="hideViewDialogAddEvento">
              <v-icon color="red">mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-select
                  v-model="eventoData.id_tipoEvento"
                  :items="tipoEventos"
                  item-text="tipoEvento"
                  item-value="id"
                  label="Tipo de evento"
                  persistent-hint
                  single-line
                  :rules="[(v) => !!v || 'Debe seleccionar un tipo de evento']"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="eventoData.lugar"
                  label="Lugar"
                  :rules="[(v) => !!v || 'Debe ingresar el lugar']"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="eventoData.orador"
                  label="Expositor"
                  :rules="[
                    (v) => !!v || 'Debe ingresar un expositor',
                    (v) => /[aA-zZ]$/.test(v),
                  ]"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="eventoData.horaAcademica"
                  suffix="Hrs."
                  label="Hora academica"
                  :rules="[
                    (v) => !!v || 'Debe ingresar la hora academica',
                    (v) => /[0-9]$/.test(v) || 'Debe ingresar una hora valida',
                  ]"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-dialog
                  v-model="modal1"
                  :return-value.sync="eventoData.fechaInicio"
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
                    <v-btn text color="primary" @click="$refs.dialogF1.save(date1)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-dialog
                  v-model="modal2"
                  :return-value.sync="eventoData.fechaFinal"
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
                    <v-btn text color="primary" @click="$refs.dialogF.save(date2)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </v-row>
            <v-row>
              <v-col  cols="12" sm="4" md="4">
                <v-text-field
          label="Costo"
          v-model="eventoData.costo"
          prefix="Bs."
        ></v-text-field>  
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center mx-auto" cols="12" sm="6" md="6">
                <v-textarea
                  v-model="eventoData.nombreEvento"
                  label="Titulo"
                  auto-grow
                  outlined
                  rows="1"
                  row-height="15"
                  :rules="[(v) => !!v || 'Debe ingresar el titulo']"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="hideViewDialogAddEvento" color="blue-grey" dark
              >Cancelar</v-btn
            >
            <v-btn :disabled="!valid" type="submit" color="blue darken-2" dark
              >Guardar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
    <v-dialog v-model="viewEditEvento" max-width="500">
      <v-form
        v-on:submit.prevent="updateEvento"
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-card>
          <v-toolbar dense class="blue darken-2 white--text">
            <v-toolbar-title class="blue darken-2 white--text"
              >Editar evento
            </v-toolbar-title>
            <v-btn icon class="ml-auto" color="red" @click="hideViewDialogAddEvento">
              <v-icon color="red">mdi-close</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-select
                  v-model="editEvento.id_tipoEvento"
                  :items="tipoEventos"
                  item-text="tipoEvento"
                  item-value="id"
                  label="Tipo de evento"
                  persistent-hint
                  single-line
                  :rules="[(v) => !!v || 'Debe seleccionar una tipo de evento']"
                  required
                ></v-select>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="editEvento.lugar"
                  label="Lugar"
                  :rules="[(v) => !!v || 'Debe ingresar el lugar']"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="editEvento.orador"
                  label="Expositor"
                  :rules="[
                    (v) => !!v || 'Debe agregar un expositor',
                    (v) => /[aA-zZ]$/.test(v),
                  ]"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-text-field
                  v-model="editEvento.horaAcademica"
                  suffix="Hrs."
                  label="Hora academica"
                  :rules="[
                    (v) => !!v || 'Debe ingresar la hora academica',
                    (v) => /[0-9]$/.test(v) || 'Debe ingresar una hora valida',
                  ]"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" sm="6" md="6">
                <v-dialog
                  v-model="modal1"
                  :return-value.sync="editEvento.fechaInicio"
                  ref="dialogF1"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="editEvento.fechaInicio"
                      label="Fecha inicio"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :rules="[(v) => !!v || 'Debe ingresar la fecha']"
                      required
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="editEvento.fechaInicio" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal1 = false"> Cancel </v-btn>
                    <v-btn text color="primary" @click="$refs.dialogF1.save(editEvento.fechaInicio)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
              <v-col cols="12" sm="6" md="6">
                <v-dialog
                  v-model="modal2"
                  :return-value.sync="editEvento.fechaFinal"
                  ref="dialogF"
                  persistent
                  width="290px"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-text-field
                      v-model="editEvento.fechaFinal"
                      label="Fecha final"
                      prepend-icon="mdi-calendar"
                      readonly
                      v-bind="attrs"
                      v-on="on"
                      :rules="[(v) => !!v || 'Debe ingresar la fecha']"
                      required
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="editEvento.fechaFinal" scrollable>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="modal2 = false"> Cancel </v-btn>
                    <v-btn text color="primary" @click="$refs.dialogF.save(editEvento.fechaFinal)">
                      OK
                    </v-btn>
                  </v-date-picker>
                </v-dialog>
              </v-col>
            </v-row>
            <v-row>
              <v-col  cols="12" sm="4" md="4">
                <v-text-field
                v-model="editEvento.costo"
          label="Costo"
          prefix="Bs."
        ></v-text-field>  
              </v-col>
            </v-row>
            <v-row>
              <v-col class="text-center mx-auto" cols="12" sm="6" md="6">
                <v-textarea
                  v-model="editEvento.nombreEvento"
                  label="Titulo"
                  auto-grow
                  outlined
                  rows="1"
                  row-height="15"
                  :rules="[(v) => !!v || 'Debe ingresar el titulo']"
                  required
                ></v-textarea>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn @click="hideViewDialogEditEvento" color="blue-grey" dark
              >Cancelar</v-btn
            >
            <v-btn :disabled="!valid" type="submit" color="blue darken-2" dark
              >Guardar</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-form>
    </v-dialog>
    <v-dialog v-model="viewTipoEvento" max-width="800">
      <v-card>
        <v-toolbar dense class="blue darken-2 white--text">
          <v-toolbar-title class="blue darken-2 white--text"
            >Registro del evento
          </v-toolbar-title>
          <v-btn icon class="ml-auto" color="red" @click="hideViewTipoEvento">
            <v-icon color="red">mdi-close</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-data-table
            :headers="headers"
            :items="tipoEventos"
            :search="buscador1"
            sort-by="id"
            class="elevation-1"
          >
            <template v-slot:top>
              <v-toolbar flat>
                <v-toolbar-title>Lista de tipos de eventos</v-toolbar-title>
                <v-divider class="mx-4" inset vertical></v-divider>
                <v-spacer></v-spacer>
                <v-text-field
                  v-model="buscador1"
                  label="Buscador"
                  append-icon="search"
                ></v-text-field>
                <v-dialog v-model="dialogNewTipo" max-width="500px">
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on" >
                      Nueva categoria
                    </v-btn>
                  </template>
                 <v-form v-on:submit.prevent="createTipo">
                  <v-card>
                    <v-card-title>
                     Nueva categoria de evento
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row class="ml-auto">
                          <v-col cols="12" sm="8" md="8">
                            <v-text-field
                              v-model="tipo.tipoEvento"
                              label="nombre"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="hideDialogNewTipo" > Cancelar </v-btn>
                      <v-btn color="blue darken-1" text type="submit"> Guardar </v-btn>
                    </v-card-actions>
                  </v-card>
                 </v-form>
                </v-dialog>
                <v-dialog v-model="dialogEditTipo" max-width="500px">
                 <v-form v-on:submit.prevent="updateTipo">
                  <v-card>
                    <v-card-title>
                     Editar categoria de evento
                    </v-card-title>

                    <v-card-text>
                      <v-container>
                        <v-row class="ml-auto">
                          <v-col cols="12" sm="8" md="8">
                            <v-text-field
                              v-model="editTipo.tipoEvento"
                              label="nombre"
                            ></v-text-field>
                          </v-col>
                        </v-row>
                      </v-container>
                    </v-card-text>

                    <v-card-actions>
                      <v-spacer></v-spacer>
                      <v-btn color="blue darken-1" text @click="hideDialogNewTipo" > Cancelar </v-btn>
                      <v-btn color="blue darken-1" text type="submit"> Guardar </v-btn>
                    </v-card-actions>
                  </v-card>
                 </v-form>
                </v-dialog>

              </v-toolbar>
            </template>
            <template v-slot:item.actions="{ item }">
              <v-icon small class="mr-2" @click="editTipoEvento(item)"> mdi-pencil </v-icon>
              <v-icon small @click="deleteTipo(item)"> mdi-delete </v-icon>
            </template>
          </v-data-table>
        </v-card-text>
      </v-card>
    </v-dialog>
    <v-overlay :value="overlay">
      <v-progress-circular indeterminate size="64"></v-progress-circular>
    </v-overlay>
  </div>
</template>
<script>
import * as serviceEvent from "../../../../services/evento_service";
import TipoEventoModal from "./TipoEvento.vue";
export default {
  components: {
    TipoEventoModal,
  },
  data() {
    return {
      dialogEditTipo: false,
      dialogNewTipo: false,
      buscador1: "",
      viewAddEvento: "",
      viewEditEvento: "",
      pagination: {
        current: 1,
        total: 0,
      },
      eventos: [],
      date1: "",
      date2: "",
      modal1: false,
      modal2: false,
      buscador: "",
      overlay: true,
      eventoData: {
        id_tipoEvento: "",
        lugar: "",
        orador: "",
        horaAcademica: "",
        fechaInicio: "",
        fechaFinal: "",
        nombreEvento: "",
        costo: ""
      },
      tipoEventos: [],
      valid: "",
      editEvento: {},
      editTipo: {},
      viewTipoEvento: "",
      headers: [
        { text: "id", value: "id" },
        { text: "nombre", value: "tipoEvento" },
        { text: "actions", value: "actions" },
      ],
      editedIndex: -1,
      tipo: {
        tipoEvento: "",
      },

    };
  },

  mounted() {
    this.loadEvento();
    this.loadTipoEvento();
  },
  methods: {
    async loadEvento() {
      try {
        const response = await serviceEvent.loadEventoActive(this.pagination.current);
        this.eventos = response.data.data;
        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
        this.overlay = false;
      } catch (error) {
        console.log(error);
      }
    },
    async loadBuscador() {
      try {
        const response = await serviceEvent.loadSearchEventA(this.buscador);
        this.eventos = response.data.data;

        this.pagination.current = response.data.current_page;
        this.pagination.total = response.data.last_page;
      } catch (error) {
        console.log(error);
      }
    },
    async loadTipoEvento() {
      try {
        const response = await serviceEvent.loadTipoEvento();
        this.tipoEventos = response.data;
      } catch (error) {
        console.log(error);
      }
    },
    async createEvento() {
      try {
        const formData = new FormData();
        formData.append("id_tipoEvento", this.eventoData.id_tipoEvento);
        formData.append("lugar", this.eventoData.lugar);
        formData.append("orador", this.eventoData.orador);
        formData.append("horaAcademica", this.eventoData.horaAcademica);
        formData.append("fechaInicio", this.eventoData.fechaInicio);
        formData.append("fechaFinal", this.eventoData.fechaFinal);
        formData.append("nombreEvento", this.eventoData.nombreEvento);
        formData.append("costo", this.eventoData.costo);
        formData.append("eventEstado", 1);
        await serviceEvent.createEvento(formData);
        this.loadEvento();
        this.hideViewDialogAddEvento();
        this.$swal({
          icon: "success",
          title: "Actualizacion exitosa",
          text: "Usted ha actualizado exitosamente",
        });
      } catch (error) {
        this.$swal({
          icon: "error",
          title: "Oops...",
          text: `${error}`,
        });
      }
    },
    async updateTipo(){
      try {
        await serviceEvent.updateTipo(this.editTipo.id, this.editTipo)
        this.loadTipoEvento();
        this.hidedialogEditTipo();
        this.$swal({
          icon: "success",
          title: "Registro exitosamente",
          text: "Usted ha registrado exitosamente",
        });
      } catch (error) {
        
      }
    },
    async deleteTipo(tipo){
      Swal.fire({
        title: "Esta seguro de eliminar la categoria?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, eliminar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await serviceEvent.deleteTipo(tipo.id);
          this.loadEvento();
          Swal.fire("Confirmado!", "Se ha generado su carta con exito.", "success");
        }
      });
    },
    async deleteEvento(evento){
      Swal.fire({
        title: "Esta seguro de eliminar el evento?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, eliminar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await serviceEvent.deleteEvento(evento.id);
          this.loadEvento();
          Swal.fire("Confirmado!", "Se ha generado su carta con exito.", "success");
        }
      });
    },
    async updateEvento() {
      try {
        await serviceEvent.updateEvento(this.editEvento.id, this.editEvento);
        this.$swal({
          icon: "success",
          title: "Registro exitoso",
          text: "Usted ha actualizado exitosamente",
        });
        this.hideViewDialogEditEvento();
        this.loadEvento();
      } catch (error) {
        console.log(error);
      }
    },
    async desactivarEvento(evento) {
      Swal.fire({
        title: "Esta seguro de desactivar el evento?",
        text: "¡No podrás revertir esto!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "¡Sí, desactivar!",
      }).then(async (result) => {
        if (result.isConfirmed) {
          await serviceEvent.desactivarEvento(evento.id);
          this.loadEvento();
          Swal.fire("Confirmado!", "Se ha generado su carta con exito.", "success");
        }
      });
    },
    async createTipo(){
      try {
        const formData = new FormData();
        formData.append("tipoEvento", this.tipo.tipoEvento);
        await serviceEvent.createTipo(formData);
        this.hideDialogNewTipo();
        this.loadTipoEvento();
        this.$swal({
          icon: "success",
          title: "Registro exitosamente",
          text: "Usted ha registrado exitosamente",
        });
      } catch (error) {
        
      }
    },
  
    onPageChange() {
      this.loadEvento();
    },
    showViewDialogAddEvento() {
      this.viewAddEvento = true;
    },
    hideViewDialogAddEvento() {
      this.viewAddEvento = false;
    },
    showViewDialogEditEvento() {
      this.viewEditEvento = true;
    },
    hideViewDialogEditEvento() {
      this.viewEditEvento = false;
    },
    editDataEvento(evento) {
      this.showViewDialogEditEvento();
      this.editEvento = { ...evento };
    },
    editTipoEvento(tipo) {
      this.showdialogEditTipo();
      this.editTipo = { ...tipo };
    },
    showDialogNewTipo(){
      this.dialogNewTipo = true
    },
    
    hideDialogNewTipo(){
      this.dialogNewTipo = false
    },
    showViewTipoEvento() {
      this.viewTipoEvento = true;
    },
    hideViewTipoEvento() {
      this.viewTipoEvento = false;
    },
    showdialogEditTipo(){
      this.dialogEditTipo = true
    },
    hidedialogEditTipo(){
      this.dialogEditTipo = false
    }

  },
};
</script>
