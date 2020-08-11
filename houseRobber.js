/**
 * @param {number[]} nums
 * @return {number}
 * @description You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed, the only constraint stopping you from robbing each of them is that adjacent houses have security system connected and it will automatically contact the police if two adjacent houses were broken into on the same night.

Given a list of non-negative integers representing the amount of money of each house, determine the maximum amount of money you can rob tonight without alerting the police.
 */

var rob = function(nums) {
  // edge cases
  if (nums.length === 0) return 0;
  if (nums.length === 1) return nums[0];
  // build up a new array of the maximum values at each index
  const maximums = new Array(nums.length);
  maximums[0] = nums[0];
  maximums[1] = nums[1];
  // iterate through the rest of the array and gradually build up
  for (let i = 2; i < nums.length; i++) {
    // initially there will only one possible option for a non-adjacent house
    if (i === 2)  {
      maximums[i] = nums[i] + maximums[0];
      continue;
    }
    // otherwise we have two possible maximums to add to total
    maximums[i] = Math.max(maximums[i-2], maximums[i-3]) + nums[i];
  }

  // return the largest of maximums
  return Math.max(...maximums);
};

console.log(rob([2,1,1,2])); //4
console.log(rob([2,7,9,3,1])); //12
