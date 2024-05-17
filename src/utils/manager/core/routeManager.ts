import { Router } from "vue-router";
import { LogManager } from './logManager';
import { StoreManager } from "./storeManager";
import { ContextManager } from './contextManager';

/** 路由 Manager */
export class RouteManager {
    /**
     * 
     */
    static get Params() {
        return ContextManager.Router.currentRoute.value.params;
    }    

    /**
     * 
     */
    static InitialRouter(router: Router) {
        router.beforeEach(to => {
            if (RouteManager.IsConsole(to.name)) return RouteManager.IsAdmin;
            if (RouteManager.IsPassToAuth(to.name)) return true;            
            if (StoreManager.Authentication == false) return RouteManager.Home();
            return true;
        });
    }

    /**
     * 
     */
    static Register() {
        LogManager.Log('註冊路由');
        ContextManager.Router.push('register');
    }

    /**
     * 
     */
    static About() {
        LogManager.Log('關於路由');
        ContextManager.Router.push('about');
    }

    /**
     * 返回主頁路由
     */
    static Home() {
        LogManager.Log('返回主頁路由', ContextManager.Router);
        ContextManager.Router.push({ path: '/home' });
    }    

    /** 登出路由*/
    static Logout() {
        LogManager.Log('登出路由', ContextManager.Router);
        ContextManager.Router.push({ path: '/' });
    }

    /**
     * 
     */
    static Console() {
        LogManager.Log('登入後台', ContextManager.Router);
        ContextManager.Router.push({ path: '/console' });
    }

    /**
     * 
     * @param path
     * @returns
     */
    private static IsPassToAuth(path) {
        return RouteManager.NeedAuthList.findIndex(x => path == x) < 0;
    }      

    /**
     * 
     * @param path
     * @returns
     */
    private static IsConsole(path) {
        return path.toLowerCase() == 'console';
    }

    /**
     * 
     */
    private static get IsAdmin() {
        const { parent } = StoreManager.Authentication;
        return parent == 0 || RouteManager.Home();
    }

    /**
     * 
     */
    private static get NeedAuthList() {
        return ['info', 'addntf', 'addmycard', 'edit', 'order', 'completed'];
    }
}