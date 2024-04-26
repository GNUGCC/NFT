import { ContextManager } from './contextManager';

/**
 * 
 */
export class MessageBoxManager {
    /**
     * 
     * @param context
     * @param title
     */
    static Confirm(message?: string, type?: 'success' | 'warning' | 'info' | 'error', title = '系統訊息') {
        const param = MessageBoxManager.GetParams(type);
        return ContextManager.GlobalProperties.$confirm(message, title, param);
    }

    /**
     * 
     * @param context
     * @param title
     */
    static Alert(message?: string, type?: 'success' | 'warning' | 'info' | 'error', title = '系統訊息') {
        const param = MessageBoxManager.GetParams(type);
        return ContextManager.GlobalProperties.$alert(message, title, param);
    }

    /**
     * 
     * @param context
     * @param title
     */
    static Prompt(message?: string, type?: 'success' | 'warning' | 'info' | 'error', title = '系統訊息') {
        const param = MessageBoxManager.GetParams(type);
        return ContextManager.GlobalProperties.$prompt(message, title, param);
    }

    /**
    * 
    * @param context
    * @param title
    */
    static MsgBox(message?: string, type?: 'success' | 'warning' | 'info' | 'error', beforeClose?: (action, instance, done) => void, title = '系統訊息') {
        const params = MessageBoxManager.GetParams(type);
        return ContextManager.GlobalProperties.$msgbox({
            title,            
            message,
            showCancelButton: true,
            type: params.type,
            confirmButtonText: params.confirmButtonText,
            cancelButtonText: params.cancelButtonText,
            beforeClose
        });
    }

    /**
     * 
     * @param param0
     * @param param1
     * @returns
     */
    private static GetParams(type) {
        return {
            type,
            confirmButtonText: '確定',
            cancelButtonText: '取消'
        };
    }
}