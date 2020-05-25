/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
// long recursive solution -- BRUTE FORCE
var xspiralOrder = function(matrix) {
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

// iterative, but similar solution
const xxspiralOrder = matrix => {
  // edge cases
  if(!matrix.length || !matrix[0].length){
    return []
  }
  // define coordinate points
  let startRow = 0;
  let endRow = matrix.length-1;
  let startColumn = 0;
  let endColumn = matrix[0].length-1;
  // initilize output array
  const output = [];
  // start the spiral traversal
  // will go over some elements in final iteration of while loop, we will slice them out
  while (output.length < matrix.length * matrix[0].length) {
    // right
    for (let i = startColumn; i <= endColumn; i++){
      output.push(matrix[startRow][i]);
    }
    startRow++;
    // down
    for (let i = startRow; i <= endRow; i++) {
      output.push(matrix[i][endColumn]);
    }
    endColumn--;
    // left
    for (let i = endColumn; i >= startColumn; i--) {
      output.push(matrix[endRow][i]);
    }
    endRow--;
    // up
    for (let i = endRow; i <= startRow; i++) {
      output.push(matrix[i][startColumn]);
    }
    startColumn++;
  }
  // calculate length of output
  // const length = matrix.length * matrix[0].length;
  // return output.slice(0, length);
  return output;
}

// // recursive solution that takes first row, and then rotates all former rows
// const spiralOrder = matrix => {
//   // shift off first row to concatinate to the result
//   const firstRow = matrix.shift();
//   // base case
//   if (!matrix.length) return firstRow;
//   // rotate the rest of the matrix
//   const transposed = matrix[0].map((a,i) => {
//     return matrix.map(row => row[i]);
//   });
//   const rotated = transposed.reverse();
//   // concatinate rotated matrix to the first row
//   return firstRow.concat(spiralOrder(rotated))
// }

var spiralOrder = function(matrix, result = []) {
  // Write your code here, and
   // return your final answer.
   if (matrix.length === 0) {
     return result

   }

for (let i = 0; i < matrix.length; i++) {
 let current = matrix[i]
  if (i === 0) {
    result = result.concat(current);
  } else {
    let last = current.pop();
    if (!last) {
      return result
    }
    result.push(last)
    current.reverse()
  } 
}

matrix.shift()
return spiralOrder(matrix.reverse(), result)
};


// TEST CASE:
const input = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
console.log(spiralOrder(input));
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]
// console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]));
// console.log(spiralOrder([[1,2],[3,4]]));
