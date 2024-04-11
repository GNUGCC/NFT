import { createStore } from "vuex";
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import type { MemberType } from '@/model/member';

export default createStore({
    state: {
        Member: <MemberType | null>(null)
    },
    getters,
    mutations,
    actions
});
