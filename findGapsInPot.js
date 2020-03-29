const gapsInPot = (pot) => {
  // Type your solution here 
  // can only make moves up down left and right
  // iterate through first subarray until we find a zero (if none return false)
      // if we find a zero, run through helper function that checks if any surrounding positions contain zeroes
      // if so, recursively call helper function on that zero
      // if we find a zero in the last subarray, return true
  
      const finalRowIndex = pot.length-1;
      let isTrue = false;
      
      const findNextGap = (x, y, pot, end) => {
          // base case
          pot[y][x] = 't';
          if (y === end) isTrue = true;

          if (pot[y][x-1] != undefined && pot[y][x-1] === 0) findNextGap(x-1,y,pot,end);
          if (pot[y][x+1] != undefined && pot[y][x+1] === 0) findNextGap(x+1,y,pot,end);
          if (pot[y-1] != undefined && pot[y-1][x] === 0) findNextGap(x,y-1,pot,end);
          if (pot[y+1] != undefined && pot[y+1][x] === 0) findNextGap(x,y+1,pot,end);
      }
      
      
      for (let i = 0; i < pot[0].length; i++) {
          if (pot[0][i] === 0) {
              // call helper function
              findNextGap(i,0,pot,finalRowIndex);
              console.log(isTrue)
              if (isTrue === true) return true;
          }
          if (i === pot[0].length - 1) {
            return isTrue;
          }
      }
  };

// console.log(gapsInPot([[1,0],[1,0]]));
// console.log(gapsInPot([[1,0,0,1,1],[1,1,0,1,1],[1,0,0,1,1],[1,0,1,1,0],[1,0,0,0,0]]));
// console.log(gapsInPot([[1,0,0,1,1],[1,1,0,1,1],[1,0,0,1,1],[1,0,1,1,0],[1,0,0,0,0]]));
