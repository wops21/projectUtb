import * as actions from '../../action-types';
import * as mutations from '../../mutation-types';
import * as eventoService from '../../../services/evento_service'

export default {
    async [actions.GET_REPORTE_EVENTO]({ commit },{estudiante}) {
        try {
            const res = await eventoService.todosAsignados(estudiante);
            console.log(res);
            commit(mutations.SET_REPORTE_EVENTO, res.data)
        } catch (error) {
            console.log(error);
        }
      }
    ,
}