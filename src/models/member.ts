export type MemberType = {
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

export type NtfType = {
    point?: string
}

export type MyCardType = NtfType;

export type MemberStore = {
    Member: MemberType,
    Members: Array<MemberType>
}