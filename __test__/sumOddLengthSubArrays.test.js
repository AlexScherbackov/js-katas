import sumOddLengthSubarrays from '../src/sumOddLengthSubarrays';

describe(`
Given an array of positive integers arr, calculate the sum of all possible odd-length subarrays.

A subarray is a contiguous subsequence of the array.

Return the sum of all odd-length subarrays of arr.
`, () => {
  test('[1,4,2,5,3] => 58', () => {
    expect(sumOddLengthSubarrays([1, 4, 2, 5, 3])).toBe(58);
  });

  test('[1,2] => 3', () => {
    expect(sumOddLengthSubarrays([1, 2])).toBe(3);
  });
});
