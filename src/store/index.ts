import { createStore } from "vuex";
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import { type MemberType, type MemberStore } from '@/models/member';

export default function () {
    return createStore<MemberStore>({
        state: {
            Member: {},
            Members: Array<MemberType>()
        },
        getters,
        mutations,
        actions
    });
}