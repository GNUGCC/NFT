import { InternalLogin } from '@/api/account';
import ValidateRules from './validate';
import {    
    Form,
    FormRef,
    Home,
    Register,
    LoginOut
} from './common';

//const CheckLogin = computed(() => Member.value == null);
const Login = ({ store }) => {
    FormRef.value?.validate(valid => {
        if (valid == false) return;

        const { name, password } = Form;
        InternalLogin(name, password)
            .then(x => {
                console.log('使用者登入: ', Form, x);
                store.dispatch('Member', {
                    name,
                    password,
                    data: x
                });
            })
            .catch(err => {
                console.log('登入錯誤: ', err);
            });
    });
};

export {
    Login,
    LoginOut,
    //CheckLogin,
    Home,
    Register,
    Form,
    FormRef,
    ValidateRules
}