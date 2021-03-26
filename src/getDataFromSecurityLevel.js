const getData = (arr, level) => {
  if (level === 0) {
    return arr.filter((item) => !Array.isArray(item));
  }
  const nextLevel = arr.filter((item) => Array.isArray(item)).flat();
  return getData(nextLevel, level - 1);
};

export default getData;
