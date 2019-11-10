import { Command, CommandType, directionMap, directionMoveX, directionMoveY, OrderedDirections, PlaceParams } from '../command';
import { log } from '../log';
import { TableDimension } from '../robot/index.d';
import { TableWidthX, TableWidthY } from '../robot/table-config';
import { CommandProcessor, PlaceInformation } from './index.d';

export class ProcessCommand implements CommandProcessor {
    private floorDimension: TableDimension;
    private totalDirections = OrderedDirections.length;

    constructor() {
        this.floorDimension = {
            dimX: TableWidthX,
            dimY: TableWidthY
        };
    }

    public apply(command: Command, currentPlace: PlaceInformation) {
        switch(command.commandType) {
            case CommandType.PLACE:
                return this.place(command, currentPlace);
            case CommandType.LEFT:
            case CommandType.RIGHT:
                return this.turn(command.commandType, currentPlace);
            case CommandType.MOVE:
                return this.move(currentPlace);
        }
        return currentPlace;
    }

    public place(command: Command, currentPlace: PlaceInformation) {
        if (!this.isValidPosition(command.commandParams.posX, command.commandParams.posY)) {
            log('Cannot place at the position', command.commandParams);
            return currentPlace;
        }

        return {
            posX: command.commandParams.posX,
            posY: command.commandParams.posY,
            direction: command.commandParams.direction,
            directionNumber: directionMap[command.commandParams.direction]
        };
    }

    public turn(commandType: CommandType, currentPlace: PlaceInformation) {
        if (!currentPlace) {
            log('Not initialized yet');
            return currentPlace;
        }

        const addFactor = commandType === CommandType.LEFT ? this.totalDirections - 1 : 1;

        currentPlace.directionNumber = (currentPlace.directionNumber + addFactor) % this.totalDirections;
        currentPlace.direction = OrderedDirections[currentPlace.directionNumber];
        log('turning ', commandType, ' >> facing >> ', currentPlace.direction);
        return currentPlace;
    }

    public move(currentPlace: PlaceInformation) {
        if (!currentPlace) {
            log('Not initialized yet');
            return currentPlace;
        }
        const posX = currentPlace.posX + directionMoveX[currentPlace.direction];
        const posY = currentPlace.posY + directionMoveY[currentPlace.direction];
        if (!this.isValidPosition(posX, posY)) {
            log('cannot move forward');
            return currentPlace;
        }
        currentPlace.posX = posX;
        currentPlace.posY = posY;
        log('moving forward', currentPlace.posX, currentPlace.posY);
        return currentPlace;
    }

    private isValidPosition(posX: number, posY: number) {
        return posX >= 0 && posX < this.floorDimension.dimX &&
               posY >= 0 && posY < this.floorDimension.dimY;
    }
}
