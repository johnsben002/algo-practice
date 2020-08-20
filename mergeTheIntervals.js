var merge = function(intervals) {
  // edge case
  if (intervals.length === 0) return [];
  // sort intervals by start time incase they are not sorted to begin with
  intervals.sort((a,b) => a[0]-b[0]);
  // create array to store the merged intervals
  const merged = [];
  // variable to store current interval before being pushed into merge
  let currentInterval = intervals[0];
  // iterate through intervals and test if next interval can be merged into currenInterval
  for (let i = 1; i < intervals.length; i++) {
    // if they can merge
    if (currentInterval[1] >= intervals[i][0]) {
      currentInterval = [currentInterval[0], Math.max(currentInterval[1], intervals[i][1])];
    } else {
      // if they cannot merge, push the currentInterval into merged and reset currentInterval
      merged.push(currentInterval);
      currentInterval = intervals[i];
    }
  }

  // check if anything is left in currentInterval
  if (currentInterval.length > 0) merged.push(currentInterval);

  return merged;
};

console.log(merge([[1,3],[2,6],[8,10],[15,18]])); // [[1,6],[8,10],[15,18]]