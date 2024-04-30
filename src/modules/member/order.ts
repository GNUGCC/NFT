import { computed } from 'vue';
import { computedAsync } from '@vueuse/core';
import { Home as OrderToHome, Authentication } from '@/modules/common';
import { InternalOrder } from '@/api/point';

const Order = computed(() => '/member/order');
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
 */
function Home() {
    OrderToHome();
}

export {
    Order,
    Orders,
    Home
}