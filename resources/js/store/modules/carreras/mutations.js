import * as mutations from '../../mutation-types'

export default {
    [mutations.SET_CARRERAS](state, payload){
            
        state.carreras = payload
    },
    [mutations.SET_ALL_CARRERAS](state, payload){
            
        state.allCarreras = payload
    }
}