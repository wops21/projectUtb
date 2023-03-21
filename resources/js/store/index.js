import Vue from 'vue';
import Vuex from 'vuex';
Vue.use(Vuex);

import  service from './modules/service'
import solicitudes from './modules/solicitudes'
import asignaciones from './modules/asignaciones'
import panel1 from './modules/panel1';
import estudiantes from './modules/estudiantes';
import docentes from './modules/docentes'
import carreras from './modules/carreras'
export default new Vuex.Store({

    modules: {
        service,
        solicitudes,
        asignaciones,
        panel1,
        estudiantes,
        docentes,
        carreras
    }
})