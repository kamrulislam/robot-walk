import { Command, directionMap, directionMoveX, directionMoveY, DirectionType, OrderedDirections, PlaceParams } from '../command';
import { CommandType } from '../command';
import { log } from '../log';
import { FloorDimension } from './index.d';

export class Robot {
    private posX: number;
    private posY: number;
    private currentDirection: DirectionType;
    private currentDirectionNumber: number;
    private initialized = false;
    private totalDirections = OrderedDirections.length;
    private output: (param: PlaceParams) => void;
    private floorDimension: FloorDimension;

    constructor(dimension: FloorDimension, output: (param: PlaceParams) => void) {
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
                this.left();
                break;
            case CommandType.RIGHT:
                this.right();
                break;
            case CommandType.MOVE:
                this.move();
                break;
        }
    }

    private place(command: Command) {
        if (this.isValidPosition(command.commandParams.posX, command.commandParams.posY)) {
            this.initialized = true;
            this.posX = command.commandParams.posX;
            this.posY = command.commandParams.posY;
            this.currentDirection = command.commandParams.direction;
            this.currentDirectionNumber = directionMap[this.currentDirection];
        }
    }

    private report() {
        if (this.initialized) {
            this.output({
                posX: this.posX,
                posY: this.posY,
                direction: this.currentDirection
            });
        }
    }

    private left() {
        if (!this.initialized) {
            log('Not initialized yet');
            return;
        }

        this.currentDirectionNumber = (this.currentDirectionNumber + this.totalDirections - 1) % this.totalDirections;
        this.currentDirection = OrderedDirections[this.currentDirectionNumber];
        log('turning left', this.currentDirection);
    }

    private right() {
        if (!this.initialized) {
            log('Not initialized yet');
            return;
        }
        this.currentDirectionNumber = (this.currentDirectionNumber + 1) % this.totalDirections;
        this.currentDirection = OrderedDirections[this.currentDirectionNumber];
        log('turning right', this.currentDirection);
    }

    private move() {
        if (!this.initialized) {
            log('Not initialized yet');
            return;
        }
        const posX = this.posX + directionMoveX[this.currentDirection];
        const posY = this.posY + directionMoveY[this.currentDirection];
        if (!this.isValidPosition(posX, posY)) {
            log('cannot move forward');
            return;
        }
        this.posX = posX;
        this.posY = posY;
        log('moving forward', this.posX, this.posY);
    }

    private isValidPosition(posX: number, posY: number) {
        return posX >= 0 && posX < this.floorDimension.dimX &&
               posY >= 0 && posY < this.floorDimension.dimY;
    }
}
