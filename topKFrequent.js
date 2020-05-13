const topKFrequent = (nums, k) => {

  // reduce through nums to get tallys of each integer
  const tally = nums.reduce((tally, int) => {
    if (!tally[int]) {
      tally[int] = 1;
    } else {
      tally[int] = tally[int] + 1;
    }
    return tally;
  }, {});

  // initialize an empty array to push in tally obj key-value pairs
  const arr = [];

  for (let key in tally) {
    arr.push({key: key, value: tally[key]});
  }

  // sort the array of tally pairs by tally value (largest first)
  arr.sort((a,b) => {
   return b.value - a.value;
  })

  // loop until k and push in integers from sorted tally array
  const result = [];
  for (let i = 0; i < k; i ++) {
    let integer = Number(arr[i].key);
    result.push(integer);
  }

  return result;
};

console.log(topKFrequent([1,1,1,2,2,3], 2));