import { log } from '../log';
import { isValidInputString } from './is-valid-input-string';
import { readStdinAsync } from './read-sdtin';

const removeUnknownInputs = (inputs: string[]) => {
    return inputs.filter(isValidInputString);
};

export const getInputAndProcess = async () => {
    const result = await readStdinAsync();
    log('Given Input: ', result);
    return removeUnknownInputs(result);
};
