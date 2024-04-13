import { InternalRegister } from '@/api/account';
import {
    Form,
    FormRef,
    Home
} from './common';

const Register = ctx => {
    FormRef.value?.validate(valid => {
        if (valid == false) return;

        const { name, password, email, mobile } = Form;
        InternalRegister({ name, password, email, mobile })
            .then(x => {
                const { store } = ctx;
                console.log('使用者註冊: ', Form, x);
                store.dispatch('Member', {
                    name,
                    password,
                    data: x
                }).then(() => {
                    alert('新增會員成功!');
                    Home(ctx);
                });
            })
            .catch(err => {
                console.log('註冊錯誤: ', err);
                alert('註冊錯誤');
            });
    });
};

export {
    Register,    
    Home,
    Form,
    FormRef
}