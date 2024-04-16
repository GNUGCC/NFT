import { AppConfig } from 'vue';

/** 訊息輸出相關 Manager */
export class LogManager {
    /**
     * 
     */
    private static _appConfig?: AppConfig;

    /**
     * 
     */
    static get AppConfig() {
        return LogManager._appConfig;
    }

    /**
     * 
     * @param config
     */
    static InitialAppConfig(config?: AppConfig | undefined) {        
        LogManager._appConfig = config;        
    }

    /**
     * 集中做訊息輸出用
     * @param data
     * @returns
     */
    static Log = (...data: any[]) => {
        console.log(...data);
    }

    /**
     * 
     * @param data
     */
    static LogGroup = (...data: any[]) => {
        console.group(...data);
    }

    /**
     * 
     * @param message
     * @param type
     * @returns
     */
    static LogPopup = (message: string, type: 'success' | 'error' | 'warning') => {
        LogManager.AppConfig?.globalProperties.$message({ message, type });
    }
}