import {  computed } from 'vue';
import { InternalUpdate } from '@/api/account';
import { PerformanceMember } from '@/store/common';
import { Home, Log, LogPopup, LoadData, PrepareUserPassword } from '@/modules/common';
import { Env, ContextManager, RouteManager, StoreManager, MessageBoxManager } from '@/utils';
import type { MemberType } from '@/models/member';

const Data = computed(() => prepareData());

/**
 * 
 * @param valid
 * @returns
 */
function Save(valid, fields: MemberType) {
    if (valid == false) return;

    Log('save edit', valid, fields);
    return apiToUpdate(fields);
}

/**
 * 
 * @param param0
 */
function apiToUpdate(value: MemberType) {
    const result = PerformanceMember(value)!;
    InternalUpdate(result)
        .then(() => updateMember(result))
        .catch(err => updateErrorMessage(err));
}

/**
 * 
 * @param value
 */
function updateMember(value: MemberType) {
    Log('使用者更新資料: ', value);
    StoreManager.UpdateMember(value)
        .then(() => {
            Log('update member: ', StoreManager.Member, StoreManager.Members);
            LogPopup('更新會員資料成功!', 'success');
            Home();
        });
}

/**
 * 
 * @param error
 */
function updateErrorMessage(error) {
    if (ContextManager.Process == Env.Development) {
        MessageBoxManager.Alert('目前為測試階段，後端修改會員資料產生錯誤!', 'error', '檢查後端');
    }

    Log('更新錯誤: ', error);
    LogPopup(error, 'error');
}

/**
 * 
 * @returns
 */
function prepareData() {
    const auth = Object.assign({}, StoreManager.Authentication);
    auth.password = auth.passwords = null;
    Log('prepareData: ', auth);
    return auth;
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
    Data,
    Save,
    Edit,
    Cancel
}