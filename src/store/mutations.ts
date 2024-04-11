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
function PerformanceMember(data) {
    if (data == null) return null;
    const result = <MemberType>{
        id: '',
        account: '',
        name: data?.name,
        password: data?.password,
        mobile: '',
        email: '',
        build_time: '',
        parent: -1,
        token: data?.message
    };

    console.log('PerformanceMember: ', data, result);
    return <MemberType>{
        id: '',
        account: '',
        name: data?.name,
        password: data?.password,
        mobile: '',
        email: '',
        build_time: '',
        parent: -1,
        token: data?.message
    };
}

/**
 * 
 * @param data
 * @param members
 */
function AddMember(data: MemberType, members: MemberType[]) {
    QueryMember(data.id!, members) && members.push(data);
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

export default {
    Member
}