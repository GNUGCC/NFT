import type { MemberType } from '@/models/member';
import type { MyCardContentType } from '@/models/mycardContent';

/**
 * 
 * @param data
 */
function PerformanceMyCard(data) {
    if (data == null) return null;

    const { id, m_id, mycard_point, mycard_data, status, build_time } = data;
    return <MyCardContentType>{
        id,
        m_id,
        mycard_point,
        mycard_data,
        status,
        build_time
    };
}

/**
 * 
 * @param data
 * @returns
 */
function PerformanceMember(data) {
    if (data == null) return null;

    const { id, account, name, password, mobile, email, build_time, parent, token } = data;
    return Object.assign({}, { id, account, name, password, mobile, email, build_time, parent, token });
}

/**
 * 
 * @param id
 * @param myCards
 */
function QueryMyCard(id: string, myCards: Array<MyCardContentType>) {
    /* eslint-disable */
}

/**
 * 
 * @param id
 * @param members
 * @returns
 */
function QueryMember(id: string, members: readonly MemberType[]) {
    const index = members.findIndex(x => x.id == id);
    return index >= 0 && {
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
    if (data?.id) return QueryMember(data.id!, members) == false && members.push(data) > 0;
    return data != null && members.push(data) > 0;
    //return data?.id && QueryMember(data.id!, members) == false || data != null || members.push(data) > 0;
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
    return member && members;
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
    PerformanceMyCard,
    PerformanceMember,
    QueryMember,
    AddMember,
    UpdateMember,
    DeleteMember
}