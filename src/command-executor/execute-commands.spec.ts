import { executeCommands } from './execute-commands';

describe('executeCommands:', () => {
    test('execute command on robot test', () => {
        expect(executeCommands([])).toBeUndefined();
    });    
});
