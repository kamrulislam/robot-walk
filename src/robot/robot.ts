import { Command, directionMap, directionMoveX, directionMoveY, DirectionType, OrderedDirections, PlaceParams } from '../command';
import { CommandType } from '../command';
import { log } from '../log';
import { TableDimension } from './index.d';

export class Robot {
    private posX: number;
    private posY: number;
    private currentDirection: DirectionType;
    private currentDirectionNumber: number;
    private initialized = false;
    private totalDirections = OrderedDirections.length;
    private output: (param: PlaceParams) => void;
    private floorDimension: TableDimension;

    constructor(dimension: TableDimension, output: (param: PlaceParams) => void) {
        this.output = output;
        this.floorDimension = dimension;
    }

    public apply(command: Command) {
        switch(command.commandType) {
            case CommandType.PLACE:
                this.place(command);
                break;
            case CommandType.REPORT:
                this.report();
                break;
            case CommandType.LEFT:
            case CommandType.RIGHT:
                this.turn(command.commandType);
                break;
            case CommandType.MOVE:
                this.move();
                break;
        }
    }

    private place(command: Command) {
        if (!this.isValidPosition(command.commandParams.posX, command.commandParams.posY)) {
            log('Cannot place at the position', command.commandParams);
            return false;
        }

        this.initialized = true;
        this.posX = command.commandParams.posX;
        this.posY = command.commandParams.posY;
        this.currentDirection = command.commandParams.direction;
        this.currentDirectionNumber = directionMap[this.currentDirection];
        return true;
    }

    private report() {
        if (!this.initialized) {
            log('Not initialized yet');
            return false;
        }

        this.output({
            posX: this.posX,
            posY: this.posY,
            direction: this.currentDirection
        });
        return true;
    }

    private turn(commandType: CommandType) {
        if (!this.initialized) {
            log('Not initialized yet');
            return false;
        }

        const addFactor = commandType === CommandType.LEFT ? this.totalDirections - 1 : 1;

        this.currentDirectionNumber = (this.currentDirectionNumber + addFactor) % this.totalDirections;
        this.currentDirection = OrderedDirections[this.currentDirectionNumber];
        log('turning ', commandType, ' >> facing >> ', this.currentDirection);
        return true;
    }

    private move() {
        if (!this.initialized) {
            log('Not initialized yet');
            return false;
        }
        const posX = this.posX + directionMoveX[this.currentDirection];
        const posY = this.posY + directionMoveY[this.currentDirection];
        if (!this.isValidPosition(posX, posY)) {
            log('cannot move forward');
            return false;
        }
        this.posX = posX;
        this.posY = posY;
        log('moving forward', this.posX, this.posY);
        return true;
    }

    private isValidPosition(posX: number, posY: number) {
        return posX >= 0 && posX < this.floorDimension.dimX &&
               posY >= 0 && posY < this.floorDimension.dimY;
    }
}
