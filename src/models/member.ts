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
    /**
     * 
     */
    id?: string,
    /**
     * 使用 ID
     */
    m_id?: string,
    /**
     * 付款金額
     */
    amount?: string,
    /**
     * 購買內容
     */
    content?: string,
    /**
     * 狀態(0: 訂單成立 1:付款成功 2:付款失敗)
     */
    status?: string,
    /**
     * 有效日期
     */
    available_date?: string,
    /**
     * 建立時間
     */
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
    OrderStatus: Array<OrderStatusType>,
    MyCard: MyCardContentType
}

export {
    MemberType,
    NtfType,
    MyCardType,
    OrderStatusType,
    MyCardContentType,
    MemberStore
}