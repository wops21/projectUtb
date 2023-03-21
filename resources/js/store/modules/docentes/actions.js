import * as actions from '../../action-types';
import * as mutations from '../../mutation-types';
import * as docenteService from '../../../services/docente_service';

export default {
    async [actions.GET_REPORTE_DOCENTEP1]({ commit },{docente, payload}) {
        try {
            const res = await docenteService.reporteP1Docente(docente,payload);
            console.log(res);
            commit(mutations.SET_REPORTE_DOCENTEP1, res.data)
        } catch (error) {
            console.log(error);
        }
      }
    ,
    [actions.GET_DOCENTE]({ commit }, data){
        commit(mutations.SET_DOCENTE, data);
    },
    [actions.GET_DOCENTE_P1]({ commit }, data){
        commit(mutations.SET_DOCENTE_P1, data);
    },
    async [actions.GET_REPORTE_DOCENTEP2]({ commit },{docente, payload}) {
        try {
            const res = await docenteService.reporteP2Docente(docente,payload);
            console.log(res);
            commit(mutations.SET_REPORTE_DOCENTEP2, res.data)
        } catch (error) {
            console.log(error);
        }
      },
      async [actions.GET_REPORTE_DOCENTEP3]({ commit },{docente, payload}) {
        try {
            const res = await docenteService.reporteP3Docente(docente,payload);
            console.log(res);
            commit(mutations.SET_REPORTE_DOCENTEP3, res.data)
        } catch (error) {
            console.log(error);
        }
      },
      async [actions.GET_REPORTE_DOCENTEPA]({ commit },{docente, payload}) {
        try {
            const res = await docenteService.reportePaDocente(docente,payload);
            console.log(res);
            commit(mutations.SET_REPORTE_DOCENTEPA, res.data)
        } catch (error) {
            console.log(error);
        }
      },
      async [actions.GET_REPORTE_DOCENTEAS]({ commit },{docente, payload}) {
        try {
            const res = await docenteService.reporteAsDocente(docente,payload);
            console.log(res);
            commit(mutations.SET_REPORTE_DOCENTEAS, res.data)
        } catch (error) {
            console.log(error);
        }
      }


}
