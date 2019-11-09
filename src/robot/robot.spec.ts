import { PlaceParams, CommandType, DirectionType } from '../command';
import { Robot } from './robot';

describe('Robot:', () => {
    let mockFunction: jest.Mock<PlaceParams, [PlaceParams]>;
    beforeEach(() => {
        return mockFunction = jest.fn((x: PlaceParams) => x);
    });
    test('initalization', ()=> {
        const robot = new Robot({dimX: 5, dimY: 5}, mockFunction);
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
            direction: DirectionType.NORTH
        });
    });
});
