import type { MemberType } from '@/models/member';
import type { MemberStore } from '@/models/memberStore';

/**
 * 
 * @param store
 */
function member(store) {
    Object.assign(store.state, init());
    store.subscribe(({ type, payload }, state) => {
        restore(state);
        //console.log('write: ', type, payload, read());
    });
}

/**
 * 
 * @returns
 */
function init() {
    return read() || restore({ Member: {}, Members: Array<MemberType>() });
}

/**
 * 
 * @returns
 */
function read() {
    const data = localStorage.getItem('data');
    return data && <MemberStore>JSON.parse(data!);
}

/**
 * 
 * @param param0
 * @returns
 */
function restore({ Member, Members }) {
    localStorage.setItem('data', JSON.stringify({ Member, Members }));
    return { Member, Members };
}

export default [member]