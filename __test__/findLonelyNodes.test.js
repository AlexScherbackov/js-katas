import findLonelyNodes from '../src/findLonelyNodes';

const binarryTreeNode = (val, left, right) => ({
  val, left, right,
});

describe(`
In a binary tree, a lonely node is a node that is the only child of its parent node. 
The root of the tree is not lonely because it does not have a parent node.

Given the root of a binary tree,
return an array containing the values of all lonely nodes in the tree. Return the list in any order.
`, () => {
  test('[1,2,3,null,4] => [4]', () => {
    const binarryTree = binarryTreeNode(
      1,
      binarryTreeNode(2,
        binarryTreeNode(4)),
      binarryTreeNode(3),
    );
    expect(findLonelyNodes(binarryTree)).toEqual([4]);
  });
  test('[7,1,4,6,null,5,3,null,null,null,null,null,2] => [6,2]', () => {
    const binarryTree = binarryTreeNode(
      7,
      binarryTreeNode(1,
        binarryTreeNode(6)),
      binarryTreeNode(
        4,
        binarryTreeNode(5),
        binarryTreeNode(3, null, binarryTreeNode(2)),
      ),
    );
    expect(findLonelyNodes(binarryTree)).toEqual([6, 2]);
  });
});
