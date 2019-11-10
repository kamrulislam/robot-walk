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

    test('test left turn command', () => {
        let placeInformation = processCommand.turn(CommandType.LEFT, undefined);

        expect(placeInformation).toBeUndefined();
        placeInformation = processCommand.place({
            commandType: CommandType.PLACE,
            commandParams: {
                posX: 0,
                posY: 0,
                direction: DirectionType.NORTH
            }
        }, undefined);

        placeInformation = processCommand.turn(CommandType.LEFT, placeInformation);
        expect(placeInformation).toEqual({
            ...placeInformation,
            direction: DirectionType.WEST
        });

    });

    test('test right turn command', () => {
        let placeInformation = processCommand.turn(CommandType.RIGHT, undefined);

        expect(placeInformation).toBeUndefined();
        placeInformation = processCommand.place({
            commandType: CommandType.PLACE,
            commandParams: {
                posX: 0,
                posY: 0,
                direction: DirectionType.NORTH
            }
        }, undefined);

        placeInformation = processCommand.turn(CommandType.RIGHT, placeInformation);
        expect(placeInformation).toEqual({
            ...placeInformation,
            direction: DirectionType.EAST
        });

    });

    test('test Move command', () => {
        let placeInformation = processCommand.turn(CommandType.RIGHT, undefined);

        expect(placeInformation).toBeUndefined();
        placeInformation = processCommand.place({
            commandType: CommandType.PLACE,
            commandParams: {
                posX: 0,
                posY: 0,
                direction: DirectionType.NORTH
            }
        }, undefined);

        placeInformation = processCommand.move(placeInformation);
        expect(placeInformation).toEqual({
            ...placeInformation,
            posY: 1
        });

        placeInformation = processCommand.move(placeInformation);
        expect(placeInformation).toEqual({
            ...placeInformation,
            posY: 2
        });

        placeInformation = processCommand.turn(CommandType.RIGHT, placeInformation);
        expect(placeInformation).toEqual({
            ...placeInformation,
            direction: DirectionType.EAST
        });

    });
});
