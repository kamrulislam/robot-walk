
export default (promise: Promise<any>):Promise<any[]> => {
    return promise.then((data: any) => {
       return [null, data];
    })
    .catch((err: any) => [err]);
 };
