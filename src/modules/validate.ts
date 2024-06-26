import { ref, reactive } from 'vue';
import { FormRules } from 'element-plus';
import { Log } from './common';
import type { MemberType } from '@/models/member';
import type { MyCardPoolType } from '@/models/mycardPool';

const password = ref();

/**
 * 
 * @param rule
 * @param value
 * @param callBack
 */
const ValideteName = (rule, value, callBack) => {
    Log('ValideteName', rule, value, callBack);
    if (value == null || value.length < 1) callBack(new Error('請輸入您的使用者名稱'));
    callBack();
};

/**
 * 
 * @param rule
 * @param value
 * @param callBack
 */
const ValidetePassword = (rule, value, callBack) => {
    Log('ValidetePassword', rule, value, callBack);
    if (value == null || value?.length < 1) callBack(new Error('請輸入您的密碼'));
    password.value = value;
    callBack();
};

/**
 * 
 * @param rule
 * @param value
 * @param callBack
 */
const ValidetePasswords = (rule, value, callBack) => {
    Log('ValidetePasswords', rule, value, callBack);
    if (value == null || value?.length < 1) callBack(new Error('請輸入您的確認密碼'));
    if (value != password.value) callBack(new Error('新密碼必需輸入一致'));
    //if (value != Form.value.password) callBack(new Error('新密碼必需輸入一致'));
    callBack();
};

/**
 * 
 * @param rule
 * @param value
 * @param callBack
 */
const ValideteEMail = (rule, value, callBack) => {
    Log('ValideteEMail', rule, value, callBack);
    if (value == null || value.length < 1) callBack(new Error('請輸入您的電子郵件信箱'));
    callBack();
};

/**
 * 
 * @param rule
 * @param value
 * @param callBack
 */
const ValideteMobile = (rule, value, callBack) => {
    Log('ValideteMobile', rule, value, callBack, value);
    if (value == null || value.length < 1) callBack(new Error('請輸入您的電話號碼'));
    callBack();
};

/**
 * 
 */
const ValidateRules = reactive<FormRules<MemberType>>({
    account: [{ validator: ValideteName, trigger: 'blur' }],
    password: [{ validator: ValidetePassword, trigger: 'blur' }],
    passwords: [{ validator: ValidetePasswords, trigger: 'blur' }],
    email: [{ validator: ValideteEMail, trigger: 'blur' }],
    mobile: [{ validator: ValideteMobile, trigger: 'blur' }],
});

/**
 * 
 * @param rule
 * @param value
 * @param callBack
 */
const MyCardSerial = (rule, value, callBack) => {
    Log('MyCardSerial', rule, value, callBack, value);
    if (value == null || value.length < 1) callBack(new Error('請輸入您的 MyCard 序號'));
    callBack();
};

/**
 * 
 * @param rule
 * @param value
 * @param callBack
 */
const MyCardToken = (rule, value, callBack) => {
    Log('MyCardToken', rule, value, callBack, value);
    if (value == null || value.length < 1) callBack(new Error('請輸入您的 MyCard 密鑰'));
    callBack();
};

/**
 *
 */
const ValidateMyCardPoolRules = reactive<FormRules<MyCardPoolType>>({
    serial: [{ validator: MyCardSerial, trigger: 'blur' }],
    token: [{ validator: MyCardToken, trigger: 'blur' }]
});

export {
    ValidateRules,
    ValidateMyCardPoolRules
}