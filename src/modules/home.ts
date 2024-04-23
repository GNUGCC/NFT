import { computed } from 'vue';
import { InternalLogin } from '@/api/account';
import { Env, ContextManager, StoreManager, MessageBoxManager } from '@/utils';
import ValidateRules from './validate';
import { Form, FormRef, Log, Register, Logout, LogPopup, DevErrorMesage } from './common';

const Member = computed(() => StoreManager.Member);
const Authentication = computed(() => StoreManager.Authentication);

/**
 * 
 * @param param0
 */
function LoginMember(value) {
    StoreManager.Authentication = value;
}

/**
 * 
 */
function Login() {
    FormRef.value?.validate(valid => {
        if (valid == false) return;

        const { name, password } = Form.value;
        InternalLogin({ name, password })
            .then(x => {
                LoginMember({
                    name,
                    password,
                    data: x
                });

                Log('使用者登入: ', Form, x);
                LogPopup('登入成功', 'success');
            })
            .catch(err => {
                if (ContextManager.Process == Env.Development) {
                    MessageBoxManager.Confirm('目前測試階段，系統將自動以訪客身份登入，您確定嗎？', 'warning', '使用者登入失敗')
                        .then(() => {
                            LoginMember({
                                id: name,
                                name,
                                password
                            });
                        })
                        .catch(() => {
                            Log('測試階段登入錯誤: ', err);
                        });
                }

                LogPopup(err, 'error');
            });
    });
}

export {
    Login,
    Logout,
    Member,
    Authentication,
    Register,
    Form,
    FormRef,
    ValidateRules
}