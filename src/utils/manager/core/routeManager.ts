import { Router } from "vue-router";
import { LogManager } from './logManager';

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

    /**
     * 
     */
    private static get Router() {
        return RouteManager._router;
    }
}