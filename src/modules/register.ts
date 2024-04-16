import { InternalRegister } from '@/api/account';
import { StoreManager } from '@/utils/manager';
import { Form, Home, Log } from './common';

function Save(valid) {
    if (valid == false) return;

    const { name, password, email, mobile } = Form.value;
    InternalRegister({ name, password, email, mobile })
        .then(x => {
            Log('使用者註冊: ', Form, x);
            StoreManager.AddMember({ name, password, email, mobile })
                .then(() => {
                    Log('新增會員: ', StoreManager.Member,  StoreManager.Members);
                    alert('新增會員成功!');
                    Home();
                });
        })
        .catch(err => {
            console.log('註冊錯誤: ', err);
            alert('註冊錯誤');
        });
}

function Cancel() {
    Home();
}

export {
    Save,
    Cancel
}