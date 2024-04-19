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
        router.beforeEach(to => to.name == 'home' || StoreManager.Authentication != null || RouteManager.Home());
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
     */
    private static get Router() {
        return RouteManager._router;
    }
}