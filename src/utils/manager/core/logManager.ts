import { ContextManager } from './contextManager';

/** 訊息輸出相關 Manager */
export class LogManager {
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
        ContextManager.GlobalProperties.$message({ message, type });
    }
}