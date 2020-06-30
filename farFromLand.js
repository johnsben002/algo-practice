/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * Given an N x N grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized and return the distance.

The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.

If no land or water exists in the grid, return -1.
 */

var xmaxDistance = function(grid) {
    // array of shortest land distances
    const distances = [];
    // iterate through grid, and check how many steps the nearest 1 is from it
    for (let row = 0; row < grid.length; row++) {
      for (let col = 0; col < grid[0].length; col++) {
        // if 0, run bfs to find shortest path to 1;
        if (grid[row][col] === 0) {
          const shortestDist = bfs(row, col);
          distances.push(shortestDist);
        }
      }
    }

    function bfs(row, col) {
      const visited = new Set();
      const queue = [[row, col, 0]];
      visited.add(`${row},${col}`);

      while (queue.length) {
        // dequeue first node and mark as visited,
        [row, col, dist] = queue.shift();

        // add any surrounding nodes that have not been visited to queue
        for (let [newRow, newCol] of [[row, col+1], [row, col-1], [row+1, col], [row-1, col]]) {
          // make sure coordinates are on the grid
          if (newRow >= 0 && newRow < grid.length && newCol >= 0 && newCol < grid[0].length) {
            // check to see if not visited and if a zero
            if (!visited.has(`${newRow},${newCol}`) && grid[newRow][newCol] === 0) {
              visited.add(`${newRow},${newCol}`);
              queue.push([newRow, newCol, dist + 1]);
              // check if we have hit an island 1
            } else if (!visited.has(`${newRow},${newCol}`) && grid[newRow][newCol] === 1) {
              return dist+1;
            } 
          }
        }
      }
      // if we go through all of the BFS without finding a single 1
      return -1;
    }

    // edge case: no zeros
    if (!distances.length) return -1;
    return Math.max(...distances);
};

const maxDistance = grid => {

};


const trial1 = [[1,0,0],[0,0,0],[0,0,0]];
const trial2 = [[1,0,1],[0,0,0],[1,0,1]];

console.log(maxDistance(trial1)); // 4
console.log(maxDistance(trial2)); // 2
console.log(maxDistance([[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]));