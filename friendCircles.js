/**
 * 
There are N students in a class. Some of them are friends, while some are not. Their friendship is transitive in nature. For example, if A is a direct friend of B, and B is a direct friend of C, then A is an indirect friend of C. And we defined a friend circle is a group of students who are direct or indirect friends.

Given a N*N matrix M representing the friend relationship between students in the class. If M[i][j] = 1, then the ith and jth students are direct friends with each other, otherwise not. And you have to output the total number of friend circles among all the students.

Notes: 
1. N is in range [1,200].
2. M[i][i] = 1 for all students.
3. If M[i][j] = 1, then M[j][i] = 1.
 */

const findCircleNum = M => {
  // set of visited friends
  const visited = new Set();
  // friend circle counter
  let circles = 0;

  // iterate through matrix
  for (let i = 0; i < M.length; i++) {
    // check if friend has not been visited before
    if (!visited.has(i)) {
      // start dfs
      dfs(i);
      // this is another friend circle
      circles++;
    }
  }

  return circles;
  
  // helper function to perform dfs traversal through M
  function dfs(i) {
    // go through this friend's friends
    for (let j = 0; j < M.length; j++) {
      // check to see if this is a friend and has not been visited before
      if (M[i][j] === 1 && !visited.has(j)) {
        // add as visited
        visited.add(j);
        // call dfs
        dfs(j);
      }
    }
  }
};

const input1 = [[1,1,0], [1,1,0], [0,0,1]];
const input2 = [[1,1,0], [1,1,1], [0,1,1]];

console.log(findCircleNum(input1));