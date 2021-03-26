export default (config, str) => {
  const indecies = str.split('').map((char) => config.indexOf(char));
  return indecies.reduce((acc, item, index, arr) => {
    if (index === 0) {
      return acc + item;
    }

    return acc + Math.abs(item - arr[index - 1]);
  }, 0);
};
