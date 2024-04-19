/**
 * 會員資料
 */
type MemberType = {
    id?: string,
    account?: string,
    name?: string,
    password?: string,
    passwords?: string,
    mobile?: string,
    email?: string,
    build_time?: string,
    parent?: number,
    token?: string
}

/**
 * NTF 點數
 */
type NtfType = {
    point?: string
}

/**
 * MyCard 點數
 */
type MyCardType = NtfType;

/**
 * 訂單狀態
 */
type OrderStatusType = {
    id?: string,
    m_id?: string,
    amount?: string,
    content?: string,
    status?: string,
    available_date?: string,
    build_time?: string
}

/**
 * MyCard 點數內容
 */
type MyCardContentType = {
    id?: string,
    m_id?: string,
    mycard_point?: string,
    mycard_data?: string,
    status?: string,
    build_time?: string
}

/**
 * 
 */
type MemberStore = {
    Member: MemberType,
    Members: Array<MemberType>,
    MyCards: Array<MyCardContentType>,
    OrderStatus: Array<OrderStatusType>    
}

export {
    MemberType,
    NtfType,
    MyCardType,
    OrderStatusType,
    MyCardContentType,
    MemberStore
}