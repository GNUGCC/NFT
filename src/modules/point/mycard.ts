import { ref } from 'vue';
import { computedAsync } from '@vueuse/core';
import { Log, Home, Authentication } from '@/modules/common';
import { MessageBoxManager } from '@/utils';
import { InternalMyCardSelectItem, InternalPay } from '@/api/point';
import type { OrderStatusType } from '@/models/order';

const Select = ref();
const PayStatus = ref<boolean | null>(false);
const SelectMyCardItem = computedAsync(async () => await prepareSelectItem());

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
            
            return url;
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
            window.location.assign(url);
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
function OrderConfirm(select, type) {
    return new Promise((resolve, reject) => {
        const { id } = Authentication();
        const order = translateOrderType(select, '0');

        MessageBoxManager.MsgBox(`系統即將送出訂單 ${preparePointContent(`${type}`, order.content)}，您是否確定？`, 'warning', (action, instance, done) => {
            if (action == 'confirm') {
                setPaySatus(true);
                confirm(id, order, instance)
                    .then(x => resolve(x))
                    .catch(err => reject(err));
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
function Order(type, select) {
    Log(`Save 加購 ${type}:`, select);
    OrderConfirm(select, type)
        .then(url => RedirectToPay(url).then(() => setPaySatus(null)).catch(err => { throw (err); }))
        .catch(x => Log('系統發生錯誤: ', x))
        .finally(() => Select.value = null);
}

/**
 * 
 * @param status
 */
function setPaySatus(status) {
    PayStatus.value = status;
}

/**
 * 
 * @param items
 * @returns
 */
async function prepareSelectItem() {
    try {
        const result = await InternalMyCardSelectItem();
        return Array.isArray(result) && result.length > 0 && result;
    }
    catch {
        return false;
    }
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
function translateOrderType(select, status) {
    const array = SelectMyCardItem.value as unknown as [];
    const order = array.find((x: any) => x.id == select) as any;

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
function AddMyCard() {
    Log('加購 MyCard');
    return '/point/mycard/add';
}

export { Home } from '@/modules/common';
export {    
    Order,
    Cancel,
    Select,
    PayStatus,
    AddMyCard,
    SelectMyCardItem
}