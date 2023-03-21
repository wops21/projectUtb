
import * as actions from '../../action-types';
import * as mutations from '../../mutation-types';
export default {
    async [actions.GET_AUTHENTICATE]({ commit }, data) {
        commit(mutations.SET_AUTHENTICATION, data);
      },
}