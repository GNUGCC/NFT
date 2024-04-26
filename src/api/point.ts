import service from '@/api/common';
import type { OrderStatusType } from '@/models/order';
import type { MyCardContentType } from '@/models/mycardContent';

const orders: OrderStatusType[] = [
    {
        id: '1',
        amount: '1000',
        m_id: '1',
        content: '',
        status: '訂單成立',
        available_date: '2024/4/15',
        build_time: '2024/4/15'
    },
    {
        id: '2',
        amount: '2000',
        m_id: '2',
        content: '',
        status: '付款成功',
        available_date: '2024/4/16',
        build_time: '2024/4/16'
    },
    {
        id: '3',
        amount: '2500',
        m_id: '3',
        content: '',
        status: '付款成功',
        available_date: '2024/4/17',
        build_time: '2024/4/17'
    },
    {
        id: '4',
        amount: '500',
        m_id: '4',
        content: '',
        status: '付款失敗',
        available_date: '2024/4/18',
        build_time: '2024/4/18'
    },
    {
        id: '5',
        amount: '13000',
        m_id: '5',
        content: '',
        status: '付款成功',
        available_date: '2024/4/23',
        build_time: '2024/4/23'
    }
];

const mycardInfo: MyCardContentType[] = [
    {
        id: '1',
        m_id: '1',
        mycard_data: '1000 點數',
        mycard_point: '1000'
    },
    {
        id: '2',
        m_id: '2',
        mycard_data: '300 點數',
        mycard_point: '300'
    },
    {
        id: '3',
        m_id: '3',
        mycard_data: '11000 點數',
        mycard_point: '11000'
    },
    {
        id: '4',
        m_id: '4',
        mycard_data: '13000 點數',
        mycard_point: '13000'
    },
    {
        id: '5',
        m_id: '5',
        mycard_data: '10000 點數',
        mycard_point: '10000'
    }
];

const pay = {
    "errcode": 0,
    "msg": "ok",
    "data": {
        "pages": {
            "totalnum": "176",
            "totalpage": 18,
            "pagesize": 10,
            "page": 1
        },
        "list": [
            {
                "pmt_tag": "Alipay",
                "pmt_name": "支付寶",
                "ord_name": "香煙啤酒飲料",
                "ord_id": "176",
                "ord_no": "12151030113729320002",
                "out_no": "12345",
                "ord_type": "2",
                "add_time": "2015-10-30 11:37:32",
                "trade_account": "lin***@vip.qq.com",
                "trade_amount": "1",
                "trade_time": "2015-10-30 11:37:32",
                "trade_no": "2015103021001004950010956927",
                "trade_qrcode": null,
                "trade_pay_time": "2015-10-30 11:37:32",
                "remark": "",
                "status": "1",
                "original_amount": "1",
                "discount_amount": "0",
                "ignore_amount": "0",
                "trade_result": {
                    "is_success": "T",
                    "request": {
                        "param": "f5f00db90f67d9bd1ae8f519af5f8732"
                    },
                    "response": {
                        "alipay": {
                            "buy er_logon_id": "lin***@vip.qq.com",
                            "buyer_user_id": "2088202642306951",
                            "fund_change": "Y",
                            "gmt_refund_p ay": "2015-10-30 11:37:26",
                            "out_trade_no": "10151030113629560001",
                            "refund_detail_item_list": {
                                "TradeFundBill": {
                                    "amount": " 0.01",
                                    "fund_channel": "ALIPAYACCOUNT"
                                }
                            },
                            "refund_fee": "0.01",
                            "result_code": "SUCCESS",
                            "trade_no": "20 15103021001004950010956927"
                        }
                    },
                    "sign": "5f3765c29fe52da9e64398bd4968e832",
                    "sign_type": "MD5"
                }
            },
            {
                "pmt_tag": "Alipay",
                "pmt_name": "支付寶",
                "ord_name": "香煙啤酒飲料",
                "ord_id": "175",
                "ord_no": "10151030113629560001",
                "ord_type": "1",
                "add_time": "2015-10-30 11:36:46",
                "trade_account": "lin***@vip.qq.com",
                "trade_amount": "1",
                "trade_time": "2015-10-30 11:36:47",
                "trade_no": "2015103021001004950010956927",
                "trade_qrcode": "http://qr.alipay.com/baxc5kdssyeuf7did8",
                "trade_pay_time": "2015-10-30 11:37:09",
                "remark": "",
                "status": "1",
                "original_amount": "0",
                "discount_amount": "60",
                "ignore_amount": "5",
                "trade_result":
                {
                    "is_success": "T",
                    "request": {
                        "param": "7f93413e4bbc90f3128a6e45f5ff08cc"
                    },
                    "response": {
                        "alipay": {
                            "buye r_logon_id": "lin***@vip.qq.com",
                            "buyer_user_id": "2088202642306951",
                            "fund_bill_list": {
                                "TradeFundBill": {
                                    "a mount": "0.01",
                                    "fund_channel": "10"
                                }
                            },
                            "out_trade_no": "10151030113629560001",
                            "partner": "20888113672 24286",
                            "result_code": "SUCCESS",
                            "send_pay_date": "2015-10-30 11: 37:09",
                            "total_fee": "0.01",
                            "trade_no": "2015103021001004950010956927",
                            "trade_status": "TRADE_SUCCE SS"
                        }
                    },
                    "sign": "7533bb5fb18cd10cbd70f5318aed5b3e",
                    "sign_type": "MD5"
                }
            }
        ]
    }
};

export function InternalOrder({ id }) {
    return Promise.resolve(orders);
}

/**
 * 
 * @param param0
 */
export function InternalMyCardInfo({ id }) {
    return Promise.resolve(mycardInfo);
}

/**
 * 
 */
export function InternalMyCardSelectItem() {
    return service.get('goods');
}

/**
 * 
 * @returns
 */
export function InternalPay() {
    return Promise.resolve(pay);
}