import maxNestingDepthParentheses from '../src/maxNestingDepthParentheses';

describe('function takes a vps string and return maximum of nesting depth', () => {
  test('should work', () => {
    const s1 = '(1+(2*3)+((8)/4))+1';
    expect(maxNestingDepthParentheses(s1)).toBe(3);
    const s2 = '(1)+((2))+(((3)))';
    expect(maxNestingDepthParentheses(s2)).toBe(3);
    const s3 = '1+(2*3)/(2-1)';
    expect(maxNestingDepthParentheses(s3)).toBe(1);
  });

  test('empty string and string without parentheses', () => {
    expect(maxNestingDepthParentheses('')).toBe(0);
    expect(maxNestingDepthParentheses('abc')).toBe(0);
  });
});
