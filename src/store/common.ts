import type { MemberType } from '@/model/member';

/**
 * 
 * @param data
 * @returns
 */
function PerformanceMember(data) {
    if (data == null) return null;

    const { id, account, name, password, mobile, email, build_time, parent, token } = data;
    return <MemberType>{
        id,
        account,
        name,
        password,
        mobile,
        email,
        build_time,
        parent,
        token
    };
}

/**
 * 
 * @param id
 * @param members
 * @returns
 */
function QueryMember(id: string, members: readonly MemberType[]) {
    const index = members.findIndex(x => x.id == id);
    if (index < 0) return false;
    return {
        index,
        result: members[index]
    };
}

/**
 * 
 * @param data
 * @param members
 */
function AddMember(data: MemberType, members: MemberType[]) {
    if (data?.id == undefined) return members.push(data) > 0;
    return QueryMember(data.id, members) == false && members.push(data) > 0;
}

/**
 * 
 * @param data
 * @param members
 * @returns
 */
function UpdateMember(data: MemberType, members: MemberType[]) {
    const member = QueryMember(data.id!, members);
    member && members.splice(member.index, 1, data);
    return members;
}

/**
 * 
 * @param id
 * @param members
 * @returns
 */
function DeleteMember(id: string, members: MemberType[]) {
    const member = QueryMember(id, members);
    return member && members.splice(member.index, 1);
}

export {
    PerformanceMember,
    QueryMember,
    AddMember,
    UpdateMember,
    DeleteMember
}