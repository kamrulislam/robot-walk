import { InputFileName } from '../config';
import { log } from '../log';
import to from '../to';
import { isFileExistsAsync } from './is-file-exists';
import { isValidInputString } from './is-valid-input-string';
import { readFileAsync } from './read-file';
import { readStdinAsync } from './read-sdtin';

const removeUnknownInputs = (inputs: string[]) => {
    return inputs.filter(isValidInputString);
};

export const getInputAndProcess = async () => {
    let inputs;
    const [err, shouldReadFromFile] = await to(isFileExistsAsync(InputFileName));
    if(shouldReadFromFile) {
        log('Reading input from input.txt file');
        inputs = await readFileAsync(InputFileName);
    } else {
        log('Reading input from stdin');
        inputs = await readStdinAsync();
    }

    log('Given Input: ', inputs);
    return removeUnknownInputs(inputs);
};
