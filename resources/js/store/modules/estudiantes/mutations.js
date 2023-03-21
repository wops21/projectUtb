import * as mutations from '../../mutation-types';

export default {
    [mutations.SET_ESTUDIANTES](state, data){
        state.estudiantes = data;
    },
    [mutations.SET_HISTORIALESTUDIANTE](state, data){
        state.historialEstudiante = data;
    }
}