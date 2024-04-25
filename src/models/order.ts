/**
 * 訂單狀態
 */
export type OrderStatusType = {
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