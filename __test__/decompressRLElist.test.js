import decompress from '../src/decompressRLElist';

describe(`
We are given a list nums of integers representing a list compressed with run-length encoding.
Consider each adjacent pair of elements [freq, val] = [nums[2*i], nums[2*i+1]] (with i >= 0).  
For each such pair, there are freq elements with value val concatenated in a sublist.
Concatenate all the sublists from left to right to generate the decompressed list.
Return the decompressed list.
`, () => {
  test('shold work', () => {
    const nums = [1, 2, 3, 4];
    const expected = [2, 4, 4, 4];
    expect(decompress(nums)).toEqual(expected);
  });
});
