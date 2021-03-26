export default (nums) => nums.reduce((acc, item, index, arr) => {
  if (index % 2 !== 0) {
    return acc;
  }

  const newArr = new Array(item);
  newArr.fill(arr[index + 1]);
  return [...acc, newArr];
}, []).flat();
