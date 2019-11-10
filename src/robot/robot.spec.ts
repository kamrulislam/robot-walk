import { CommandType, directionMap, DirectionType, PlaceParams } from '../command';
import { ProcessCommand } from '../command-processor/process-command';
import { Robot } from './robot';

describe('Robot:', () => {
    let mockFunction: jest.Mock<PlaceParams, [PlaceParams]>;
    beforeEach(() => {
        return mockFunction = jest.fn((x: PlaceParams) => x);
    });
    test('initalization and report', ()=> {
        const robot = new Robot(new ProcessCommand(), mockFunction);
        robot.apply({
            commandType: CommandType.PLACE,
            commandParams: {
                posX: 0,
                posY: 0,
                direction: DirectionType.NORTH
            }
        });
        robot.apply({
            commandType: CommandType.REPORT
        });

        expect(mockFunction.mock.calls.length).toBe(1);
        expect(mockFunction.mock.calls[0][0]).toEqual({
            posX: 0,
            posY: 0,
            directionNumber: directionMap[DirectionType.NORTH],
            direction: DirectionType.NORTH
        });
    });
});
