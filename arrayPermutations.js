/**
 * Given a collection of distinct integers, return all possible permutations.

Example:

Input: [1,2,3]
Output:
[
  [1,2,3],
  [1,3,2],
  [2,1,3],
  [2,3,1],
  [3,1,2],
  [3,2,1]
]
 */

 const permute = (nums) => {
   const final = [];
   const getPerms = (subArr, options) => {
     // base case:
     if (!options.length) {
       final.push(subArr);
       return;
      }

     // iterate through nums
     for (let i = 0; i < options.length; i++) {
       let current = options[i];
       let rest = [...options.slice(0,i), ...options.slice(i+1)];
       getPerms([...subArr, current], rest);
     }
   };

   // call helper function
   getPerms([], nums);
   return final;
 };

 console.log(permute([1,2,3]));