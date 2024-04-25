import { computedAsync } from '@vueuse/core';
import { RouteManager } from '@/utils';
import { InternalMyCardInfo } from '@/api/point';
import type { MemberType } from '@/models/member';

const MyCardInfo = computedAsync(async () => loadMyCardInfo());

/**
 * 
 * @returns
 */
async function loadMyCardInfo() {
    const { id } = RouteManager.Params;
    return await InternalMyCardInfo({ id });
}

/**
 * 
 * @param member
 * @returns
 */
function Info(member: MemberType) {
    return `/point/info/${member.id}`;
}

export {
    Info,
    MyCardInfo
}