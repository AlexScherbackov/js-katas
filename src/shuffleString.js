export default (s, indices) => s
  .split('')
  .reduce((acc, item, index) => {
    const position = indices[index];
    acc[position] = item;
    return acc;
  },
  [])
  .join('');
