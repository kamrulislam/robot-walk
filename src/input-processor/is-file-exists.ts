import * as fs from 'fs';
import { log } from '../log';
import { promisify } from '../promisify';

const isFileExists = (fullFileName: string, fn: (error: any, status: boolean) => {}) => {
    log(`checking if ${fullFileName} exist`);
    fs.access(fullFileName, (fs as any).F_OK, (err) => {
        fn(err, !err);
    });
};

export const isFileExistsAsync = promisify(isFileExists);
