import { log } from '../log';
import { validPatterns } from '../command/command-validator-pattern';


export const isValidInputString = (str: string): boolean => {
    log("Checking validity for :", str);

    if (validPatterns.test(str)) {
        log("pattern matched");
        return true;
    }

    log("pattern DO NOT match");
    return false;
}

