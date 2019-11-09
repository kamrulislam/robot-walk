import { getInputAndProcess } from './input-processor';
import { commandConverter } from './command'
import { log } from './log';
import { executeCommands } from './command-executor';

getInputAndProcess().then(validInputs => {
  log("valid inputs", validInputs);
  const commands = commandConverter(validInputs);
  executeCommands(commands);
}); 