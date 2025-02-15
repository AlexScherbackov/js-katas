import containsDuplicate from '../src/containsDuplicate';

const arrayWithDuplicate = [1, 2, 3, 1];
const arrayWithDuplicate1 = [1, 2, 3, '1', {}, ['a', 'c']];
const arrayWhithoutDuplicate = [1, 2, 3, 4];

describe('Function should take a array. If array has duplicate elements function should return true else false', () => {
  test('Should return true', () => {
    expect(containsDuplicate(arrayWithDuplicate)).toBeTruthy();
  });

  test('should return false', () => {
    expect(containsDuplicate(arrayWhithoutDuplicate)).toBeFalsy();
  });

  test('should return false cause different types', () => {
    expect(containsDuplicate(arrayWithDuplicate1)).toBeFalsy();
  });
});
