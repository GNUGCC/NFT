import { ref } from 'vue';
import { FormInstance } from 'element-plus';
import { computedAsync } from '@vueuse/core';
import { Log } from '@/modules/common';
import { MessageBoxManager } from '@/utils';
import { ShowStatusMessage } from '@/modules/common';
import { InternalQueryMyCardPool, InternalAddMyCard } from '@/api/point';
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
    FormRef.value?.validate(async valid => {
        Log('AddNewMyCard result: ', valid, Form.value);
        if (valid == false) return;

        const { serial, token } = Form.value;
        await apiToAddMyCard({ serial, token });
    });
}

/**
 * 
 */
async function apiToAddMyCard({ serial, token }) {
    const { result } = await InternalAddMyCard({ serial, token });
    Log('apiToAddMyCard result: ', result);

    ShowStatusMessage(result, `增加 MyCard 序號 「 ${serial}」`);
}

export { Console } from '@/modules/common';
export { ValidateMyCardPoolRules } from '@/modules/validate';
export {
    FormRef,
    Form,
    QueryMyCardPool,
    AddNewMyCard
}