import type { MemberType } from '@/model/member';

/**
 * 
 * @param state
 * @returns
 */
const Member = state => {
    const member = Object.assign({}, state.Member == null || state.Member);
    if (Object.getOwnPropertyNames(member).length < 1) return null;
    return member;
}

/**
 * 
 * @param state
 * @returns
 */
const Members: (state) => readonly MemberType[] = state => state.Members;

export default {
    Member,
    Members
}