import { computed } from 'vue';
import { computedAsync } from '@vueuse/core';
import { InternalNFTPoint } from '@/api/point';
import { MyCardInfo } from '@/modules/point/info';
import { Log, Home, Authentication } from '@/modules/common';
import type { NftDetailType } from '@/models/nftDetail';

const AddNFT = computed(() => '/point/nft/add');
const QueryNFT = computed(() => '/point/nft/query');
const QueryNFTPoint = computedAsync(async () => await queryNft());

/**
 * 
 */
async function queryNft() {
    const result = await MyCardInfo.value.map(async ({ id }) => await InternalNFTPoint({ myCardId: id }));
    const data = await result.map(async x => await x);

    Log('query: ', result, data);
    const detail = (await Promise.all(result)).flat();
    return detail.length > 0 && detail;
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