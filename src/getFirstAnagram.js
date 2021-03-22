export default (str, arr) => {
  const anagrams = arr.filter((i) => str.split('').sort().join('') === i.split('').sort().join(''));
  return anagrams.length > 1 ? anagrams[0] : null;
};
