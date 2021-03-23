export default (nums) => nums.reduce(
  (acc, num, i) => {
    const arrWithoutCurrentNum = nums.slice(i + 1);
    const equalElements = arrWithoutCurrentNum.filter((item) => item === num);
    return acc + equalElements.length;
  },
  0,
);
