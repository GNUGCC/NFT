import { createStore } from "vuex";

export default createStore({
    state: {
        User: {
            id: '',
            name: '',
            token: ''
        }
    },
    getters: {
        'User': state => state.User
    },
    mutations: {
        'User': (state, value) => state.User = value
    },
    actions: {
        'User': ({ commit }, value) => commit('User', value)
    }
    //modules: {},
});
