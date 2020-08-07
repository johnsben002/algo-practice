/**
 * @param {number} n
 * @return {number}
 */

 /**
  * 
You are climbing a stair case. It takes n steps to reach to the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example 1:

Input: 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
Example 2:

Input: 3
Output: 3
Explanation: There are three ways to climb to the top.
1. 1 step + 1 step + 1 step
2. 1 step + 2 steps
3. 2 steps + 1 step
  */


var climbStairs = function(n, combos = new Array(n+1)) {
  if (n == 0) return 1;
  if (n < 0) return 0;
  if (combos[n] > 0) {
    return combos[n];
  }
  combos[n] = climbStairs(n-1, combos) + climbStairs(n-2, combos);
  return combos[n];
};



console.log(climbStairs(3));