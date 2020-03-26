// given a binary tree presented breadth-first as an array, write a function that returns the branch of the tree that has a larger sum value
const biggerBranch = (arr) => {
  // in a breadth-first array, children are distributed as follows:
      // left children of node are in 2i+1 position
      // right children of node are in 2i+2 position
  
  // if no nodes or just 1 node, return an empty string
  if (arr.length <= 1) return "";
  
  // initialize leftBranch and rightBranch sum totals
  let leftBranch = 0;
  let rightBranch = 0;
  
  // helper function to find all children of a node
  const findChildren = (arr, i, branch) => {
    // base case
    if (i >= arr.length) return;

    // add current node value to respective branch total
    if (branch === 'left') leftBranch += arr[i];
    if (branch === 'right') rightBranch += arr[i];

    // recursively find children nodes
    findChildren(arr, 2*i+1, branch);
    findChildren(arr, 2*i+2, branch);
  }
  
  // call findChildren on left and right child nodes of the base node (arr[0])
  findChildren(arr, 1, 'left');
  findChildren(arr, 2, 'right');
  
  if (leftBranch > rightBranch) return "Left";
  if (rightBranch > leftBranch) return "Right";
  if (leftBranch === rightBranch) return "";
};

console.log(biggerBranch([3,6,2,9,-1,10]));
console.log(biggerBranch([4]));