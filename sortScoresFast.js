  // Sort the scores in O(n) time
function sortScores(unorderedScores, highestPossibleScore) {

  // create a new array the size of highestPossibleScore + 1 (add one because with a 0 index start array, we need 101 slots for a 100 top score);
  const scoreCounts = new Array(highestPossibleScore + 1).fill(0);
  const sortedArr = [];

  // loop through unorderedScores array and increase count in each index
  for (let i = 0; i < unorderedScores.length; i++) {
    let currentCount = scoreCounts[unorderedScores[i]];
    scoreCounts[unorderedScores[i]] = currentCount + 1;
  }


  // helper function to push correct score into sortedArr
  const sortMe = (score, count) => {
    sortedArr.push(score);
    if (count > 1) {
      sortMe(score, count-1);
    }
  }

  // loop through scoreCounts and push i into sortedArr
  for (let i = scoreCounts.length; i >= 0; i--) {
    let count = scoreCounts[i];
    let score = i;

    if (count > 0) {
      sortMe(score, count);
    }
  }

  return sortedArr;
}


















// Tests

let desc = 'no scores';
let actual = sortScores([], 100);
let expected = [];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'one score';
actual = sortScores([55], 100);
expected = [55];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'two scores';
actual = sortScores([30, 60], 100);
expected = [60, 30];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'many scores';
actual = sortScores([37, 89, 41, 65, 91, 53], 100);
expected = [91, 89, 65, 53, 41, 37];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

desc = 'repeated scores';
actual = sortScores([20, 10, 30, 30, 10, 20], 100);
expected = [30, 30, 20, 20, 10, 10];
assertEqual(JSON.stringify(actual), JSON.stringify(expected), desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}