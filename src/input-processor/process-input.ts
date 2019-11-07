import { readStdinAsync } from './read-sdtin';

export const getInputAndProcess = async () => {
    const result = await readStdinAsync();
    console.log(result);
}

