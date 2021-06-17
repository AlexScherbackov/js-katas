export default (arrA, arrB) => {
  const maxIndex = Math.max(arrA.length - 1, arrB.length - 1);
  const iter = (indexA, indexB, acc) => {
    if (indexA > maxIndex || indexB > maxIndex) {
      return acc;
    }

    const elementA = arrA[indexA];
    const elementB = arrB[indexB];

    if (elementA === elementB) {
      return iter(indexA + 1, indexB + 1, [...acc, elementA]);
    }

    const newIndexA = elementA > elementB ? indexA : indexA + 1;
    const newIndexB = elementA > elementB ? indexB + 1 : indexB;

    return iter(newIndexA, newIndexB, acc);
  };

  return iter(0, 0, []);
};
