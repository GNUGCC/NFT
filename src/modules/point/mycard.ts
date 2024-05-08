import { ref, computed } from 'vue';
import { computedAsync } from '@vueuse/core';
import { Log, Home, Order } from '@/modules/common';
import { InternalMyCardSelectItem } from '@/api/point';

const AddMyCard = computed(() => '/point/mycard/add');
const SelectMyCardItem = computedAsync(async () => await prepareSelectItem());

/**
 * 
 * @param items
 * @returns
 */
async function prepareSelectItem() {
    try {
        const result = await InternalMyCardSelectItem();
        return Array.isArray(result) && result.length > 0 && result;
    }
    catch {
        return false;
    }
}

/**
 * 
 * @param select
 * @returns
 */
function OrderMyCard(select) {
    return Order('MyCard', select, SelectMyCardItem.value);
}

/**
 * 
 * @param member
 */
function Cancel() {
    Log('Cancel 加購 MyCard');
    Home();
}

export { Home } from '@/modules/common';
export {        
    Cancel,
    Order,    
    AddMyCard,
    OrderMyCard,
    SelectMyCardItem
}