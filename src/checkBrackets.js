const checkBrackets = (str, config) => {
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
    }
  );
};

export default checkBrackets;
