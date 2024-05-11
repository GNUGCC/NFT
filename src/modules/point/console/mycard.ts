import { ref } from 'vue';
import { FormInstance } from 'element-plus';
import { computedAsync } from '@vueuse/core';
import { Log } from '@/modules/common';
import { InternalQueryMyCardPool } from '@/api/point';
import type { MyCardPoolType } from '@/models/mycardPool';

const FormRef = ref<FormInstance>();
const Form = ref<MyCardPoolType>({});
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
    FormRef.value?.validate(result => {
        Log('AddNewMyCard result: ',  result, Form.value);
    });
}

export { Console } from '@/modules/common';
export { ValidateMyCardPoolRules } from '@/modules/validate';
export {
    FormRef,
    Form,
    QueryMyCardPool,
    AddNewMyCard
}