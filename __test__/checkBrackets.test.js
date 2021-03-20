import checkBrackets from '../src/checkBrackets';

describe('function checkBrackets shold check brackets config in string', () => {
  test('check correct open-close sequence', () => {
    expect(checkBrackets('()', [['(', ')']])).toBeTruthy();
    expect(checkBrackets('(())()', [['(', ')']])).toBeTruthy();
    expect(checkBrackets('(()()', [['(', ')']])).toBeFalsy();
    expect(checkBrackets('(())(', [['(', ')']])).toBeFalsy();
  });

  test('different type of brackets', () => {
    expect(checkBrackets('[(()))]', [['(', ')'], ['[', ']']])).toBeFalsy();
    expect(checkBrackets('[]()([])', [['(', ')'], ['[', ']']])).toBeTruthy();
    expect(checkBrackets('[]()(])', [['(', ')'], ['[', ']']])).toBeFalsy();
  });

  test('similar open-close brackets', () => {
    expect(checkBrackets('|[(())]|', [['(', ')'], ['[', ']'], ['|', '|']])).toBeTruthy();
    expect(checkBrackets('[]()([||])', [['(', ')'], ['[', ']'], ['|', '|']])).toBeTruthy();
    expect(checkBrackets('[]()(|])', [['(', ')'], ['[', ']'], ['|', '|']])).toBeFalsy();
    expect(checkBrackets('[[()([||[][])', [['(', ')'], ['[', '['], ['|', '|']])).toBeFalsy();
  });
});
