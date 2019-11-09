import { Command } from '../command';
import { Robot } from '../robot';
import { output } from '../output';


export const executeCommands = (commands: Array<Command>) => {
    const robot = new Robot(output);

    commands.forEach(command => {
        robot.apply(command);
    });        
}