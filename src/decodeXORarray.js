export default (encoded, firstEl) => encoded.reduce((acc, item) => (
  [...acc, item ^ acc[acc.length - 1]]
), [firstEl]);
