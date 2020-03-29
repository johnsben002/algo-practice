// find number of ways you can jump up n stairs in 1, 2, or 3 jumps
const stairCombos = (n, cache = {}) => {
  // check cache
  if (cache[n]) {
    return cache[n];
  }
  
  // base cases
  if (n == 0 || n == 1) {
      return 1;
  }
  if (n == 2) {
    return 2;
  }
  
  // recursive cases
  const result = stairCombos((n-1), cache) + stairCombos((n-2), cache) + stairCombos((n-3), cache);
  cache[n] = result;
  return result;    
};

console.log(stairCombos(60));