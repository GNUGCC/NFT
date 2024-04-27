import { InternalRegister } from '@/api/account';
import { Env, MessageBoxManager, ContextManager, StoreManager } from '@/utils';
import { Home, Log, LogPopup, PrepareUserPassword } from '@/modules/common';
import type { MemberType } from '@/models/member';

/**
 * 
 * @param valid
 * @param fields
 * @returns
 */
function Save(valid, fields: MemberType) {
    if (valid == false) return;

    Log('註冊', fields);
    const { account, password } = PrepareUserPassword({ useraccount: fields.account, userpassword: fields.password });
    return apiToRegister({ name: fields.name, account, password, email: fields.email, mobile: fields.mobile });   
}

/**
 * 
 * @param param0
 */
function apiToRegister({ name, account, password, email, mobile }) {
    const result = { name, account, password, email, mobile };
    InternalRegister({ ...result })
        .then(data => addMember({ ...result }, data))
        .catch(err => registerErrorMessage(err));
}

/**
 * 
 * @param result
 * @param data
 */
function addMember(result, data) {
    Log('使用者註冊: ', { ...result }, data);
    StoreManager.AddMember({ ...result })
        .then(() => {
            Log('新增會員: ', StoreManager.Member, StoreManager.Members);
            LogPopup('新增會員成功!', 'success');
            Home();
        });
}

/**
 * 
 */
function registerErrorMessage(err) {
    if (ContextManager.Process == Env.Development) {
        MessageBoxManager.Alert('目前為測試階段，後端註冊產生錯誤!', 'error', '檢查後端');
    }

    Log('註冊錯誤: ', err);
    LogPopup(err, 'error');
}

function Cancel() {
    Home();
}

export {
    Save,
    Cancel
}