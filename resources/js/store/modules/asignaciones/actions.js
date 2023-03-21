import * as actions from '../../action-types';
import * as mutations from '../../mutation-types';

export default {
    [actions.GET_ASIGNACIONES]({ commit }, data) {
        commit(mutations.SET_ASIGNACIONES, data);
      },
}