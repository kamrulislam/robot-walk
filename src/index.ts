import { commandConverter } from './command';
import { executeCommands } from './command-executor';
import { getInputAndProcess } from './input-processor';
import { log } from './log';

getInputAndProcess().then((validInputs) => {
  log('valid inputs', validInputs);
  const commands = commandConverter(validInputs);
  executeCommands(commands);
}).catch((err) => {
  log('Error occurred...', err);
});
