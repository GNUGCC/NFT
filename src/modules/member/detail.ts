import { type MemberType } from '@/models/member';

/**
 * 
 * @param member
 * @returns
 */
function Order(member: MemberType) {
    return `/member/order/${member.id}`;
}

export {
    Order
}