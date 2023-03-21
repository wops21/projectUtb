import * as actions from '../../action-types';
import * as mutations from '../../mutation-types';

export default {
    [actions.GET_SOLICITUDES]({ commit }, data) {
        commit(mutations.SET_SOLICITUDES, data);
      },

      [actions.GET_ACTUALFECHASOL]({ commit }, data) {
        commit(mutations.SET_ACTUALFECHASOL, data);
      },
      [actions.GET_ACTUAL_CORRELATIVO]({ commit }, data) {
        commit(mutations.SET_ACTUAL_CORRELATIVO, data);
      },
      
}