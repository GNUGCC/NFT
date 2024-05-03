import { computed } from 'vue';
import { computedAsync } from '@vueuse/core';
import { InternalNFTPoint } from '@/api/point';
import { Log, Home, Authentication } from '@/modules/common';

const AddNFT = computed(() => '/point/nft/add');
const QueryNFT = computed(() => '/point/nft/query');
const QueryNFTPoint = computedAsync(async () => await queryNft());

/**
 * 
 */
async function queryNft() {
    return await InternalNFTPoint();
}

/**
 * 
 * @param member
 * @param point
 */
function Save(value) {
    const { point } = value;
    Log('Save 加購 NFT: ', point);
    Home();
}

/**
 * 
 * @param member
 */
function Cancel() {
    Log('Cancel 加購 NFT');
    Home();
}

export {
    AddNFT,
    QueryNFT,
    QueryNFTPoint,
    Save,
    Cancel
}