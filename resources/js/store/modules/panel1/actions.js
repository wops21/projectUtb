import * as actions from '../../action-types';
import * as mutations from '../../mutation-types';
import * as panel1Service from '../../../services/programacion_service';
export default {
    async [actions.GET_PANEL1]({ commit }) {

        const response = await panel1Service.loadDefensasPanel1();
        
        commit(mutations.SET_PANEL1, response.data);
      },

      [actions.GET_ACTA1]({ commit }, data) {
        commit(mutations.SET_ACTA1, data);
      },
      [actions.GET_DETALLE_ACTA1]({ commit }, data) {
        commit(mutations.SET_DETALLE_ACTA1, data);
      },
      [actions.GET_DETALLE_SOL]({ commit }, data) {
        commit(mutations.SET_DETALLE_SOL, data);
      },
      [actions.GET_DATEACTA]({ commit }, date){
        commit(mutations.SET_DATEACTA, date);
      },
      [actions.GET_MESACTA]({ commit }, date){
        commit(mutations.SET_MESACTA, date);
      },
      [actions.GET_ANIOACTA]({ commit }, date){
        commit(mutations.SET_ANIOACTA, date);
      },
      [actions.GET_TACTA]({ commit }, date){
        commit(mutations.SET_TACTA, date);
      },
      [actions.GET_SDIA]({ commit }, date){
        commit(mutations.SET_SDIA, date);
      },
      [actions.GET_HORADEFENSA]({ commit }, date){
        commit(mutations.SET_HORADEFENSA, date);
      },
      [actions.GET_ACTUALFECHA]({ commit }, date){
        commit(mutations.SET_ACTUALFECHA, date);
      },
 

      






      

}
