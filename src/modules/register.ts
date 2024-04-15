import { InternalRegister } from '@/api/account';
import { Form, Home } from './common';

const Save = ({ _, router, store }, valid) => {
    if (valid == false) return;

    const { name, password, email, mobile } = Form.value;
    InternalRegister({ name, password, email, mobile })
        .then(x => {
            console.log('使用者註冊: ', Form, x);
            store.dispatch('Member', {
                name,
                password,
                data: x
            }).then(() => {
                alert('新增會員成功!');
                Home({ router, store });
            });
        })
        .catch(err => {
            console.log('註冊錯誤: ', err);
            alert('註冊錯誤');
        });
}

const Cancel = ({ _, router, store }, valid) => Home({ router, store });

export {
    Save,
    Cancel
}