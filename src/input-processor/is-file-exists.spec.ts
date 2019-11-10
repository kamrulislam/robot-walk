import { isFileExistsAsync } from './is-file-exists';

describe('isFileExists', () => {
    test('check if a file exists', () => {
        return isFileExistsAsync(__filename).then((data) => {
          expect(data).toBe(true);
        });
    });

    test('check file throws error', () => {
        return isFileExistsAsync('xxxx').catch((err) => {
            expect(err).toBeTruthy();
        });
    });
});
