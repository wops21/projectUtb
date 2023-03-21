import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
    isLoggedIn: null,
    apiURL: 'http://localhost:8000/api',
        serverPath: 'http://localhost:8000',
        profile: {},
        isLoggedIn: null,
}

export default {
    state,
    mutations,
    actions,
    getters
}