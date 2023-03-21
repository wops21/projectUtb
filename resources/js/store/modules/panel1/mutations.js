import * as mutations from "../../mutation-types";

export default {
    [mutations.SET_PANEL1](state, data) {
        state.panel1 = data;
    },
    [mutations.SET_ACTA1](state, data) {
        state.acta1 = data;
    },
    [mutations.SET_DETALLE_ACTA1](state, data) {
        state.detalleActa = data;
    },
    [mutations.SET_DETALLE_SOL](state, data) {
        state.detalleSol = data;
    },
    [mutations.SET_DATEACTA](state, data){
        state.diaActa = data;
    },
 
    [mutations.SET_MESACTA](state, data){
        state.mesActa = data;
    },
    
    [mutations.SET_ANIOACTA](state, data){
        state.anioActa = data;
    },
    [mutations.SET_TACTA](state, data){
        state.dateActa = data;
    },
    [mutations.SET_SDIA](state, data){
        state.diaS = data;
    },
    [mutations.SET_HORADEFENSA](state, data){
        state.horaDefensa = data;
    },
    [mutations.SET_ACTUALFECHA](state, data){
        state.fechaActual = data;
    },
  
};
