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

export default {
    Member,
    Members
}