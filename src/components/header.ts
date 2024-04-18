import { Log } from '@/modules/common';
import { type MemberType } from '@/models/member';

function AddNFT(member: MemberType) {
    Log('加購 NFT');
}

function AddMyCard(member: MemberType) {
    Log('加購 MyCard');
}

export {
    AddNFT,
    AddMyCard
}