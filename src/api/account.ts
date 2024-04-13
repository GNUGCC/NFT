import service from '@/api/common';

/**
 * 
 * @param param0
 * @returns
 */
export function InternalLogin({ name, password }) {
    return Promise.resolve({ name, password });
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