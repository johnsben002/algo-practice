/**
 * 
 * @description 
 * link to problem: https://www.algoexpert.io/questions/Max%20Sum%20Increasing%20Subsequence
 */

function maxSumIncreasingSubsequence(array) {
  // Write your code here.
  const maximums = new Array(array.length);
  const prev = new Array(array.length);
  maximums[0] = array[0];
  prev[0] = 0;

  for (let i = 1; i < array.length; i++) {
    let currentMax = array[i];
    let lastIndex = i;
    for (let j = i-1; j >= 0; j--) {
      if (array[j] < array[i]) {
        let possible = array[i] + maximums[j];
        if (currentMax < possible) {
          currentMax = possible; 
          lastIndex = j;
        }
      }
    }
    maximums[i] = currentMax;
    prev[i] = lastIndex;
  }

  const max = Math.max(...maximums);
  const track = [];
  let currentI = maximums.indexOf(max);
  while(currentI !== prev[currentI]) {
    track.push(array[currentI]);
    currentI = prev[currentI];
  }
  track.push(array[currentI]);
  return [max, track.reverse()];
}


// console.log(maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30])); // [110, [10, 20, 30, 50]]
// console.log(maxSumIncreasingSubsequence([1]));
// console.log(maxSumIncreasingSubsequence([-1]));
// console.log(maxSumIncreasingSubsequence([-1, 1]));
// console.log(maxSumIncreasingSubsequence([5, 4, 3, 2, 1]));
// console.log(maxSumIncreasingSubsequence([1, 2, 3, 4, 5]));
// console.log(maxSumIncreasingSubsequence([-5, -4, -3, -2, -1]));
// console.log(maxSumIncreasingSubsequence([8, 12, 2, 3, 15, 5, 7]));
// console.log(maxSumIncreasingSubsequence([10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50]));
console.log(maxSumIncreasingSubsequence([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
