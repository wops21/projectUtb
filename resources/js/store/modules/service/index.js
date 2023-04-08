import actions from './actions';
import getters from './getters';
import mutations from './mutations';

const state = {
    isLoggedIn: null,
    apiURL: 'https://infoutb.fun/',
        serverPath: 'https://infoutb.fun/',
        profile: {},
        isLoggedIn: null,
}

export default {
    state,
    mutations,
    actions,
    getters
}