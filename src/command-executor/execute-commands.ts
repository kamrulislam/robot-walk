import { Command } from '../command';
import { Robot } from '../robot';


export const executeCommands = (commands: Array<Command>) => {
    const robot = new Robot();

    commands.forEach(command => {
        robot.apply(command);
    });        
}