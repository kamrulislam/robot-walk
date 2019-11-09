import { readStdinAsync } from './read-sdtin';
import { log } from '../log';
import { isValidInputString } from './is-valid-input-string';

const removeUnknownInputs = (inputs: Array<string>) => {
    return inputs.filter(isValidInputString);
}

export const getInputAndProcess = async () => {
    const result = await readStdinAsync();
    log("Given Input: ", result);
    return removeUnknownInputs(result);
}

