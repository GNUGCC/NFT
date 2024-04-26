import { ref } from 'vue';
import { computedAsync } from '@vueuse/core';
import { Log, Home } from '@/modules/common';
import { MessageBoxManager, RouteManager } from '@/utils';
import { InternalMyCardSelectItem, InternalPay } from '@/api/point';
import type { OrderStatusType } from '@/models/order';

const Select = ref();
const SelectMyCardItem = computedAsync(async () => await InternalMyCardSelectItem());

/**
 * 
 * @param select
 * @param instance
 * @param done
 */
function confirm(id, order: OrderStatusType, instance) {
    Log('送出訂單成立', order, id);
    SetMessageBoxContent(order, instance);

    return InternalPay({ m_id: id, amount: order.amount, mycard_point: order.amount, content: order.content })
        .then(x => {
            const data = x as any;
            const url = data?.ord_trade_jpurl || data?.trade_url || data?.trade_qrcode;
            Log('訂單成立，導向付款頁面...', order, data, url);

            return RedirectToPay(url).catch(err => { throw (err); });
        })
        .catch(err => {
            Log('無法送出訂單: ', err);
            MessageBoxManager.Alert('訂單送出錯誤，請重新再試一次。', 'error').catch(() => { /* eslint-disable */ });
            throw err;
        });
}

/**
 * 
 * @param url
 * @returns
 */
function RedirectToPay(url) {
    return new Promise((resolve, reject) => {
        if (url) {
            window.open(url);
            resolve(url);
        }
        else {
            reject('沒有付款頁面 URL');
        }
    });
}

/**
 * 
 * @param select
 * @returns
 */
function OrderConfirm(select) {
    return new Promise((resolve, reject) => {
        const { id } = RouteManager.Params;
        const order = translateOrderType(SelectMyCardItem.value[select - 1], '0');

        MessageBoxManager.MsgBox(`系統即將送出訂單 ${preparePointContent('MyCard', order.content)}，您是否確定？`, 'warning', (action, instance, done) => {
            if (action == 'confirm') {
                confirm(id, order, instance)
                    .then(x => resolve(x))
                    .catch(err => reject(err))
            }

            done();
        })
            .catch(x => {
                Log('點選關閉: ', x);
                reject('使用者點選關閉');
            });
    });
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
        .catch(x => Log('系統發生錯誤: ', x))
        .finally(() => Select.value = null);
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
    instance.message = `<h5 style="font-weight: bolder; color: red;">請稍候，訂單 ${preparePointContent('MyCard', order.content)}  送出中...</h1>`;    
}

/**
 * 
 */
function OrderCompleted(order) {
    Log('訂單成立', order);
    MessageBoxManager.Alert('訂單已建立成功，請按下確定即將導向付款頁面。', 'warning').catch(() => { /* eslint-disable */ });
    Home();
}

/**
 * 
 * @param type
 * @param order
 * @returns
 */
function preparePointContent(type, order) {
    return `"${type} ${order}"`;
}

/**
 * 
 * @param order
 * @returns
 */
function translateOrderType(order, status) {
    return <OrderStatusType>{
        m_id: order.id,
        status,
        amount: order.points,
        content: order.content,
        build_time: order.build_time
    };
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