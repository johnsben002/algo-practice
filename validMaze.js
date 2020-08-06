// check to see if a 2d array of 1s as barriers and 0s as valid path movements has a valid path form start to destination coordinates
const validMaze = (maze, startRow, startCol, destRow, destCol) => {

  // boolean to check if there is a route
  let isValidRoute = false;
  
  // helper function to find path
  const findPath = (row, col, maze, destRow, destCol) => {
      // base case
      if (row === destRow && col === destCol) {
          isValidRoute = true;
          return;
      }
      
      // mark current spot as visited so we don't traverse again
      maze[row][col] = '*';
      
      // recursive cases (check up, down, left, right for each position)
      if (maze[row-1] != undefined && maze[row-1][col] === 0) findPath(row-1, col, maze, destRow, destCol);
      if (maze[row+1] != undefined && maze[row+1][col] === 0) findPath(row+1, col, maze, destRow, destCol);
      if (maze[row][col-1] != undefined && maze[row][col-1] === 0) findPath(row, col-1, maze, destRow, destCol);
      if (maze[row][col+1] != undefined && maze[row][col+1] === 0) findPath(row, col+1, maze, destRow, destCol);
      
      // return out if none of those paths work
      return;
  };
  
  // call findPath function
  findPath(startRow, startCol, maze, destRow, destCol);
  
  // return isValidRoute
  return isValidRoute;
};

console.log(validMaze([[0,1],[1,0]], 0, 0, 1, 1));
