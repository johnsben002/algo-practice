/**
 * Given a 2D array A, each cell is 0 (representing sea) or 1 (representing land)
A move consists of walking from one land square 4-directionally to another land square, or off the boundary of the grid.
Return the number of land squares in the grid for which we cannot walk off the boundary of the grid in any number of moves.
 */

var numEnclaves = function(A) {
  // mark all enclaves touching border as sea
  // right and left borders
  for (let i = 0; i < A.length; i++) {
    mark(A, i, 0);
    mark(A, i, A[0].length-1);
  }
  // top and bottom borders
  for (let i = 0; i < A[0].length; i++) {
    mark(A, 0, i);
    mark(A, A.length-1, i);
  }

  let counter = 0;

  // iterate through A and count number of enclaves that still exist
  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[0].length; j++) {
      if (A[i][j] === 1) {
        counter++;
      }
    }
  }

  return counter;
};

const mark = (A, r, c) => {
  // check if on board / already sea
  if (r < 0 || r >= A.length || c < 0 || c >= A[0].length) return;
  if (A[r][c] === 0) return;

  // mark land as sea
  A[r][c] = 0;

  // check neighbors
  mark(A, r, c-1);
  mark(A, r, c+1);
  mark(A, r-1, c);
  mark(A, r+1, c);
}



const input1 = [[0,0,0,0],[1,0,1,0],[0,1,1,0],[0,0,0,0]];
const input2 = [[0,1,1,0],[0,0,1,0],[0,0,1,0],[0,0,0,0]];

console.log(numEnclaves(input1));
console.log(numEnclaves(input2));

