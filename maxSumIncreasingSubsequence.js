/**
 * 
 * @description 
 * link to problem: https://www.algoexpert.io/questions/Max%20Sum%20Increasing%20Subsequence
 */

function maxSumIncreasingSubsequence(array) {
  // Write your code here.

  /**
   * STRATEGY: 
   * keep set of used indexes
   * start at index 0 and build largest increasing subsequence you can, keeping track of 
   */

   let maxSubsequence = [-Infinity];
   let usedInSub = new Set();

   const buildSubsequence = (startIndex) => {
     // add first index to usedInSub & start out current subsequence array
     usedInSub.add(startIndex);
     const currentSub = [array[startIndex], [array[startIndex]]];
     let lastAddition = array[startIndex];

     for (let i = startIndex; i < array.length; i++) {

     }
   };

   buildSubsequence(0, array);
}


console.log(maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30])); // [110, [10, 20, 30, 50]]