/**
 * Given a set of distinct integers, nums, return all possible subsets (the power set).

Note: The solution set must not contain duplicate subsets.

Example:

Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
 */

var subsets = function(nums) {
    const allSets = [];
    const findSubsets = (set, i) => {
      // base case:
      if (i === nums.length) {
        allSets.push(set);
        return;
      }

      // recursive cases (take it or leave it)
      findSubsets(set.concat(nums[i]), i+1);
      findSubsets(set, i+1);
    };
    findSubsets([], 0);
    return allSets;
};

console.log(subsets([1,2,3]));