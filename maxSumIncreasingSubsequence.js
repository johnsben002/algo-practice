/**
 * 
 * @description 
 * link to problem: https://www.algoexpert.io/questions/Max%20Sum%20Increasing%20Subsequence
 */

function xmaxSumIncreasingSubsequence(array) {
  // Write your code here.
  // array to keep track of maximum sum up to each index
  const maximums = new Array(array.length);
  maximums[0] = array[0];
  // array to keep track of previous index of each max sum from maximums array
  const prev = new Array(array.length);
  prev[0] = 0;

  for (let i = 1; i < array.length; i++) {
    // initialize current maximum subsequence sum & previous index
    let currentMax = array[i];
    let lastIndex = i;
    // for each prior index that is a lesser value than the array value at i, check to see if the maximum sum at that index added to the current index value is greater than the current max
    for (let j = i-1; j >= 0; j--) {
      if (array[j] < array[i]) {
        let possible = array[i] + maximums[j];
        // if the possible new sum is greater, reset the currentMax and previous index
        if (currentMax < possible) {
          currentMax = possible; 
          lastIndex = j;
        }
      }
    }
    // update maximums and prev arrays
    maximums[i] = currentMax;
    prev[i] = lastIndex;
  }

  // find max value in maximums array
  const max = Math.max(...maximums);
  // work backwords through the prev array starting at the maximum value index to re-trace the subsequence that brought us out max sum
  const track = [];
  let currentI = maximums.indexOf(max);
  while(currentI !== prev[currentI]) {
    track.push(array[currentI]);
    currentI = prev[currentI];
  }
  track.push(array[currentI]);
  // return out the max and the subsequence (reversed to put in correct order)
  return [max, track.reverse()];
}

function maxSumIncreasingSubsequence(array) {
  // Write your code here.
	const sequences = new Array(array.length);
	const sums = array.map(num => num);
	let maxSumIndex = 0;
	for (let i = 0; i < array.length; i++) {
		const currentNum = array[i];
		for (let j = 0; j < i; j++) {
			const otherNum = array[j];
			if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
				sums[i] = sums[j] + currentNum;
				sequences[i] = j;
			}
		}
		if (sums[i] >= sums[maxSumIndex]) maxSumIndex = i;
	}
	return [sums[maxSumIndex], buildSequence(array, sequences, maxSumIndex)];
}

function buildSequence(array, sequences, currentIndex) {
	const sequence = [];
	while (currentIndex !== undefined) {
		sequence.unshift(array[currentIndex]);
		currentIndex = sequences[currentIndex];
	}
	return sequence;
}


console.log(maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30])); // [110, [10, 20, 30, 50]]
console.log(maxSumIncreasingSubsequence([1]));
console.log(maxSumIncreasingSubsequence([-1]));
console.log(maxSumIncreasingSubsequence([-1, 1]));
console.log(maxSumIncreasingSubsequence([5, 4, 3, 2, 1]));
console.log(maxSumIncreasingSubsequence([1, 2, 3, 4, 5]));
console.log(maxSumIncreasingSubsequence([-5, -4, -3, -2, -1]));
console.log(maxSumIncreasingSubsequence([8, 12, 2, 3, 15, 5, 7]));
console.log(maxSumIncreasingSubsequence([10, 15, 4, 5, 11, 14, 31, 25, 31, 23, 25, 31, 50]));
console.log(maxSumIncreasingSubsequence([10, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
