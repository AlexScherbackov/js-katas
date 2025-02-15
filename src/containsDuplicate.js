export default (arr) => {
  const clearArr = Array.from(new Set(arr));
  return clearArr.length !== arr.length;
};
