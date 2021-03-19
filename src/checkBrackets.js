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
    (k) => calcQuantity(k, arrOfStr) === calcQuantity(mappedConfig.get(k), arrOfStr),
  );
};

export default checkBrackets;
