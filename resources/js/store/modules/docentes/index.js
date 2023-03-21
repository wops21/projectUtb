import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
    docentes: {},
    docenteP1: {},
    reporteP1: [],
    reporteP2: [],
    reporteP3: [],
    reporteA: [],
    reporteAs: []
}
export default {
    actions,
    getters,
    mutations,
    state
}