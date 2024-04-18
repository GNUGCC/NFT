import { computed } from 'vue';
import { InternalLogin } from '@/api/account';
import ValidateRules from './validate';
import { StoreManager } from '@/utils/manager';
import { Form, FormRef, Log, Register, Logout } from './common';

const Member = computed(() => StoreManager.Member);
const Authentication = computed(() => StoreManager.Authentication);

LoginMember({ id: 'test', name: '測試資料', email: 'test@yahoo.com', mobile: '12345' });

/**
 * 
 * @param param0
 */
function LoginMember(value) {
    StoreManager.Member = value;
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
            })
            .catch(err => {
                console.log('登入錯誤: ', err);
                alert(err);
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