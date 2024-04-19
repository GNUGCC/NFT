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
    (event: 'save', result: boolean): void
    (event: 'cancel', result: boolean): void
}

/**
 * 
 * @param data
 * @returns
 */
function InitlaizeData(props) {
    Form.value = PerformanceMember(props.data)!;
}

/**
 * 
 * @param emit
 */
function Save(emit: FieldEmitType) {
    FormRef.value?.validate(valid => emit('save', valid));
}

/**
 * 
 * @param emit
 */
function Cancel(emit: FieldEmitType) {
    emit('cancel', false);
}

export {
    Form,
    FormRef,
    ValidateRules,
    InitlaizeData,
    FieldType,
    FieldEmitType,
    Save,
    Cancel
}