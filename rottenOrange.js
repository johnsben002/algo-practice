/**
In a given grid, each cell can have one of three values:

the value 0 representing an empty cell;
the value 1 representing a fresh orange;
the value 2 representing a rotten orange.
Every minute, any fresh orange that is adjacent (4-directionally) to a rotten orange becomes rotten.

Return the minimum number of minutes that must elapse until no cell has a fresh orange.  If this is impossible, return -1 instead. 
 */

const orangesRotting = grid => {
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
        stillFresh.add(`${i},${j}`);
      }
    }
  }

  // initialize counter variable for minutes
  let minutes = 0;

  while (queue.length) {
    let [i,j,min] = queue.shift();
    // increase min counter
    min++;
    // check surrounding coordinates
    for (let [newI, newJ] of [[i, j+1], [i, j-1], [i+1, j], [i-1, j]]) {
      // make sure coordinates are on the grid
      if (newI >= 0 && newI < grid.length && newJ >= 0 && newJ < grid[0].length) {
        // if the orange is fresh, make it rotton and add it's info to the queue
        if (grid[newI][newJ] === 1) {
          grid[newI][newJ] = 2;
          queue.push([newI, newJ, min]);
          // delete coordinate from stillFresh set
          stillFresh.delete(`${newI},${newJ}`);
          // reassign minutes variable if it is not up to date
          if (minutes < min) {
            minutes = min;
          }
        }
      }
    }
  }

  // if there are still fresh oranges, return -1
  if (stillFresh.size > 0) return -1;

  // otherwise return minutes
  return minutes;
};

const input = [[2,1,1],[1,1,0],[0,1,1]];
console.log(orangesRotting(input));