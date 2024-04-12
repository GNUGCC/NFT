import type { MemberType } from '@/model/member';

/**
 * 
 * @param state
 * @returns
 */
const Member = state => state.Member;

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