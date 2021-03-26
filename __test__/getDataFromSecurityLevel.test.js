import getDataFromSecurityLevel from '../src/getDataFromSecurityLevel';

describe('function takes matrix and number of level. return data from level', () => {
  test('should work', () => {
    const arr = [1, 2, 3, [4, 5], [6, [7]], [8, 9]];
    expect(getDataFromSecurityLevel(arr, 0)).toEqual([1, 2, 3]);
    expect(getDataFromSecurityLevel(arr, 1)).toEqual([4, 5, 6, 8, 9]);
    expect(getDataFromSecurityLevel(arr, 2)).toEqual([7]);
    expect(getDataFromSecurityLevel(arr, 3)).toEqual([]);
  });
});
