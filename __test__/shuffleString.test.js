import shuffleString from '../src/shuffleString';

describe('Function takes string and array of indecies. The string s will be shuffled such that the character at the ith position moves to indices[i] in the shuffled string.', () => {
  test('Should return correct string', () => {
    const str = 'codeleet';
    const expected = 'leetcode';
    expect(shuffleString(str, [4, 5, 6, 7, 0, 2, 1, 3])).toBe(expected);

    const str1 = 'abc';
    expect(shuffleString(str1, [0, 1, 2])).toBe(str1);
  });
});
