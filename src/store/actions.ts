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
const UpdateMember = ({ commit }, value) => commit('Update', value);

export default {
    Member,
    Members,
    UpdateMember
}