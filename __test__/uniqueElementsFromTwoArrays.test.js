import unique from '../src/uniqueElementsFromTwoArrays';

describe('unique get two sorted arrays and return array if unique elements', () => {
  test('origin arrays should be immutable', () => {
    const testArrA = [1, 2, 3];
    const testArrB = [1, 2];

    unique(testArrA, testArrB);
    expect(testArrA).toEqual([1, 2, 3]);
    expect(testArrB).toEqual([1, 2]);
  });

  test('unique should return an array of unique elements', () => {
    const testArrA = [1, 2, 2, 2, 3, 3, 5];
    const testArrB = [1, 3, 3, 4, 5];
    expect(unique(testArrA, testArrB)).toEqual([1, 3, 3, 5]);
  });
});
