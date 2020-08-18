/**
Given a board with m by n cells, each cell has an initial state live (1) or dead (0). Each cell interacts with its eight neighbors (horizontal, vertical, diagonal) using the following four rules (taken from the above Wikipedia article):

Any live cell with fewer than two live neighbors dies, as if caused by under-population.
Any live cell with two or three live neighbors lives on to the next generation.
Any live cell with more than three live neighbors dies, as if by over-population..
Any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction.
Write a function to compute the next state (after one update) of the board given its current state. The next state is created by applying the above rules simultaneously to every cell in the current state, where births and deaths occur simultaneously.
 */

var gameOfLife = function(board) {
    // solve in place
    // for each cell we need to know: currently dead or alive? how many alive cells border?
    // iterate through and find next move for each element and store in a set
    // iterate through again and check set and update accordingly
  
  const nextMove = {};
  const update = (i, j) => {
    const current = board[i][j];
    let numLiving = 0;
    const dirs = [[-1,0],[-1,1],[0,1],[1,1],[1,0],[1,-1],[0,-1],[-1,-1]];
    for (let [changeI, changeJ] of dirs) {
      let newI = i + changeI;
      let newJ = j + changeJ;
      // check if on board
      if (newI >= 0 && newI < board.length && newJ >= 0 && newJ < board[0].length) {
        // count number of living surrounding
        if (board[newI][newJ] === 1) numLiving++;
      }
    }
    // for living
    if (current === 1) {
      if (numLiving < 2 || numLiving > 3) {
        nextMove[`${i},${j}`] = 0;
      } else {
        nextMove[`${i},${j}`] = 1;
      }
    }

    // for dead
    if (current === 0) {
      if (numLiving === 3) {
        nextMove[`${i},${j}`] = 1;
      } else {
        nextMove[`${i},${j}`] = 0;
      }
    }
    
  };

  // run through updates
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      update(i,j);
    }
  }

  // check nextMove and update as needed
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
        board[i][j] = nextMove[`${i},${j}`];
      }
    }
};

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));