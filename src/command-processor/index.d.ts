import { PlaceParams } from '../command';
import { Command } from '../command';

export interface PlaceInformation extends PlaceParams {
    directionNumber: number;
}

export interface CommandProcessor {
    apply: (command: Command, currentPlace: PlaceInformation) => PlaceInformation;
    // setOutput: (output: (param: PlaceParams) => void) => void;
}
