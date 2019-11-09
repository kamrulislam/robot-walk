import { CommandType } from './command-type';
import { DirectionType } from './direction';

export interface PlaceParams {
    posX: number;
    posY: number;
    direction: DirectionType;
}

export interface Command {
    commandType: CommandType;
    commandParams?: PlaceParams;
}
