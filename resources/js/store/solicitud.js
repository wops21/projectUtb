import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    namespaced: true,
    state:{
        viewSolicitudData: [],
    
    },
    getters: {
   
    },
    mutations: {
        LlenarItems(state,data){
            state.viewSolicitudData = data;
        }
    },
    actions: {
        viewSolicitud(solicitud) {
         //   this.showViewSolicitudDialog();

            viewSolicitudData = { ...solicitud };
            commit('LlenarItems',viewSolicitudData);
        }
    },
    
})