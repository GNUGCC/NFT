import { createStore } from "vuex";

type UserType = {
    id: string,
    name: string,
    token: string
};

export default createStore({
    state: {
        User: <UserType | null>(null)
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
