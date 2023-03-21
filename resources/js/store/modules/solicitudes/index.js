import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
    solicitudes: [],
    fechaRegistro: {},
    correlativo: {}
}
export default {
    state,
    actions,
    getters,
    mutations
}