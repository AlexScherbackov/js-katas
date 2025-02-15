import singleRowKeyboard from '../src/singleRowKeyboard';

describe('Function should calc time that we write a phrase', () => {
  test('it\'s should work', () => {
    const config = 'F-1asd62qce3';
    expect(singleRowKeyboard(config, 'ecq')).toBe(4);

    const config2 = 'pqrstuvwxyzabcdefghijklmno';
    expect(singleRowKeyboard(config2, 'leetcode')).toBe(73);
  });
});
