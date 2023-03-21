import * as mutations from '../../mutation-types';

export default {
    [mutations.SET_DOCENTE](state, data){
        state.docentes = data;
    },
    [mutations.SET_DOCENTE_P1](state, data){
        state.docenteP1 = data;
    },
    [mutations.SET_REPORTE_DOCENTEP1](state, data){
        state.reporteP1 = data;
    },
    [mutations.SET_REPORTE_DOCENTEP2](state, data){
        state.reporteP2 = data;
    },
    [mutations.SET_REPORTE_DOCENTEP3](state, data){
        state.reporteP3 = data;
    },
    [mutations.SET_REPORTE_DOCENTEPA](state, data){
        state.reporteA = data;
    },
    [mutations.SET_REPORTE_DOCENTEAS](state, data){
        state.reporteAs = data;
    },
    limpiarReporteA(state) {
        state.reporteA = [];
      },
    limpiarReporteP1(state){
        state.reporteP1 = [];
    },
    limpiarReporteP2(state){
        state.reporteP2 = [];
    },
    limpiarReporteP3(state){
        state.reporteP3 = [];
    }

    
}