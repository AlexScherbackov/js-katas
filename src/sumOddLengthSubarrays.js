export default (arr) => {
  const process = (summ, size) => {
    if (size > arr.length) {
      return summ;
    }

    const newSumm = arr.reduce((acc, item, index) => (index + size <= arr.length
      ? arr.slice(index, index + size).reduce((ac, i) => ac + i, acc)
      : acc),
    summ);
    return process(newSumm, size + 2);
  };

  return process(0, 1);
};
