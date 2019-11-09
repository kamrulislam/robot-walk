import { Command } from '../command';
import { output } from '../output';
import { Robot } from '../robot';
import { FloorDimension } from '../robot/index.d';
import { TableWidthX } from '../robot/table-config';
import { TableWidthY } from '../robot/table-config';

export const executeCommands = (commands: Command[]) => {
    const floorDimension: FloorDimension = {
        dimX: TableWidthX,
        dimY: TableWidthY
    };
    const robot = new Robot(floorDimension, output);

    commands.forEach((command) => {
        robot.apply(command);
    });
};
