import { isValidInputString } from './is-valid-input-string';

test('isValidInputString test :move', () => {
    expect(isValidInputString('move')).toBe(true);
    expect(isValidInputString('move 3')).toBe(false);
    expect(isValidInputString('MOVE')).toBe(true);
});

test('isValidInputString test :place', () => {
    expect(isValidInputString('place')).toBe(false);
    expect(isValidInputString('place 3,4,5')).toBe(false);
    expect(isValidInputString('place 3,4,north')).toBe(true);
    expect(isValidInputString('place 3,4, north')).toBe(true);
    expect(isValidInputString('place 03, 04, north')).toBe(true);
});
