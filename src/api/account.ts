import service from '@/api/common';

/**
 * 
 * @param param0
 * @returns
 */
export function InternalLogin({ name, password }) {
    return service.post('login', {
        account: name,
        password
    });
}

/**
 * 
 * @param param0
 * @returns
 */
export function InternalRegister({ name, password, email, mobile }) {
    return service.post('register', {
        account: name,
        name,
        password,
        email,
        mobile
    });
}

/**
 * 
 * @param param0
 * @returns
 */
export function InternalUpdate({ id, name, password, account, email, mobile }) {
    return service.put('members', { id, name, password, account, email, mobile });
}