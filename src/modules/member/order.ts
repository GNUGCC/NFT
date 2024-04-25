import { computedAsync } from '@vueuse/core';
import { RouteManager } from '@/utils';
import { InternalOrder } from '@/api/point';
import type { MemberType } from '@/models/member';

const Orders = computedAsync(async () => loadOrder());

/**
 * 
 * @returns
 */
async function loadOrder() {
    const { id } = RouteManager.Params;
    return await InternalOrder({ id });
}

/**
 * 
 * @param member
 * @returns
 */
function Order(member: MemberType) {
    return `/member/order/${member.id}`;
}

export {
    Order,
    Orders
}