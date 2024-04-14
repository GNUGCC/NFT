import { AddMember, PerformanceMember } from './common';

/**
 * 
 * @param state
 * @param value
 * @returns
 */
const Member = (state, value) => {
    if (value == null) state.Member = null;
    else {
        const member = PerformanceMember(value)!;
        state.Member = AddMember(member, state.Members) ? member : state.Member;
    }
}

/**
 * 
 * @param state
 * @param value
 * @returns
 */
const Members = (state, value) => state.Members = value;

export default {
    Member,
    Members
}