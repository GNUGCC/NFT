import { ref } from 'vue';
import { computedAsync } from '@vueuse/core';
import { InternalQueryMyCardPool } from '@/api/point';
import { FormInstance } from 'element-plus';

const FormRef = ref<FormInstance>();
const Form = ref({});
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
    AddNewMyCard();
}

export { ValidateRules } from '@/modules/validate';
export { Console } from '@/modules/common';
export {
    FormRef,
    Form,
    QueryMyCardPool,
    AddNewMyCard
}