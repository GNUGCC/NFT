import { InternalRegister } from '@/api/account';
import {
    Form,
    FormRef,
    Home
} from './common';

const Register = ctx => {
    FormRef.value?.validate(valid => {
        if (valid == false) return;

        const { name, password } = Form;
        InternalRegister(name, password)
            .then(x => {
                const { store } = ctx;
                console.log('使用者註冊: ', Form, x);
                store.dispatch('Member', {
                    name,
                    password,
                    data: x
                }).then(() => Home(ctx));
            })
            .catch(err => {
                console.log('登入錯誤: ', err);
            });
    });
};

export {
    Register,    
    Home,
    Form,
    FormRef
}