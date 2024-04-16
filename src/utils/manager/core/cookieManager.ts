import Cookies from 'js-cookie';

/**
 * 
 */
class CookieManager {
    /**
     * 
     * @param token
     */
    static SetToken(token: string) {
        Cookies.set('token', token);
    }

    /**
     * 
     * @param name
     */
    static SetName(name: string) {
        Cookies.set('name', name);
    }
}

/**
 * 
 * @param token
 */
export function SetToken(token?: string) {
    token && CookieManager.SetToken(token);
}

/**
 * 
 * @param name
 */
export function SetName(name?: string) {
    name && CookieManager.SetToken(name);
}