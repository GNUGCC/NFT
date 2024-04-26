import { PerformanceMember } from '@/store/common';
import { FormRef, Form } from '@/modules/common';
import type { MemberType } from '@/models/member';

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
    (event: 'save', result: boolean, fields: MemberType): void
    (event: 'cancel', result: boolean, fields: MemberType): void
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
    const result = Form.value;
    result.name = result.account;
    FormRef.value?.validate(valid => emit('save', valid, result));
}

/**
 * 
 * @param emit
 */
function Cancel(emit: FieldEmitType) {
    emit('cancel', false, Form.value);
}

export { ValidateRules } from '@/modules/validate';
export {
    Form,
    FormRef,
    InitlaizeData,
    FieldType,
    FieldEmitType,
    Save,
    Cancel
}