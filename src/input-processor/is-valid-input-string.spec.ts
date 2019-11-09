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

test('isValidInputString test :report', () => {
    expect(isValidInputString('report')).toBe(true);
    expect(isValidInputString('report 3,4,5')).toBe(false);
    expect(isValidInputString('REPORT')).toBe(true);
});

test('isValidInputString test :left', () => {
    expect(isValidInputString('LEFT')).toBe(true);
    expect(isValidInputString('left')).toBe(true);
    expect(isValidInputString('left 3')).toBe(false);
});

test('isValidInputString test :right', () => {
    expect(isValidInputString('RIGHT')).toBe(true);
    expect(isValidInputString('right')).toBe(true);
    expect(isValidInputString('right 3')).toBe(false);
});
