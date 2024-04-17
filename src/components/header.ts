import { LoginOut } from '@/modules/common';
import { MemberType } from '@/models/member';

/**
 * 
 * @param member
 * @returns
 */
function Update(member: MemberType) {
    return `/edit/${member.id}`;
}

/**
 * 
 * @param member
 */
function LogOut(member: MemberType) {
    LoginOut();
}

export {
    Update,
    LogOut
}