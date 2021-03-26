const getData = (arr, level) => {
  if (level === 0) {
    return arr.filter((item) => typeof item !== 'object');
  }
  const nextLevel = arr.filter((item) => typeof item === 'object').flat();
  return getData(nextLevel, level - 1);
};

export default getData;
