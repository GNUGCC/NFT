import { Log, Home, Authentication } from '@/modules/common';

function AddNTF() {
    Log('加購 NFT');    
    return '/point/ntf/add';
}

/**
 * 
 * @param member
 * @param point
 */
function Save(member, value) {
    const { point } = value;
    Log('Save 加購 NFT: ', point);
    Home();
}

/**
 * 
 * @param member
 */
function Cancel(member) {
    Log('Cancel 加購 NFT');
    Home();
}

export {
    AddNTF,
    Save,
    Cancel
}