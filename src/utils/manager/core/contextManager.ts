import { AppConfig } from 'vue';
import { Router } from 'vue-router';
import { RouteManager } from './routeManager';
import ResizeObserver from '@/modules/resize';

export const enum Env {
    Development = 'development',
    Production = 'production'
}

/**
 * 
 */
export class ContextManager {
    private static _appConfig?: AppConfig;
    private static _router?: Router;

    /**
     * 
     */
    static get Process() {
        const env = process.env.NODE_ENV;
        if (env == 'development') return Env.Development;
        if (env == 'production') return Env.Production;
    }

    /**
     * 
     */
    static get AppConfig() {
        return ContextManager._appConfig;
    }

    /**
     * 
     */
    static get Router() {
        return ContextManager._router!;
    }

    /**
     * 
     */
    static get GlobalProperties() {
        return ContextManager!.AppConfig!.globalProperties;
    }

    /**
     * 
     * @param config
     */
    static InitialConfig(config?: AppConfig | undefined, router?: Router | undefined) {
        ContextManager._appConfig = config;
        ContextManager._router = router;

        RouteManager.InitialRouter(router!);
        ContextManager.InitialResize();
    }

    /**
     * 
     */
    static InitialResize() {
        window.ResizeObserver = ResizeObserver;
    }
}