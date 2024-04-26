import { InternalRegister } from '@/api/account';
import { Env, MessageBoxManager, ContextManager, StoreManager } from '@/utils';
import { Home, Log, LogPopup, PrepareUserPassword } from '@/modules/common';
import type { MemberType } from '@/models/member';

function Save(valid, fields: MemberType) {
    if (valid == false) return;

    Log('註冊', fields);
    const { account, password } = PrepareUserPassword({ useraccount: fields.account, userpassword: fields.password });
    const result = { name: fields.name, account, password, email: fields.email, mobile: fields.mobile };

    InternalRegister({ ...result })
        .then(x => {
            Log('使用者註冊: ', { ...result }, x);
            StoreManager.AddMember({ ...result })
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