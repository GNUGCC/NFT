import service from '@/api/common';

export function InternalLogin(name, password) {
    return Promise.resolve({ name, password });
    //return service.post('register', {
    //    name,
    //    password
    //});
}