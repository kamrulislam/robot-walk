import { getCommandFromString } from './command-converter';
import { CommandType } from './command-type';

test('getCommandFromString test string to command object', () => {
    expect(getCommandFromString('MOVE')).toEqual({commandType: CommandType.MOVE, commandParams: undefined});
    expect(getCommandFromString('move')).toEqual({commandType: 'move', commandParams: undefined});
});
