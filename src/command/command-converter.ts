import { log } from '../log';
import { CommandType } from './command-type';
import { DirectionType } from './direction';
import { Command, PlaceParams } from './index.d';

export const getParamsForPlaceCommand = (inputInUppercase: string): PlaceParams | undefined => {
    if (inputInUppercase.indexOf(CommandType.PLACE) !== 0) {
        log('Not a PLACE command');
        return undefined;
    }

    const parts = inputInUppercase.split(',');

    const posX = parseInt(parts[0].split(' ').pop(), 10);
    const posY = parseInt(parts[1], 10);
    const direction = parts[2] as DirectionType;

    return {
        posX,
        posY,
        direction
    };
};

export const getCommandFromString = (inputInUppercase: string): Command => {
    const parts = inputInUppercase.split(' ');
    const commandType = parts[0] as CommandType;
    log('command type ', commandType);
    return {
        commandType,
        commandParams: getParamsForPlaceCommand(inputInUppercase)
    };
};

export const commandConverter = (validInputs: string[]): Command[] => {
    const commands: Command[] = [];
    validInputs.forEach((input) => {
        commands.push(getCommandFromString(input.toUpperCase()));
    });
    log('Converted commands', commands);
    return commands;
};
