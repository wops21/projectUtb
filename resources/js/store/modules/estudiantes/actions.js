import * as actions from '../../action-types';
import * as mutations from '../../mutation-types';

export default {
    [actions.GET_ESTUDIANTES]({ commit }, data){
        commit(mutations.SET_ESTUDIANTES, data);
    },
    [actions.GET_HISTORIALESTUDIANTE]({ commit }, data){
        commit(mutations.SET_HISTORIALESTUDIANTE, data);
    }
}