import { createStore } from "vuex";
import type { MemberType } from '@/model/member';

function PerformanceMember(data) {
    if (data == null) return null;
    const result = <MemberType>{
        id: '',
        account: '',
        name: data?.name,
        password: data?.password,
        mobile: '',
        email: '',
        build_time: '',
        parent: -1,
        token: data?.message
    };

    console.log('PerformanceMember: ', data, result);
    return <MemberType>{
        id: '',
        account: '',
        name: data?.name,
        password: data?.password,
        mobile: '',
        email: '',
        build_time: '',
        parent: -1,
        token: data?.message
    };
}

export default createStore({
    state: {
        Member: <MemberType | null>(null)
    },
    getters: {
        Member: state => state.Member
    },
    mutations: {
        Member: (state, value) => state.Member = PerformanceMember(value)
    },
    actions: {
        Member: ({ commit }, value) => commit('Member', value)
    }
    //modules: {},
});
