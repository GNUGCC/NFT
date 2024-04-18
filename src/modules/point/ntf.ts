import { Log } from '@/modules/common';

function AddNTF(member) {
    Log('加購 NFT');    
    return `/point/ntf/add/${member.id}`;
}

/**
 * 
 * @param member
 * @param point
 */
function Save(member, value) {
    const { point } = value;
    Log('Save 加購 NFT: ', point);
}

/**
 * 
 * @param member
 */
function Cancel(member) {
    Log('Cancel 加購 NFT');
}

export {
    AddNTF,
    Save,
    Cancel
}