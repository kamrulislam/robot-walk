// inspired by https://blog.grossman.io/how-to-write-async-await-without-try-catch-blocks-in-javascript/

export default (promise: Promise<any>):Promise<any[]> => {
    return promise.then((data: any) => {
       return [null, data];
    })
    .catch((err: any) => [err]);
 };
