export default (number) => {
  const liter = '#';
  const process = (currentNumber, acc) => {
    if (currentNumber > number) {
      return acc.trim();
    }

    const addingStr = `${liter.repeat(currentNumber)}\n`;
    const newLength = acc.length + addingStr.length;
    return process(currentNumber + 1, acc.padEnd(newLength, addingStr));
  };

  return process(1, '');
};
