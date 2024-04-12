import { reactive } from 'vue';
import { FormRules } from 'element-plus';
import { LoginUser } from '@/modules/register';
import type { MemberType } from '@/model/member';

const ValideteName = (rule, value, callBack) => {
    const { name } = LoginUser.value;
    console.log('ValideteName', rule, value, callBack, name);
    if (name == null || name.length < 1) callBack(new Error('請輸入您的使用者名稱'));
    callBack();
};

const ValidetePassword = (rule, value, callBack) => {
    const { password } = LoginUser.value;
    console.log('ValideteName', rule, value, callBack, password);
    if (password == null || password.length < 1) callBack(new Error('請輸入您的密碼'));
    callBack();
};

const ValidetePasswords = (rule, value, callBack) => {
    const { passwords } = LoginUser.value;
    console.log('ValideteName', rule, value, callBack, passwords);
    if (passwords == null || passwords.length < 1) callBack(new Error('請輸入您的確認密碼'));
    callBack();
};

const ValideteEMail = (rule, value, callBack) => {
    const { email } = LoginUser.value;
    console.log('ValideteEMail', rule, value, callBack, email);
    if (email == null || email.length < 1) callBack(new Error('請輸入您的電子郵件信箱'));
    callBack();
};

const ValideteMobile = (rule, value, callBack) => {
    const { mobile } = LoginUser.value;
    console.log('ValideteMobile', rule, value, callBack, mobile);
    if (mobile == null || mobile.length < 1) callBack(new Error('請輸入您的電話號碼'));
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