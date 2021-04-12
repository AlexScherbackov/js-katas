export default (tree) => {
  const process = (acc, node) => {
    if (!node) {
      return acc;
    }

    if (!node.right && !!node.left && !!node.left.val) {
      acc.push(node.left.val);
    }

    if (!node.left && !!node.right && !!node.right.val) {
      acc.push(node.right.val);
    }

    return [...acc, ...process([], node.left), ...process([], node.right)];
  };

  return process([], tree);
};
