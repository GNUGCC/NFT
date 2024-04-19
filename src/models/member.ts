export type MemberType = {
    id?: string,
    account?: string,
    name?: string,
    password?: string,
    mobile?: string,
    email?: string,
    build_time?: string,
    parent?: number,
    token?: string
};

export type MemberStore = {
    Member: MemberType,
    Members: Array<MemberType>
}