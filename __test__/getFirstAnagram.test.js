import getFirstAnagram from '../src/getFirstAnagram';

describe('function getFirstAnagram takes string and array of string and returns first anagram if array has it', () => {
  test('if array don\'t have anagram function should returns null', () => {
    expect(getFirstAnagram('str', [])).toBeNull();
  });

  test('if array has only one anagram function should returns null', () => {
    expect(getFirstAnagram('str', ['tsr', 'aef', 'bfa'])).toBeNull();
  });

  test('if array has two or more anagram function should returns first of them', () => {
    console.log(getFirstAnagram('str', ['tsr', 'aef', 'bfa', 'rst']));
    expect(getFirstAnagram('str', ['tsr', 'aef', 'bfa', 'rst'])).toBe('tsr');
  });
});
