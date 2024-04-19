import { UpdateMember } from './common';

/**
 * 
 * @param param0
 * @param value
 * @returns
 */
const Member = ({ commit }, value) => commit('Member', value);

/**
 * 
 * @param param0
 * @param value
 * @returns
 */
const Members = ({ commit }, value) => commit('Members', value);

/**
 * 
 * @param param0
 * @param value
 * @returns
 */
const Update = ({ dispatch, getters }, value) => {
    const result = UpdateMember(value, getters.Members);
    dispatch('Member', value);

    return Promise.resolve(result);
}

export default {
    Member,
    Members,
    Update
}