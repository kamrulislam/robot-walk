import { promisify } from '../promisify';

const readStdin = (fn: (error: any, inputs: string[]) => {}) => {
    let inputStrings: string[];

    process.stdin.resume();
    process.stdin.setEncoding('utf-8');

    let inputString = '';

    process.stdin.on('data', (inputStdin) => {
        inputString += inputStdin;
    });

    process.stdin.on('end', () => {
        inputStrings = inputString.replace(/\s*$/, '')
            .split('\n')
            .map((str) => str.replace(/\s*$/, ''));

        fn(null, inputStrings);
    });
    console.log('-----------------------------------');
    console.log('Please enter commands for the Robot');
    console.log('One command per line');
    console.log('Once done pres ctrl+d');
    console.log('-----------------------------------');
};

export const readStdinAsync = promisify(readStdin);
