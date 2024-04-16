import { reactive } from 'vue';
import { FormRules } from 'element-plus';
import { type MemberType } from '@/models/member';

const ValideteName = (rule, value, callBack) => {
    console.log('ValideteName', rule, value, callBack);
    if (value == null || value.length < 1) callBack(new Error('請輸入您的使用者名稱'));
    callBack();
};

const ValidetePassword = (rule, value, callBack) => {
    console.log('ValideteName', rule, value, callBack);
    if (value == null || value.length < 1) callBack(new Error('請輸入您的密碼'));
    callBack();
};

const ValidetePasswords = (rule, value, callBack) => {
    console.log('ValideteName', rule, value, callBack);
    if (value == null || value.length < 1) callBack(new Error('請輸入您的確認密碼'));
    callBack();
};

const ValideteEMail = (rule, value, callBack) => {
    console.log('ValideteEMail', rule, value, callBack);
    if (value == null || value.length < 1) callBack(new Error('請輸入您的電子郵件信箱'));
    callBack();
};

const ValideteMobile = (rule, value, callBack) => {
    console.log('ValideteMobile', rule, value, callBack, value);
    if (value == null || value.length < 1) callBack(new Error('請輸入您的電話號碼'));
    callBack();
};

const ValidateRules = reactive<FormRules<MemberType>>({
    name: [{ validator: ValideteName, trigger: 'blur' }],
    password: [{ validator: ValidetePassword, trigger: 'blur' }],
    passwords: [{ validator: ValidetePasswords, trigger: 'blur' }],
    email: [{ validator: ValideteEMail, trigger: 'blur' }],
    mobile: [{ validator: ValideteMobile, trigger: 'blur' }],
});

export default ValidateRules;