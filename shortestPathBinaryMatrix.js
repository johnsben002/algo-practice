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

  let row, col, step;

  // intialize queue for bfs
  const queue = [[0, 0, 1]];
  // initialize visited set and add starting coordinates
  const visited = new Set();
  visited.add('0,0');
  
  while (queue.length) {
    // dequeue current node
    [row, col, step] = queue.shift();
    // array of possible moves from current coordinate (8-directional)
    const possibleMoves = [[row-1, col-1], [row-1, col], [row-1, col+1], [row, col+1], [row, col-1], [row+1, col-1], [row+1, col], [row+1, col+1]];
    for (let [newRow, newCol] of possibleMoves) {
      // make sure new coordinates are still on board
      if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
        // if new coordinates are bottom left of grid, increase step and return
        if (newRow === endIndex && newCol === endIndex) {
          return step + 1;
        }
        // if zero and not visited, add to queue and increase step
        if (grid[newRow][newCol] === 0 && !visited.has(`${newRow},${newCol}`)) {
          visited.add(`${newRow},${newCol}`);
          queue.push([newRow, newCol, step + 1]);
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
