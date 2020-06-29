var shortestPathBinaryMatrix = function(grid) {
  // edge case: top left or bottom right are blocked
  const endIndex = grid.length-1;
  if (grid[0][0] === 1 || grid[endIndex][endIndex] === 1) {
    return -1;
  }

  // edge case: matrix is only length of 1
  if (grid.length === 1) {
    return 1;
  }

  // intialize queue for bfs
  const queue = [[0, 0, 1]];
  const possibleMoves = [[-1, -1], [-1, 0], [-1, 1], [0, 1], [0, -1], [1, -1], [1, 0], [1, 1]];
  
  while (queue.length) {
    // dequeue current node
    let [row, col, step] = queue.shift();
    // array of possible moves from current coordinate (8-directional)
    for (let [rowDiff, colDiff] of possibleMoves) {
      let newRow = row + rowDiff;
      let newCol = col + colDiff;
      // make sure new coordinates are still on board
      if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
        // if new coordinates are bottom left of grid, increase step and return
        if (newRow === endIndex && newCol === endIndex) {
          return step + 1;
        }
        // if zero, add to queue and increase step
        if (grid[newRow][newCol] === 0) {
          queue.push([newRow, newCol, step + 1]);
          grid[newRow][newCol] = 1;
        }
      }
    }
  }

  // if there is no clear path
  return -1;
};

const input1 = [[0,1],[1,0]];
const input2 = [[0,0,0],[1,1,0],[1,1,0]];

console.log(shortestPathBinaryMatrix(input1)) // 2
console.log(shortestPathBinaryMatrix(input2)); // 4
