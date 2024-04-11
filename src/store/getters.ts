import type { MemberType } from '@/model/member';

/**
 * 
 * @param state
 * @returns
 */
const Member = state => {
    return state.Member;
}

/**
 * 
 * @param state
 * @returns
 */
const Members: (state) => readonly MemberType[] = state => {
    return state.Members
}

/**
 * 
 * @param id
 * @param members
 * @returns
 */
export function QueryMember(id: string, members: readonly MemberType[]) {
    const index = members.findIndex(x => x.id == id);
    if (index < 0) return false;
    return {
        index,
        result: members[index]
    };
}

export default {
    Member,
    Members
}