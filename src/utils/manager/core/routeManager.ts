import { Router } from "vue-router";
import { LogManager } from './logManager';
import { StoreManager } from "./storeManager";

/** 路由 Manager */
export class RouteManager {
    private static _router: Router;

    /**
     * 
     */
    static get Params() {
        return RouteManager.Router.currentRoute.value.params;
    }

    /**
     * 
     */
    static InitialRouter(router: Router) {
        RouteManager._router = router;
        router.beforeEach(to => {
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
        RouteManager.Router.push('register');
    }

    /**
     * 
     */
    static About() {
        LogManager.Log('關於路由');
        RouteManager.Router.push('about');
    }

    /**
     * 返回主頁路由
     */
    static Home() {
        LogManager.Log('返回主頁路由', RouteManager.Router);
        //RouteManager.Router.push('home');
        RouteManager.Router.push({ path: '/' });
    }    

    /** 登出路由*/
    static Logout() {
        LogManager.Log('登出路由', RouteManager.Router);
        RouteManager.Router.push({ path: '/' });
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
     */
    private static get Router() {
        return RouteManager._router;
    }

    /**
     * 
     */
    private static get NeedAuthList() {
        return ['info', 'addntf', 'addmycard', 'edit', 'detail'];
    }
}