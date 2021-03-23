import numIdenticalPairs from '../src/numIdenticalPairs';

test(`function numIdenticalPairs take an array of integers and return a number of good pairs.
Pairs is called good if nums[i] == nums[j] and i < j`, () => {
  expect(numIdenticalPairs([1, 2, 3, 1, 1, 3])).toBe(4);
  expect(numIdenticalPairs([1, 1, 1, 1])).toBe(6);
  expect(numIdenticalPairs([1, 2, 3])).toBe(0);
});
