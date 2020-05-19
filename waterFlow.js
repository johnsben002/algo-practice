/**
 * 
Given an m x n matrix of non-negative integers representing the height of each unit cell in a continent, the "Pacific ocean" touches the left and top edges of the matrix and the "Atlantic ocean" touches the right and bottom edges.

Water can only flow in four directions (up, down, left, or right) from a cell to another one with height equal or lower.

Find the list of grid coordinates where water can flow to both the Pacific and Atlantic ocean.

Note:

The order of returned grid coordinates does not matter.
Both m and n are less than 150.
 */

var pacificAtlantic = function(matrix) {
    // edge case
    if (!matrix.length) {
      return [];
    }

    // make matracies for pacific and atlantic oceans
    let pacific = makeMatrix(matrix);
    let atlantic = makeMatrix(matrix);

    // run bfs on all edges of matrix that represent the ocean coastline
    for (let row = 0; row < matrix.length; row++) {
      bfs(row, 0, pacific, matrix);
      bfs(row, matrix[0].length-1, atlantic, matrix);
    }
    for (let col = 0; col < matrix[0].length; col++) {
      bfs(0, col, pacific, matrix);
      bfs(matrix.length-1, col, atlantic, matrix);
    }

    // return union of pacific and atlantic matracies that match
    return union(atlantic, pacific);
};

// makes a new matrix filled with false markers - to be turned true if a coordinate can reach the ocean
const makeMatrix = matrix => {
  return new Array(matrix.length).fill().map(row => new Array(matrix[0].length).fill(false));
}

// breadth first search 
const bfs = (x, y, ocean, matrix) => {
  let queue = [[x,y]];
  ocean[x][y] = true; // set the current coordinate to true bc it touches the correct ocean
  while (queue.length) {
    let [i,j] = queue.shift();
    // check surrounding coordinates of current
    for (let [newI, newJ] of [[i, j+1], [i, j-1], [i+1, j], [i-1, j]]) {
      // make sure new coordinates are on map
      if (newI >= 0 && newI < ocean.length && newJ >= 0 && newJ < ocean[0].length) {
        // test if the cell height of new coordinates are larger than previous and thus can flow to previous
        // also check if it is already turned true so we don't add it in the queue again
        if (matrix[i][j] <= matrix[newI][newJ] && !ocean[newI][newJ]) {
          // push into queue and set relevant ocean coordinate to true
          queue.push([newI, newJ]);
          ocean[newI][newJ] = true;
        }
      }
    }
  }
}

// check to see which coordinates are true in both atlantic and pacific
const union = (atlantic, pacific) => {
  let union = [];
  for (let i = 0; i < atlantic.length; i++) {
    for (let j = 0; j < atlantic[0].length; j++) {
      if (atlantic[i][j] && pacific[i][j]){
        union.push([i,j]);
      }
    }
  }
  return union;
}

console.log(pacificAtlantic([[1,2,2,3,5],[3,2,3,4,4],[2,4,5,3,1],[6,7,1,4,5],[5,1,1,2,4]]));

// EXPECTED OUTPUT: [[0,4],[1,3],[1,4],[2,2],[3,0],[3,1],[4,0]]