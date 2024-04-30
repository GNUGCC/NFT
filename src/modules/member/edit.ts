import { Form, Home, Log, LogPopup } from '@/modules/common';
import { InternalUpdate } from '@/api/account';
import { sha512 } from 'js-sha512';
import type { MemberType } from '@/models/member';
import {
    Env,
    ContextManager,
    RouteManager,
    StoreManager,
    MessageBoxManager
} from '@/utils';

/**
 * 
 * @param valid
 * @returns
 */
function Save(valid) {
    if (valid == false) return;

    const { id } = RouteManager.Params;
    const { name, password, account, email, mobile } = Form.value;
    InternalUpdate({ id, name, password: sha512(password!), account, email, mobile })
        .then(x => {
            const form = Object.assign({}, Form.value);
            Log('使用者更新資料: ', form, x);
            StoreManager.UpdateMember(form)
                .then(() => {
                    Log('update member: ', StoreManager.Member, StoreManager.Members);
                    LogPopup('更新會員資料成功!', 'success');
                    Home();
                });                
        })
        .catch(err => {
            if (ContextManager.Process == Env.Development) {
                MessageBoxManager.Alert('目前為測試階段，後端修改會員資料產生錯誤!', 'error', '檢查後端');
            }

            Log('更新錯誤: ', err);
            LogPopup(err, 'error');
        });
}

/**
 * 
 * @param member
 * @returns
 */
function Edit() {
    return '/member/edit';
}

/**
 * 
 */
function Cancel() {
    Home();
}

export {
    Save,
    Edit,
    Cancel
}