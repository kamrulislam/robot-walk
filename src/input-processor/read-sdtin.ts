import { promisify } from '../promisify';

const readStdin = (fn: (error: any, inputs: Array<string>) => {}) => {
    let inputStrings: Array<string>;

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');
    
    let inputString = '';
    
    process.stdin.on('data', inputStdin => {
        inputString += inputStdin;
    });
    
    process.stdin.on('end', () => {
        inputStrings = inputString.replace(/\s*$/, '')
            .split('\n')
            .map(str => str.replace(/\s*$/, ''));
    
        fn(null, inputStrings);
    });
    
}

export const readStdinAsync = promisify(readStdin);

