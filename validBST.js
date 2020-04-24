class BinaryTreeNode {
  constructor(value) {
    this.value = value;
    this.left  = null;
    this.right = null;
  }

  insertLeft(value) {
    this.left = new BinaryTreeNode(value);
    return this.left;
  }

  insertRight(value) {
    this.right = new BinaryTreeNode(value);
    return this.right;
  }
}

// Determine if the tree is a valid binary search tree

function xisBinarySearchTree(treeRoot) {

  // strategy:
  // - breadth first search so we can exit out early if false

  if (!treeRoot) {
    return true;
  }

  // keep queue of nodes
  const nodes = [];
  // [0] node, [1] lower bound it must fit in, [2] upper bound it must fit in
  nodes.push([treeRoot, -Infinity, Infinity]);

  // breadth first search
  while (nodes.length) {
    // parse out current node and lower and upper bounds
    const nodeSet = nodes.shift();
    const node = nodeSet[0];
    const lowerBound = nodeSet[1];
    const upperBound = nodeSet[2];

    // check if child nodes fall within acceptable range and push to queue if 
    if (node.left) {
      if (node.left.value < lowerBound || node.left.value > node.value) {
        return false;
      } else {
        nodes.push([node.left, lowerBound, node.value]);
      }
    }
    if (node.right) {
      if (node.right.value > upperBound || node.right.value < node.value) {
        return false;
      } else {
        nodes.push([node.right, node.value, upperBound]);
      }
    }
    
  }
  

  return true;
}

// recursive solution
function isBinarySearchTree(treeRoot, lowerBound, upperBound) {
  lowerBound = (typeof lowerBound !== 'undefined') ? lowerBound : Number.NEGATIVE_INFINITY;
  upperBound = (typeof upperBound !== 'undefined') ? upperBound : Number.POSITIVE_INFINITY;

  if (!treeRoot) return true;

  if (treeRoot.value <= lowerBound || treeRoot.value >= upperBound) {
    return false;
  }

  return isBinarySearchTree(treeRoot.left, lowerBound, treeRoot.value) && isBinarySearchTree(treeRoot.right, treeRoot.value, upperBound);
}
















// Tests

let desc = 'valid full tree';
let treeRoot = new BinaryTreeNode(50);
let leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(10);
leftNode.insertRight(40);
let rightNode = treeRoot.insertRight(70);
rightNode.insertLeft(60);
rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = 'both subtrees valid';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(30);
leftNode.insertLeft(20);
leftNode.insertRight(60);
rightNode = treeRoot.insertRight(80);
rightNode.insertLeft(70);
rightNode.insertRight(90);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = 'descending linked list';
treeRoot = new BinaryTreeNode(50);
leftNode = treeRoot.insertLeft(40);
leftNode = leftNode.insertLeft(30);
leftNode = leftNode.insertLeft(20);
leftNode = leftNode.insertLeft(10);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

desc = 'out of order linked list';
treeRoot = new BinaryTreeNode(50);
rightNode = treeRoot.insertRight(70);
rightNode = rightNode.insertRight(60);
rightNode = rightNode.insertRight(80);
assertEquals(isBinarySearchTree(treeRoot), false, desc);

desc = 'one node tree';
treeRoot = new BinaryTreeNode(50);
assertEquals(isBinarySearchTree(treeRoot), true, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}