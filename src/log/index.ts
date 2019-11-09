
export const log = (...args: Array<any>) => {
    if (process.env.DEBUG) {
        console.log(...args);
    }
}