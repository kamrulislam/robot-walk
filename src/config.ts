import * as path from 'path';
import { log } from './log';

export const InputFileName = path.resolve(__dirname, '../input/input.txt');
log('input file', InputFileName);
