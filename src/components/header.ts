import { Log, LoginOut } from '@/modules/common';
import { type MemberType } from '@/models/member';

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

function AddNFT(member: MemberType) {
    Log('加購 NFT');
}

function AddMyCard(member: MemberType) {
    Log('加購 MyCard');
}

export {
    Update,
    LogOut,
    AddNFT,
    AddMyCard
}