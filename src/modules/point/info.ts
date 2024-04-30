import { computedAsync } from '@vueuse/core';
import { InternalMyCardInfo } from '@/api/point';
import { Home as InfoToHome, Authentication } from '@/modules/common';

const MyCardInfo = computedAsync(async () => loadMyCardInfo());

/**
 * 
 * @returns
 */
async function loadMyCardInfo() {
    const { id } = Authentication();
    return await InternalMyCardInfo({ id });
}

/**
 * 
 * @param member
 * @returns
 */
function Info() {
    return '/point/info';
}

/**
 * 
 */
function Home() {
    InfoToHome();
}

export {
    Info,
    Home,
    MyCardInfo
}