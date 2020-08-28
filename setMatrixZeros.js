/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
  // use object to find rows and columns of 0's in matrix
  const turnToZeros = {
      rows: new Set(),
      columns: new Set()
  };
  // iterate through matrix and store the row and column of each zero
  for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[0].length; c++) {
          if (matrix[r][c] === 0) {
              turnToZeros[rows].add(r);
              turnToZeros[columns].add(c);
          }
      }
  }
  
  // helper functions to turn each specified row and col to 0's
  const turnRows = (r) => {
      for (let i = 0; i < matrix[0].length; i++) {
          matrix[r][i] = 0;
      }
  };
  const turnCols = (c) => {
      for (let i = 0; i < matrix.length; i++) {
          matrix[i][c] = 0;
      }
  }
  
  // iterate through row and column sets and put through helper functions
  turnToZeros[rows].forEach(val => turnRows(val));
  turnToZeros[columns].forEach(val => turnCols(val));
  
  return matrix;
};