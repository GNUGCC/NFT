import { PerformanceMember } from '@/store/common';
import { FormRef, Form } from '@/modules/common';
import ValidateRules from '@/modules/validate';

/**
 * 
 */
type FieldType = {
    fieldTitle?: string,
    data: any
};

/**
 * 
 */
type FieldEmitType = {
    (event: 'save', { instance, router, store }, result: boolean): void
    (event: 'cancel', { instance, router, store }, result: boolean): void
}

/**
 * 
 * @param data
 * @returns
 */
function NormalizeData(data) {
    Form.value = PerformanceMember(data)!;
}

/**
 * 
 * @param emit
 */
function Save({ instance, router, store }, emit: FieldEmitType) {
    FormRef.value?.validate(valid => emit('save', { instance, router, store }, valid));
}

/**
 * 
 * @param emit
 */
function Cancel({ instance, router, store }, emit: FieldEmitType) {
    emit('cancel', { instance, router, store }, false);
}

export {
    Form,
    FormRef,
    ValidateRules,
    NormalizeData,
    FieldType,
    FieldEmitType,
    Save,
    Cancel
}