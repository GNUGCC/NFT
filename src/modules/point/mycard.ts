import { ref } from 'vue';
import { computedAsync } from '@vueuse/core';
import { Log, Home } from '@/modules/common';
import { MessageBoxManager } from '@/utils';
import { InternalMyCardSelectItem, InternalPay } from '@/api/point';

const Select = ref();
const SelectMyCardItem = computedAsync(async () => await InternalMyCardSelectItem());

/**
 * 
 * @param select
 * @param instance
 * @param done
 */
function confirm(order, instance, done) {
    Log('送出訂單成立', order);
    SetMessageBoxContent(order, instance);
    InternalPay()
        .then(x => {
            if (x.errcode == 0) {
                setTimeout(() => {
                    Log('訂單成立', order);
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

/**
 * 
 * 
 * @param instance
 * @param message
 * @returns
 */
function SetMessageBoxContent(order, instance) {
    instance.showCancelButton = false;
    instance.dangerouslyUseHTMLString = true;
    instance.confirmButtonLoading = true;
    instance.confirmButtonText = '請稍候...';
    instance.type = 'info';
    instance.message = `<h5 style="font-weight: bolder; color: red;">請稍候，訂單"MyCard ${order.content}" 送出中...</h1>`;    
}

/**
 * 
 * @param select
 * @returns
 */
function OrderConfirm(select) {
    return MessageBoxManager.MsgBox('系統即將送出訂單，您是否確定？', 'warning', (action, instance, done) => {
        if (action == 'confirm') {
            confirm(SelectMyCardItem.value[select - 1], instance, done);
        }
        else {
            Log('使用者選擇取消');
            done();
        }
    });
}

/**
 * 
 */
function OrderCompleted(order){
    Log('訂單成立', order);
    MessageBoxManager.Alert('訂單已建立成功，謝謝您的訂購。', 'success').catch(() => { /* eslint-disable */ });
    Home();
}

/**
 * 
 * @param member
 * @param point
 */
function Order(select) {
    Log('Save 加購 MyCard: ', select);
    OrderConfirm(select)
        .then(x => OrderCompleted(x))
        .catch(x => Log('使用者取消: ', x))
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