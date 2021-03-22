import removeVowelsFromString from '../src/removeVowelsFromString';

test('function takes a string and return new string containing only consonants from the original', () => {
  expect(removeVowelsFromString('welcome to geeksforgeeks')).toBe('wlcm t gksfrgks');
  expect(removeVowelsFromString('WElcome to geeksforgeeks')).toBe('Wlcm t gksfrgks');
});
