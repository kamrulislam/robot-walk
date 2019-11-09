
export const log = (...args: any[]) => {
    if (process.env.DEBUG) {
        if (typeof args[0] === 'string') {
            args[0] = `[DEBUG]::${args[0]}`;
        } else {
            args = ['[DEBUG]::', ...args];
        }
        console.log(...args);
    }
};
