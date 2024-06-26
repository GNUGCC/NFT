import { computed } from 'vue';
import { computedAsync } from '@vueuse/core';
import { InternalNFTPoint } from '@/api/point';
import { MyCardInfo } from '@/modules/point/info';
import { Log, Home, Order } from '@/modules/common';
import type { NftDetailType } from '@/models/nftDetail';

const AddNFT = computed(() => '/point/nft/add');
const QueryNFT = computed(() => '/point/nft/query');
const QueryNFTPoint = computedAsync(async () => await queryNft());
const QueryMyCardForNft = computedAsync(async () => await queryMyCardForNft());

/**
 * 
 * @param member
 * @param point
 */
function OrderNFT(select) {
    return Order('NFT', select, QueryMyCardForNft.value);
}

/**
 * 
 */
async function queryMyCardForNft() {
    return (await MyCardInfo.value).map(x => {
        return {
            id: x.id,
            points: x.mycard_point,
            content: x.mycard_data
        };
    });
}

/**
 * 
 */
async function queryNft() {
    const result = await MyCardInfo.value.map(async ({ id }) => await InternalNFTPoint({ myCardId: id }));
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
    OrderNFT,
    MyCardInfo,
    QueryNFTPoint,
    QueryMyCardForNft,
    Save,
    Cancel
}