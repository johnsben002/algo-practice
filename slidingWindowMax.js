const maxSlidingWindow = (nums, k) => {
  // results array
  const maximums = [];

  // queue structure for window
  const window = [];
  
  for (let i = 0; i < nums.length; i++) {
    window.push(nums[i]);
    if (window.length === k) {
      maximums.push(Math.max(...window));
    } else if (window.length === k+1) {
      window.shift();
      maximums.push(Math.max(...window));
    }
  }

  return maximums
};


console.log(maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3))
// Output: [3,3,5,5,6,7]