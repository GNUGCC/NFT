import { computed } from 'vue';
import { computedAsync } from '@vueuse/core';
import { InternalMyCardInfo } from '@/api/point';
import { Home as InfoToHome, Authentication } from '@/modules/common';

const Info = computed(() => '/point/info');
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
 */
function Home() {
    InfoToHome();
}

export {
    Info,
    Home,
    MyCardInfo
}