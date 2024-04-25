const ResizeObserverBase = window.ResizeObserver;

/**
 * 
 */
export default class ResizeObserver extends ResizeObserverBase {
    /**
     * 
     * @param callBack
     * @param delay
     * @returns
     */

    private static debounce(callBack, delay) {
        let timer = 0;

        /* eslint-disable */
        return function (this: any, ...args: readonly any[]) {
            const context = this;
            clearTimeout(timer!);
            timer = setTimeout(() => callBack.apply(context, args), delay);
        };
    }

    /**
     * 
     * @param callBack
     */
    constructor(callBack) {
        super(ResizeObserver.debounce(callBack, 16));
    }    
};