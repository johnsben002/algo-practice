/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

 /**
  * 
  * A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right
  */
 
  // recursive solution — times out on larger inputs
var xuniquePaths = function(m, n) {
  // make a m x n matrix and mark the start and end
  const grid = [...Array(n)].map(e => new Array(m).fill(0));
  // mark ending spot
  grid[n-1][m-1] = 1;

  let paths = 0;

  const findPaths = (y, x, grid) => {
    if (y >= n || x >= m) {
      return;
    } else if (grid[y][x] === 1) {
      paths++;
      return;
    }

    // go down
    findPaths(y+1, x, grid);
    // go right
    findPaths(y, x+1, grid);
  
    return;
  };

  findPaths(0,0, grid);
  return paths;
};

// dynamin programming solution
var uniquePaths = function(m,n) {
  const grid = [...Array(n)].map(e => Array(m).fill(0));
  
  // we are going to build up the # of possible paths for each index
  // bc we can only move right and down, the first row and column get autofilled to 1 bc we can only traverse each once
  for (let i = 0; i < grid.length; i++) {
    grid[i][0] = 1;
  }
  for (let i = 0; i < grid[0].length; i++) {
    grid[0][i] = 1;
  }
  // build up # of paths to each index by just adding the grid from the top and left
  for (let y = 1; y < grid.length; y++) {
    for (let x = 1; x < grid[0].length; x++) {
      grid[y][x] = grid[y-1][x] + grid[y][x-1];
    }
  }
  // return ending index
  return grid[n-1][m-1];
};

console.log(uniquePaths(7,3));
