import { computed } from 'vue';
import { InternalLogin } from '@/api/account';
import ValidateRules from './validate';
import { StoreManager } from '@/utils/manager';
import { Form, FormRef, Log, Register, LoginOut } from './common';

const Member = computed(() => StoreManager.Member);
const Authentication = computed(() => StoreManager.Authentication);

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
                StoreManager.Member = {
                    name,
                    password,
                    data: x
                };
            })
            .catch(err => {
                console.log('登入錯誤: ', err);
                alert(err);
            });
    });
}

export {
    Login,
    LoginOut,
    Member,
    Authentication,
    Register,
    Form,
    FormRef,
    ValidateRules
}