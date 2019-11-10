import { Command } from '../command';
import { ProcessCommand } from '../command-processor/process-command';
import { output } from '../output';
import { Robot } from '../robot';

export const executeCommands = (commands: Command[]) => {
    const robot = new Robot(new ProcessCommand(), output);

    commands.forEach((command) => {
        robot.apply(command);
    });
};
