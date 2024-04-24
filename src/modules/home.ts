import { computed } from 'vue';
import { sha512 } from 'js-sha512';
import { InternalLogin } from '@/api/account';
import { FormRef, Log, LogPopup } from './common';
import { Env, ContextManager, StoreManager, MessageBoxManager } from '@/utils';

const Member = computed(() => StoreManager.Member);
const Authentication = computed(() => StoreManager.Authentication);

/**
 * 
 */
function Login(useraccount: string, userpassword: string) {
    FormRef.value?.validate(valid => {
        if (valid == false) return;

        const { account, password } = prepareUserPassword({ useraccount, userpassword });
        InternalLogin({ account, password })
            .then(x => LoginAndPopup({ account, password, data: x }))
            .catch(err => CheckGuest({ account, password, err }));
    });
}

/**
 * 
 * @param param0
 */
function LoginMember(value) {
    StoreManager.Authentication = value;
}

/**
 * 
 * @param param0
 */
function LoginAndPopup({ account, password, data }) {
    LoginMember({
        account,
        password,
        data
    });

    Log('使用者登入: ', account, data);
    LogPopup('登入成功', 'success');
}

/**
 * 
 * @returns
 */
function prepareUserPassword({ useraccount, userpassword }) {
    return { account: useraccount, password: sha512(userpassword!) };
}

/**
 * 
 * @param param0
 */
function CheckGuest({ account, password, err }) {
    if (ContextManager.Process == Env.Development) {
        MessageBoxManager.Confirm('目前測試階段，系統將自動以訪客身份登入，您確定嗎？', 'warning', '使用者登入失敗')
            .then(() => {
                LoginAndPopup({
                    account,
                    password,
                    data: {
                        guest: true
                    }
                });
            })
            .catch(() => {
                Log('測試階段登入錯誤: ', err);
            });
    }    

    LogPopup(err, 'error')
}

export { ValidateRules } from './validate';
export { Form, Register, Logout } from './common';
export {
    Login,
    Member,
    Authentication,
    FormRef
}