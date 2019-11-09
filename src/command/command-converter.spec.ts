import { DirectionType } from '.';
import { commandConverter, getCommandFromString, getParamsForPlaceCommand } from './command-converter';
import { CommandType } from './command-type';

describe('getParamsForPlaceCommand:', ()=> {
    test('test string to PlaceParams object conversion', () => {
        expect(getParamsForPlaceCommand('place 2,3,north'.toUpperCase()))
            .toEqual({posX: 2, posY: 3, direction: DirectionType.NORTH});
        expect(getParamsForPlaceCommand('PLACE 20,30,WEST'))
            .toEqual({posX: 20, posY: 30, direction: DirectionType.WEST});
    });
    
})

describe('getCommandFromString:', () => {
    test('test string to Command object conversion', () => {
        expect(getCommandFromString('MOVE')).toEqual({commandType: CommandType.MOVE, commandParams: undefined});
        expect(getCommandFromString('move')).toEqual({commandType: 'move', commandParams: undefined});
    });
});

describe('commandConverter:', () => {
    
    test('test multiple case insensitive string to command conversion', () => {
        const commands = commandConverter([
            'place 2,3,north',
            'move',
            'left',
            'report',
            'right',
            'place 0,0,west'
        ]);
        expect(commands.length).toBe(6);
        expect(commands).toContainEqual({
            commandType: CommandType.PLACE,
            commandParams: {posX: 2, posY: 3, direction: DirectionType.NORTH}});
        expect(commands).toContainEqual({
            commandType: CommandType.MOVE,
            commandParams: undefined});
        expect(commands[0].commandType).toBe(CommandType.PLACE);
    
    });
})
