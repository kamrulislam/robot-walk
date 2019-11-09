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