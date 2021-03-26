import decode from '../src/decodeXORarray';

describe('function takes an encoded array and first element of original array. Rreturn origin XOR decode array', () => {
  test('should works', () => {
    expect(decode([1, 2, 3], 1)).toEqual([1, 0, 2, 1]);
    expect(decode([6, 2, 7, 3], 4)).toEqual([4, 2, 0, 7, 4]);
  });
});
