import { computedAsync } from '@vueuse/core';
import { InternalQueryMyCardPool } from '@/api/point';

const QueryMyCardPool = computedAsync(async () => await queryMyCardPool());

/**
 * 
 */
async function queryMyCardPool() {
    return await InternalQueryMyCardPool();
}

/**
 * 
 */
function AddNewMyCard() {

}

export { Console } from '@/modules/common';
export {
    QueryMyCardPool,
    AddNewMyCard
}