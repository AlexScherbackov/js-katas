import runningSum from '../src/runningSum';

test('Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4]', () => {
    expect(runningSum([1,2,3,4])).toEqual([1,3,6,10]);
})