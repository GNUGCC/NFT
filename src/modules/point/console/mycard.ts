import { computedAsync } from '@vueuse/core';
import { InternalQueryMyCardPool } from '@/api/point';
import type { MyCardPoolType } from '@/models/mycardPool';

const QueryMyCardPool = computedAsync(async () => await queryMyCardPool());

/**
 * 
 */
async function queryMyCardPool() {
    const result = await InternalQueryMyCardPool();
    return result.map(x => prepareQueryMyCard(x));
}

/**
 * 
 * @param result
 * @returns
 */
function prepareQueryMyCard(result: MyCardPoolType) {
    const data = { ...result };
    data.status = result.valid == true ? '有效' : '無效';
    return data;
}

export { Console } from '@/modules/common';
export {
    QueryMyCardPool
}