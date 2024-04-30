import { computedAsync } from '@vueuse/core';
import { Home as OrderToHome, Authentication } from '@/modules/common';
import { InternalOrder } from '@/api/point';

const Orders = computedAsync(async () => loadOrder());

/**
 * 
 * @returns
 */
async function loadOrder() {
    const { id } = Authentication();
    return await InternalOrder({ id });
}

/**
 * 
 * @param member
 * @returns
 */
function Order() {
    return '/member/order';
}

/**
 * 
 */
function Home() {
    OrderToHome();
}

export {
    Order,
    Orders,
    Home
}