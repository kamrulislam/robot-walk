export enum DirectionType {
    NORTH = 'NORTH',
    EAST = 'EAST',
    SOUTH = 'SOUTH',
    WEST = 'WEST'
}

export const directionMap = {
    [DirectionType.NORTH]: 0,
    [DirectionType.EAST]: 1,
    [DirectionType.SOUTH]: 2,
    [DirectionType.WEST]: 3
};

export const directionMoveX = {
    [DirectionType.NORTH]: 0,
    [DirectionType.EAST]: 1,
    [DirectionType.SOUTH]: 0,
    [DirectionType.WEST]: -1
}

export const directionMoveY = {
    [DirectionType.NORTH]: 1,
    [DirectionType.EAST]: 0,
    [DirectionType.SOUTH]: -1,
    [DirectionType.WEST]: 0
}

/**
 * to simplify the movement operations, direction are ordered anticlockwise. eg., [North, East, South, West]
 * 
 * this will help us easily find out what is our next position 
 * if we move LEFT or RIGHT considering this as circular array 
 * 
 * eg. if the robot is facing North(D=0) 
 *  and turn LEFT, it would be facing West ((D - 1 + 4) % 4 = 3)   
 *  or turn RIGHT, it would be facing East ((D + 1) % 4 = 1) 
 */
export const OrderedDirections = [DirectionType.NORTH, DirectionType.EAST, DirectionType.SOUTH, DirectionType.WEST];