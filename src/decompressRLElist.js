export default (nums) => {
  const process = (freq, value, arr, acc) => {
    if (arr.length === 0 && freq === 0) {
      return acc;
    }

    if (freq === 0) {
      const [newFreq, newValue, ...newRest] = arr;
      return process(newFreq, newValue, newRest, acc);
    }

    return process(freq - 1, value, arr, [...acc, value]);
  };
  const [freq, value, ...rest] = nums;
  return process(freq, value, rest, []);
};
