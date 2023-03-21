import * as actions from '../../action-types';
import * as mutations from '../../mutation-types';
import * as carreraService from '../../../services/carrera_service';
export default {

    async [actions.GET_CARRERAS]({ commit }) {
        try {
            const res = await carreraService.loadCarreras();
 
            commit(mutations.SET_CARRERAS, res.data)
        } catch (error) {
            console.log(error);
        }
      },
      async [actions.GET_ALL_CARRERAS]({ commit }) {
        try {
            const res = await carreraService.loadCarreras();
            const optionTodos = { id: 0, carreraNombre: "Todas las carreras", duracion: 0 };
            const rest  = [optionTodos, ...res.data];
            commit(mutations.SET_ALL_CARRERAS, rest)
        } catch (error) {
            console.log(error);
        }
      },
}