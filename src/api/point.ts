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

/**
 * 
 */
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