import { Command } from '../command';
import { output } from '../output';
import { Robot } from '../robot';

export const executeCommands = (commands: Command[]) => {
    const robot = new Robot(output);

    commands.forEach((command) => {
        robot.apply(command);
    });
};
