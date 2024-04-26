import { ref } from 'vue';
import { computedAsync } from '@vueuse/core';
import { Log, Home } from '@/modules/common';
import { MessageBoxManager } from '@/utils';
import { InternalMyCardSelectItem, InternalPay } from '@/api/point';

const Select = ref();
const SelectMyCardItem = computedAsync(async () => await InternalMyCardSelectItem());

/**
 * 
 * @param member
 * @param point
 */
function Order(select) {
    Log('Save 加購 MyCard: ', select);
    MessageBoxManager.MsgBox('系統即將送出訂單，您是否確定？', 'warning', (action, instance, done) => {
        if (action == 'confirm') {
            Log('送出訂單成立', action, instance, done);
            instance.showCancelButton = false;
            instance.dangerouslyUseHTMLString = true;
            instance.confirmButtonLoading = true;
            instance.type = 'info';
            instance.message = '<h5 style="font-weight: bolder; color: red;">請稍候，訂單送出中</h1>';
            instance.confirmButtonText = '請稍候...';
            InternalPay()
                .then(x => {
                    if (x.errcode == 0) {
                        setTimeout(() => {
                            Log('訂單成立', action, instance, done);
                            done();
                        }, 5000);
                    }
                    else {
                        done();
                        Log('訂單送出錯誤');
                        MessageBoxManager.Alert('訂單送出錯誤，請重新再試一次。', 'error').catch(x => { /* eslint-disable */ });
                    }
                })
                .catch(err => {
                    Log('無法送出訂單: ', err);
                });
        }
        else {
            Log('使用者選擇取消');
            done();
        }
    })
        .then(x => {
            Log('訂單成立', x);
            MessageBoxManager.Alert('訂單已建立成功，謝謝您的訂購。', 'success').catch(() => { /* eslint-disable */ });
            Home();
        })
        .catch(x => {
            Log('使用者取消: ', x);
        })
        .finally(() => Select.value = null);
}  

/**
 * 
 * @param member
 */
function Cancel(member) {
    Log('Cancel 加購 MyCard: ', member);
    Home();
}

/**
 * 
 * @param member
 * @returns
 */
function AddMyCard(member) {
    Log('加購 MyCard');
    return `/point/mycard/add/${member.id}`;
}

export {    
    Order,
    Cancel,
    Select,
    AddMyCard,
    SelectMyCardItem
}