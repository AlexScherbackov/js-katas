const maxNestingDepthParentheses = (str) => {
  const parenthesesArr = str.match(/[()]/g);
  const openBracket = '(';

  if (!parenthesesArr) {
    return 0;
  }

  const mxDepthObj = parenthesesArr.reduce(
    ({ stack, currentMax }, item) => {
      if (item === openBracket) {
        return {
          currentMax,
          stack: [...stack, item],
        };
      }

      const newStack = stack.slice(0, stack.length - 1);

      return {
        currentMax: Math.max(currentMax, stack.length),
        stack: newStack,
      };
    },
    {
      stack: [],
      currentString: '',
      currentMax: 0,
    },
  );

  return mxDepthObj.currentMax;
};

export default maxNestingDepthParentheses;
