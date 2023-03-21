import * as mutations from "../../mutation-types";

export default {
    [mutations.SET_ASIGNACIONES](state, data) {
        state.solicitudesData = data;
    },
};
