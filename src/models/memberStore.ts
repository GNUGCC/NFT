import type { MemberType } from './member';
import type { OrderStatusType } from './order';
import type { MyCardContentType } from './mycardContent';

/**
 * 
 */
export type MemberStore = {
    Member: MemberType,
    Members: Array<MemberType>,
    OrderStatus: Array<OrderStatusType>,
    MyCard: MyCardContentType
}