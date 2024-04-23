import service from '@/api/common';

/**
 * 
 * @param param0
 * @returns
 */
export function InternalLogin({ account, password }) {
    return service.post('login', {
        account,
        password
    });
}

/**
 * 
 * @param param0
 * @returns
 */
export function InternalRegister({ name, password, email, mobile }) {
    return Promise.resolve({ name, password, email, mobile });
    //return service.post('register', {
    //    account: name,
    //    name,
    //    password,
    //    email,
    //    mobile
    //});
}

/**
 * 
 * @param param0
 * @returns
 */
export function InternalUpdate({ id, name, password, account, email, mobile }) {
    return Promise.resolve({ id, name, password, account, email, mobile });
    //return Promise.resolve({ id, name, password, account, email, mobile });
    //return service.put('members', { id, name, password, account, email, mobile });
}

/**
 * 
 */
export function InternalGetAllMembers() {
    return service.get('members');
}