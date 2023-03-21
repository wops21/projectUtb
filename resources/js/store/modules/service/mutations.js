import * as mutations from '../../mutation-types'
import * as auth from '../../../services/auth_service'
export default {

        [mutations.SET_AUTHENTICATION](state, payload) {
            state.isLoggedIn = auth.isLoggedIn();
            if (state.isLoggedIn) {
                state.profile = payload;
            } else {
                state.profile = {};
            }
        },

}