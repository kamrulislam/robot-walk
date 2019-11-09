import { DirectionType, Command, directionMap } from '../command';
import { CommandType } from '../command';
import { TableWidthY, TableWidthX } from './table-config';


export class Robot {
    private posX: number;
    private posY: number;
    private currentDirection: DirectionType;
    private currentDirectionNumber: number;
    private initialized = false;

    constructor() {

    }


    apply (command: Command) {
        switch(command.commandType) {
            case CommandType.PLACE: 
                this.place(command);
                break;
            case CommandType.REPORT:
                this.report();
                break;
        }
    }

    private place (command: Command) { 
        if (this.isValidPosition(command.commandParams.posX, command.commandParams.posY)) {
            this.initialized = true;
            this.posX = command.commandParams.posX;
            this.posY = command.commandParams.posY;
            this.currentDirection = command.commandParams.direction;
            this.currentDirectionNumber = directionMap[this.currentDirection];
        }
    }

    private report () {
        if (this.initialized) {
            console.log(this.posX, this.posY, this.currentDirection);
        }
    }

    private isValidPosition(posX: number, posY: number) { 
        return posX >= 0 && posX < TableWidthX &&
               posY >= 0 && posY < TableWidthY;
    } 
}