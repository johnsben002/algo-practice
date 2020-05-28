/**
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead. 
 */

const orangesRotting = grid => {
  console.log(grid);
  // run through the grid and store all the coordinates of the rotten oranges in a queue and the fresh oranges in a set
  // do a BFS on the rotten oranges and take fresh oranges out of the set/include the minute it happened when you put them in the queue
  // once the set is empty, return the largest minute number
  const queue = [];
  const stillFresh = new Set();

  // iterate through grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 2) {
        queue.push([i,j,0]);
      } else if (grid[i][j] === 1) {
        stillFresh.add([i,j]);
      }
    }
  }

  console.log(queue);
  console.log(stillFresh);
};



const input = [[2,1,1],[1,1,0],[0,1,1]];
console.log(orangesRotting(input));