const checkBrackets1 = (str, config) => {
  const mappedConfig = new Map(config);
  const arrOfStr = str.split('');
  const configEntries = Object.fromEntries(mappedConfig);
  const configKeys = Object.keys(configEntries);
  const calcQuantity = (b, arr) => arr.reduce(
    (acc, i) => (i === b ? acc + 1 : acc),
    0,
  );

  return configKeys.every(
    (openBracket) => {
      const closeBracket = mappedConfig.get(openBracket);
      const openQuantity = calcQuantity(openBracket, arrOfStr);
      const closeQuantity = calcQuantity(closeBracket, arrOfStr);
      if (openBracket === closeBracket && openQuantity % 2 !== 0) {
        return false;
      }
      return openQuantity === closeQuantity;
    },
  );
};

const checkBrackets = (str, config) => {
  const mappedConfig = new Map(config);
  const arrOfStr = str.split('');
  const stackOfBrackets = arrOfStr.reduce(
    (acc, i) => {
      if (mappedConfig.has(i) && mappedConfig.get(i) !== i) {
        return [...acc, i];
      }

      const lastBracket = acc[acc.length - 1];

      if (mappedConfig.get(lastBracket) === i) {
        const newAcc = acc.slice(0, acc.length - 1);
        return newAcc;
      }
      return [...acc, i];
    },
    [],
  );

  return stackOfBrackets.length === 0;
};

export default checkBrackets;
