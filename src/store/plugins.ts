import type { MemberType, MemberStore } from '@/models/member';

/**
 * 
 * @param store
 */
function member(store) {
    Object.assign(store.state, init());
    console.log('plugin: ', store);
    store.subscribe(({ type, payload }, state) => {
        restore(state);
        console.log('write: ', type, payload, read());
    });
}

/**
 * 
 * @returns
 */
function init() {
    const data = <MemberStore>{
        Member: {},
        Members: Array<MemberType>()
    };

    return read() || restore(data);
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
function restore(state: MemberStore) {
    localStorage.setItem('data', JSON.stringify(state));
    return { ...state };
}

export default [member]