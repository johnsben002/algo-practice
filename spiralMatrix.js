/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    // fill new matrix of same size with false booleans to keep track of what has been viseted
    let booleanMatrix = makeMatrix(matrix);

    // initialize output array;
    const output = [];

     // edge cases where matrix is just an array
    if (matrix.length === 1) {
        return matrix[0];
    }
    if (matrix.length === 0) {
        return matrix;
    }

    // start recursive functions and return output
    return right(0, 0, booleanMatrix, matrix, output);
};

const makeMatrix = matrix => {
  return new Array(matrix.length).fill().map(row => new Array(matrix[0].length).fill(false));
}

const right = (x, y, bool, matrix, output) => {
  // base case:
  if (bool[y][x]) {
    return output;
  }
  // iterate right of current position
  while (x < bool[0].length && !bool[y][x]) {
    bool[y][x] = true;
    output.push(matrix[y][x]);
    x++;
  }
  // call next direction
  return down(x-1, y+1, bool, matrix, output);
};

const down = (x, y, bool, matrix, output) => {
  // base case:
  if (bool[y][x]) {
    return output;
  }
  // iterate down from current position
  while (y < bool.length && !bool[y][x]) {
    bool[y][x] = true;
    output.push(matrix[y][x]);
    y++;
  }
  // call next direction
  return left(x-1, y-1, bool, matrix, output);
};

const left = (x, y, bool, matrix, output) => {
  // base case:
  if (bool[y][x]) {
    return output;
  }
  // iterate left of current position
  while (x >= 0 && !bool[y][x]) {
    output.push(matrix[y][x]);
    bool[y][x] = true;
    x--;
  }
  // call next direction
  return up(x+1, y-1, bool, matrix, output);
};

const up = (x, y, bool, matrix, output) => {
  // base case:
  if (bool[y][x]) {
    return output;
  }
  // iterate up from current position
  while (y >= 0 && !bool[y][x]) {
    bool[y][x] = true;
    output.push(matrix[y][x]);
    y--;
  }
  // call next direction
  return right(x+1, y+1, bool, matrix, output);
};



// TEST CASE:
const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
console.log(spiralOrder(input));
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));