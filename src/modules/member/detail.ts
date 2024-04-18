import { type MemberType } from '@/models/member';

/**
 * 
 * @param member
 * @returns
 */
function Detail(member: MemberType) {
    return `/member/detail/${member.id}`;
}

export {
    Detail
}