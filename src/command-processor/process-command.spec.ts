import { CommandType } from '../command';
import { DirectionType } from '../command/direction';
import { ProcessCommand } from './process-command';

describe('ProcessCommand', () => {
    let processCommand: ProcessCommand;
    beforeEach(() => {
        processCommand = new ProcessCommand();
    });
    test('test place command', () => {
        const placeInformation = processCommand.place({
            commandType: CommandType.PLACE,
            commandParams: {
                posX: 0,
                posY: 0,
                direction: DirectionType.NORTH
            }
        }, undefined);

        expect(placeInformation).toBeDefined();
    });
});
