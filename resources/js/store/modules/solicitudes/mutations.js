import * as mutations from "../../mutation-types";

export default {
    [mutations.SET_SOLICITUDES](state, data) {
       state.solicitudes = data;
    },
    [mutations.SET_ACTUALFECHASOL](state, data) {
        state.fechaRegistro = data;
    },
    [mutations.SET_ACTUAL_CORRELATIVO](state, data) {
        state.correlativo = data;
    },
    test(state, date){

        return state.fechaRegistro = date;
        
    }
};
