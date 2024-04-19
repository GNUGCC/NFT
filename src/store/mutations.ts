import { PerformanceMember, AddMember } from './common';

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
        state.Member = member;
        AddMember(member, state.Members);
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