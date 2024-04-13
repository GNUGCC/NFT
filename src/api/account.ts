import service from '@/api/common';

/**
 * 
 * @param param0
 * @returns
 */
export function InternalLogin({ name, password }) {
    return service.post('login', {
        name,
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
}