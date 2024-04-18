import { Log } from '@/modules/common';

function AddNTF(member) {
    Log('加購 NFT');
    return `/ntf/add/${member.id}`;
}

export {
    AddNTF
}