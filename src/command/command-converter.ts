import { Command, PlaceParams } from './index.d';
import { CommandType } from './command-type';
import { log } from '../log';
import { DirectionType } from './direction';

const getParamsForPlaceCommand = (inputInUppercase: string): PlaceParams | undefined => {
    if (inputInUppercase.indexOf(CommandType.PLACE) !== 0) {
        log('Not a PLACE command');
        return undefined;
    }
    
    const parts = inputInUppercase.split(',');

    const posX = parseInt(parts[0].split(' ').pop());
    const posY = parseInt(parts[1]);
    const direction = parts[2] as DirectionType;

    return {
        posX,
        posY,
        direction
    };
}

const getCommandFromString = (inputInUppercase: string): Command => {
    const parts = inputInUppercase.split(' ');
    const commandType = parts[0] as CommandType;
    log('command type ', commandType);
    return {
        commandType,
        commandParams: getParamsForPlaceCommand(inputInUppercase)
    };
}

export const commandConverter = (validInputs: Array<string>): Array<Command> => {
    const commands: Array<Command> = [];
    validInputs.forEach(input => {
        commands.push(getCommandFromString(input.toUpperCase())); 
    });
    log('Converted commands', commands);
    return commands;
}