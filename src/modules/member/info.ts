import { type MemberType } from '@/models/member';

/**
 * 
 * @param member
 * @returns
 */
function Info(member: MemberType) {
    return `/member/info/${member.id}`;
}

export {
    Info
}