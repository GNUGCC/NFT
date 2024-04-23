import { Form, Home, Log } from '@/modules/common';
import { StoreManager } from '@/utils/manager';
import { InternalUpdate } from '@/api/account';
import { RouteManager } from '@/utils/manager';
import { type MemberType } from '@/models/member';

/**
 * 
 * @param valid
 * @returns
 */
function Save(valid) {
    if (valid == false) return;

    const { id } = RouteManager.Params;
    const { name, password, account, email, mobile } = Form.value;
    InternalUpdate({ id, name, password, account, email, mobile })
        .then(x => {
            const form = Object.assign({}, Form.value);
            Log('使用者更新資料: ', form, x);
            StoreManager.UpdateMember(form)
                .then(() => {
                    Log('update member: ', StoreManager.Member, StoreManager.Members);
                    alert('更新會員資料成功!');
                    Home();
                });                
        })
        .catch(err => {
            console.log('更新錯誤: ', err);
            alert('更新錯誤');
        });
}

/**
 * 
 * @param member
 * @returns
 */
function Edit(member: MemberType) {
    return `/member/edit/${member.id}`;
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