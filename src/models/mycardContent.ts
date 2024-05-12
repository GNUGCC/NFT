/**
 * MyCard 點數內容
 */
export type MyCardContentType = {
    id?: string,
    m_id?: string,
    mycard_point?: string,
    mycard_data?: string,
    status?: string,
    build_time?: string
}

/** 購買 MyCard 記錄 */
export type MyCardBuyListType = {
    id?: string,
    m_id?: string,
    mycard_point?: string,
    nft_point?: string,
    purses?: readonly MyCardContentType[]
}