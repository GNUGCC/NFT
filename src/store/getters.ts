import { QueryMember } from './common';
import { type MemberType } from '@/models/member';

/**
 * 
 * @param state
 * @returns
 */
const Member = state => {
    console.log('read member: ', state , state.Member);
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

/**
 * 
 * @param state
 * @returns
 */
const ReadMember = state => id => QueryMember(id, state.Members) || null;

export default {
    Member,
    Members,
    ReadMember
}