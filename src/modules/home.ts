import { computed } from 'vue';
import { InternalLogin } from '@/api/account';
import { StoreManager, MessageBoxManager } from '@/utils/manager';
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
                Log('使用者登入: ', Form, x);
                LoginMember({
                    id: name,
                    name,
                    password,
                    data: x
                });
                LogPopup('登入成功', 'success');
            })
            .catch(err => {
                MessageBoxManager.Confirm(
                    '目前測試階段，系統將自動以訪客身份登入，您確定嗎？',
                    'warning'
                )
                    .then(() => {
                        LoginMember({
                            id: name,
                            name,
                            password
                        });
                    })
                    .catch(() => {
                        Log('登入錯誤: ', err);                        
                    });                               

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