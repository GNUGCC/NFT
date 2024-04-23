import { InternalRegister } from '@/api/account';
import { Env, MessageBoxManager, ContextManager, StoreManager } from '@/utils';
import { Form, Home, Log, LogPopup } from '@/modules/common';

function Save(valid) {
    if (valid == false) return;

    const { name, password, email, mobile } = Form.value;
    InternalRegister({ name, password, email, mobile })
        .then(x => {
            Log('使用者註冊: ', Form, x);
            StoreManager.AddMember({ name, password, email, mobile })
                .then(() => {
                    Log('新增會員: ', StoreManager.Member,  StoreManager.Members);
                    LogPopup('新增會員成功!', 'success');
                    Home();
                });
        })
        .catch(err => {
            if (ContextManager.Process == Env.Development) {
                MessageBoxManager.Alert('目前為測試階段，後端註冊產生錯誤!', 'error', '檢查後端');
            }

            Log('註冊錯誤: ', err);
            LogPopup(err, 'error');            
        });
}

function Cancel() {
    Home();
}

export {
    Save,
    Cancel
}