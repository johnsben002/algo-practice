/**
 * @description 
 * Given a 2D board containing 'X' and 'O' (the letter O), capture all regions surrounded by 'X'.
 * A region is captured by flipping all 'O's into 'X's in that surrounded region.
 * 
 * Surrounded regions shouldn’t be on the border, which means that any 'O' on the border of the board are not flipped to 'X'. Any 'O' that
 * is not on the border and it is not connected to an 'O' on the border will be flipped to 'X'. Two cells are connected if they are adjacent
 * cells connected horizontally or vertically.
 * 
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var xsolve = function(board) {
    /**
     * @strategy
     * 1. iterate through board and run dfs function on any O that exists and is NOT on a border
     * 2. dfs should turn all O's to X's IF the region of O's does not include a border O
     */

  const repeatCheck = new Set();

  // iterate through all non-border nodes of grid
  for (let i = 1; i < board.length-1; i++) {
    for (let j = 1; j < board[0].length-1; j++) {
      if (board[i][j] === 'O' && !repeatCheck.has(`${i},${j}`)) {
        let repeated = dfs(i, j);
        if (typeof repeated === 'object') {
          repeated.forEach(el => {
            repeatCheck.add(el);
          })
        }
      }
    }
  }

  function dfs(i, j) {
    // initialize visited and add first node
    const visited = new Set();
    visited.add(`${i},${j}`);
    // change node to 'X'
    board[i][j] = 'X';

    const stack = [[i, j]];
    const difs = [[-1,0], [1,0], [0,1], [0,-1]];

    while (stack.length) {
      let [row, col] = stack.pop();
      for (let [rdif, cdif] of difs) {
        let newRow = row + rdif;
        let newCol = col + cdif;
        // make sure coordinates are still on the board
        if (newRow >= 0 && newRow < board.length && newCol >= 0 && newCol < board[0].length) {
          // if border and O, change all visited nodes back to X and return
          if ((newRow === 0 || newRow === board.length-1 || newCol === 0 || newCol === board[0].length-1 ) && board[newRow][newCol] === 'O' && !visited.has(`${newRow},${newCol}`)) {
            visited.forEach(x => {
              let arr = x.split(',');
              let row = Number(arr[0]);
              let col = Number(arr[1]);
              board[row][col] = 'O';
            })
            visited.add(`${newRow},${newCol}`)
            return visited;
            // if O and not on edge, push onto stack, change to X and mark as visited
          } else if (board[newRow][newCol] === 'O' && !visited.has(`${newRow},${newCol}`)) {
            stack.push([newRow, newCol]);
            board[newRow][newCol] = 'X';
            visited.add(`${newRow},${newCol}`);
          }
        }
      }
    }
  }
};

var solve = function(board) {
  // mark all O's connected to border as #
  // left and right borders
  for (let i = 0; i < board.length; i++) {
    mark(board, i, 0);
    mark(board, i, board[0].length-1);
  }
  // top and bottom borders
  for (let i = 1; i < board[0].length-1; i++) {
    mark(board, 0, i);
    mark(board, board.length-1, i);
  }

  // iterate through entire board and change O's to X's and #'s to O's
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] === 'O') {
        board[i][j] = 'X';
      }
      if (board[i][j] === '#') {
        board[i][j] = 'O';
      }
    }
  }
};

const mark = (board, i, j) => {
  // check if on board or not a O
  if (i < 0 || i >= board.length || j < 0 || j >= board[0].length) return;
  if (board[i][j] !== 'O') return;

  // if it is a 0, mark as #
  board[i][j] = '#';

  // check all surrounding
  mark(board, i, j-1);
  mark(board, i, j+1);
  mark(board, i-1, j);
  mark(board, i+1, j);
}

const input = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]];
const input2 = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","X","O","X"]];
solve(input);
solve(input2);