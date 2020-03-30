/**
 * 
 * @description given a 2d array of 1's and 0's, write an algorith that checks for a valid path from top to bottom
 * - moves can be made up, down, left and right but not diagonally
 * 
 * example of a 2d array with a valid path:
 * [[1,0,0,1,1],
 *  [1,1,0,1,1],
 *  [1,0,0,1,1],
 *  [1,0,1,1,0],
 *  [1,0,0,0,0]]
 */

const gapsInPot = (pot) => {
      // marks final row of gravel — if we get to a zero here there's a path!
      const finalRowIndex = pot.length-1;
      // set a boolean for if there is a valid path
      let isThereAPath = false;
      
      // recursive helper function to traverse through 2d array
      const findNextGap = (x, y, pot, end) => {
          // mark current spot as visited so we don't keep traversing back to it
          pot[y][x] = 'visited';
          // if we reach the final row of gravel, it means there is a path! Set boolean to true and return out
          if (y === end) {
            isThereAPath = true;
            return;
          } 

          // check if any valid moves contain a 0 and recursively call if they do
          if (pot[y][x-1] != undefined && pot[y][x-1] === 0) findNextGap(x-1,y,pot,end);
          if (pot[y][x+1] != undefined && pot[y][x+1] === 0) findNextGap(x+1,y,pot,end);
          if (pot[y-1] != undefined && pot[y-1][x] === 0) findNextGap(x,y-1,pot,end);
          if (pot[y+1] != undefined && pot[y+1][x] === 0) findNextGap(x,y+1,pot,end);
          // return out if there aren't any valid moves
          return;
      }
      
      // loop through first subarray to check for an entry point
      for (let i = 0; i < pot[0].length; i++) {
        // if there is a 0, enter helper function to find path
          if (pot[0][i] === 0) {
              findNextGap(i,0,pot,finalRowIndex);
              // return true if a path was found
              if (isThereAPath) return true;
          }
          // if we made it to the last index of the first subarray without finding a path, return false
          if (i === pot[0].length - 1) {
            return isThereAPath;
          }
      }
  };

console.log(gapsInPot([[1,0],[1,0]]));
console.log(gapsInPot([[1,0,0,1,1],[1,1,0,1,1],[1,0,0,1,1],[1,0,1,1,0],[1,0,0,0,0]]));
console.log(gapsInPot([[1,0,0,1,1],[1,1,0,1,1],[1,0,0,1,1],[1,1,1,1,0],[1,0,0,0,0]]));
