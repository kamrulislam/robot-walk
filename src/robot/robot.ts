import { Command, PlaceParams } from '../command';
import { CommandType } from '../command';
import { CommandProcessor, PlaceInformation } from '../command-processor/index.d';
import { log } from '../log';

export class Robot {
    private output: (param: PlaceParams) => void;
    private commandProcessor: CommandProcessor;
    private placeInformation: PlaceInformation;

    constructor(
        commandProcessor: CommandProcessor,
        output: (param: PlaceParams) => void) {
        this.output = output;
        this.commandProcessor = commandProcessor;
    }

    public apply(command: Command) {
        if(command.commandType === CommandType.REPORT) {
            return this.report();
        }
        this.placeInformation = this.commandProcessor.apply(command, this.placeInformation);
    }

    private report() {
        if (!this.placeInformation) {
            log('Not initialized yet');
            return false;
        }

        this.output(this.placeInformation);
        return true;
    }

}
