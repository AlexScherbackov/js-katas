export default (head) => {
  const formBinarryStr = (acc, el) => {
    if (!el) {
      return acc;
    }

    const newAcc = `${acc}${el.val}`;

    return formBinarryStr(newAcc, el.next);
  };

  const binarriStr = formBinarryStr('', head);

  return parseInt(binarriStr, 2);
};
