import { computed } from 'vue';
import { InternalLogin, InternalQueryMember } from '@/api/account';
import { FormRef, Log, LogPopup, PrepareUserPassword } from './common';
import { Env, ContextManager, StoreManager, MessageBoxManager } from '@/utils';

const Member = computed(() => StoreManager.Member);
const Authentication = computed(() => StoreManager.Authentication);

/**
 * 
 */
function Login(useraccount: string, userpassword: string) {
    FormRef.value?.validate(valid => {
        if (valid == false) return;

        const { account, password } = PrepareUserPassword({ useraccount, userpassword });
        InternalLogin({ account, password })
            .then(x => {
                const data = x as any;
                return InternalQueryMember({ id: data.member_id });
            })
            .then(x => LoginAndPopup(x))
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
function LoginAndPopup(value) {
    LoginMember(value);

    Log('使用者登入: ', value);
    LogPopup('登入成功', 'success');
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