import { ref, computed } from 'vue';
import { computedAsync } from '@vueuse/core';
import { Log, Home, Authentication } from '@/modules/common';
import { MessageBoxManager } from '@/utils';
import { InternalMyCardSelectItem, InternalPay } from '@/api/point';
import type { OrderStatusType } from '@/models/order';

const Select = ref();
const PayStatus = ref<boolean | null>(false);
const AddMyCard = computed(() => '/point/mycard/add');
const SelectMyCardItem = computedAsync(async () => await prepareSelectItem());

/**
 * 
 * @param select
 * @param instance
 * @param done
 */
function confirm(id, order: OrderStatusType) {
    Log('送出訂單成立', order, id);
    //SetMessageBoxContent(order, instance);

    Log('取得付款頁面: ', id, order.amount, order.amount, order.content);
    setPaySatus(true);
    return InternalPay({ m_id: id, amount: order.amount, mycard_point: order.amount, content: order.content })
        .then(pay => getPayUrl(order, pay as any))
        .catch(err => { payError(err); throw err; });
}

/**
 * 
 * @param err
 */
function payError(err) {
    Log('無法送出訂單: ', err);
    MessageBoxManager.Alert('訂單送出錯誤，請重新再試一次。', 'error').catch(() => { /* eslint-disable */ });    
}

/**
 * 
 * @param order
 * @param data
 * @returns
 */
function getPayUrl(order, data) {
    const url = data?.ord_trade_jpurl || data?.trade_url || data?.trade_qrcode;
    Log('訂單成立，導向付款頁面...', order, data, url);

    return url;
}

/**
 * 
 * @param url
 * @returns
 */
function RedirectToPay(url) {
    Log('paly: ', url);
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
 * @param param0
 * @param type
 * @param order
 * @returns
 */
function showOrderMessageBox({ id }, type, order) {
    Log('order: ', id, type, order);

    return new Promise((resolve, reject) => {
        MessageBoxManager.MsgBox(`系統即將送出訂單 ${preparePointContent(`${type}`, order)}，您是否確定？`, 'warning', (action, instance, done) => {
            if (action == 'confirm') {
                resolve(confirm(id, order));
            }

            done();
        })
            .catch(() => reject('使用者點選關閉'));
    });
}

/**
 * 
 * @param select
 * @returns
 */
function OrderConfirm({ id }, type, order) {
    return new Promise((resolve, reject) => {
        showOrderMessageBox({ id }, type, order)
            .then(result => resolve(result))
            .catch(err => { Log(err); reject(err); });
    });
}

/**
 * 
 * @param member
 * @param point
 */
function Order(type, select, mycardItem) {
    Log(`Save 加購 ${type}:`, select);
    OrderConfirm(Authentication(), type, translateOrderType(select, mycardItem, '0'))
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
    instance.message = `<h5 style="font-weight: bolder; color: red;">請稍候，訂單 ${preparePointContent('MyCard', order)}  送出中...</h1>`;    
}

/**
 * 
 * @param type
 * @param order
 * @returns
 */
function preparePointContent(type, order) {
    return `"${type} ${order.content}"`;
}

/**
 * 
 * @param order
 * @returns
 */
function translateOrderType(select, mycardItem, status) {
    const array = mycardItem as unknown as [];
    const order = array.find((x: any) => x.id == select) as any;

    return Object.assign({}, {
        m_id: order.id,
        status,
        amount: order.points,
        content: order.content,
        build_time: order.build_time
    });
}

/**
 * 
 * @param member
 */
function Cancel() {
    Log('Cancel 加購 MyCard');
    Home();
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