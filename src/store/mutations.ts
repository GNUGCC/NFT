import { QueryMember } from './getters';
import type { MemberType } from '@/model/member';

/**
 * 
 * @param state
 * @param value
 * @returns
 */
const Member = (state, value) => state.Member = PerformanceMember(value);

/**
 * 
 * @param data
 * @returns
 */
export function PerformanceMember(data) {
    if (data == null) return null;
    const result = <MemberType>{
        id: data?.id,
        account: data?.account,
        name: data?.name,
        password: data?.password,
        mobile: data?.mobile,
        email: data?.email,
        build_time: data?.build_time,
        parent: data?.parent,
        token: data?.token
    };

    console.log('PerformanceMember: ', data, result);
    return <MemberType>{
        id: data?.id,
        account: data?.account,
        name: data?.name,
        password: data?.password,
        mobile: data?.mobile,
        email: data?.email,
        build_time: data?.build_time,
        parent: data?.parent,
        token: data?.token
    };
}

/**
 * 
 * @param data
 * @param members
 */
export function AddMember(data: MemberType, members: MemberType[]) {
    if (data?.id == undefined) return members.push(data) > 0;
     return QueryMember(data.id, members) == false && members.push(data) > 0;
}

/**
 * 
 * @param data
 * @param members
 * @returns
 */
export function UpdateMember(data: MemberType, members: MemberType[]) {
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
export function DeleteMember(id: string, members: MemberType[]) {
    const member = QueryMember(id, members);
    return member && members.splice(member.index, 1);
}

export default {
    Member
}