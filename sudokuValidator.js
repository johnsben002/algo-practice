/**
 * 
 * @param {*} board 
 * @description 
 *  Write a function that takes in a 9x9 grid and returns whether or not the grid makes a valid sudoku solution
 *  A valid solution is where each column, each row, and each 3x3 sub-grid has all digits between 1 and 9
 *  Boards may contain 0s, but these are considered invalid
 */

function validSolution(board){
  /**
   * Reorganize board into three 9x9 grids
   *  1. same as current board so we can validate rows
   *  2. flip columns and rows so that we can validate columns
   *  3. each 3x3 grid as a row index in a 9x9 grid
   */ 
  const _rows = board;
  const _cols = [];
  const _grid = [];

  // prefill structures with empty array objects
  for (let i = 0; i < 9; i++) {
    _cols.push([]);
    _grid.push([]);
  }

  // iterate through board
  for (let row = 0; row < 9; row++) {

    for (let col = 0; col < 9; col++) {
      // save each column in a new row
      _cols[col][row] = board[row][col];
      
      // figure out small grid index and place accordingly
      let gridRow = Math.floor(row / 3);
      let gridCol = Math.floor(col / 3);
      let gridIndex = gridRow * 3 + gridCol;
      _grid[gridIndex].push(board[row][col]);
    }
  }

  // function that validates that each row contains numbers 1-9
  const validate = data => {
    // iterate through rows
    for (let row = 0; row < 9; row++) {
      // sort row in ascending order
      data[row].sort();

      for (let col = 0; col < 9; col++) {
        let value = data[row][col];
        // check if value is the correct number
            // value should be col + 1, because a valid solution would sort to 1,2,3,4,5,6,7,8,9 
        if (value !== col+1) {
          return false;
        }
      }
    }
    return true;
  }

  // run each reorganized board through validate and return
  return (validate(_rows) && validate(_cols) && validate(_grid));
}


console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
  [6, 7, 2, 1, 9, 5, 3, 4, 8],
  [1, 9, 8, 3, 4, 2, 5, 6, 7],
  [8, 5, 9, 7, 6, 1, 4, 2, 3],
  [4, 2, 6, 8, 5, 3, 7, 9, 1],
  [7, 1, 3, 9, 2, 4, 8, 5, 6],
  [9, 6, 1, 5, 3, 7, 2, 8, 4],
  [2, 8, 7, 4, 1, 9, 6, 3, 5],
  [3, 4, 5, 2, 8, 6, 1, 7, 9]])); // true
  
console.log(validSolution([[5, 3, 4, 6, 7, 8, 9, 1, 2], 
   [6, 7, 2, 1, 9, 0, 3, 4, 8],
   [1, 0, 0, 3, 4, 2, 5, 6, 0],
   [8, 5, 9, 7, 6, 1, 0, 2, 0],
   [4, 2, 6, 8, 5, 3, 7, 9, 1],
   [7, 1, 3, 9, 2, 4, 8, 5, 6],
   [9, 0, 1, 5, 3, 7, 2, 1, 4],
   [2, 8, 7, 4, 1, 9, 6, 3, 5],
   [3, 0, 0, 4, 8, 1, 1, 7, 9]])); // false

