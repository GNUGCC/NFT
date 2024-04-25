import { createStore } from "vuex";
import actions from './actions';
import mutations from './mutations';
import getters from './getters';
import plugins from './plugins';
import type { MemberStore } from '@/models/memberStore';

export default function () {
    return createStore({
        state: <MemberStore>{},
        getters,
        mutations,
        actions,
        plugins
    });
}