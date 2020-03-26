// find the number that appears twice in a 1..n array
function findRepeat(numbers) {

  // edge case error handling
  if (numbers.length < 2) {
    throw new Error('Finding duplicates requires at least two numbers');
  }
  
  // // declare a new set to store number values
  // const nums = new Set();
  
  // // iterate through numbers array, checking if each number is in the nums set
  //     // if it is, return that number
  //     // if not, add it to the set
  // for (let i = 0; i < numbers.length; i++) {
  //   if (nums.has(numbers[i])) {
  //     return numbers[i];
  //   } else {
  //     nums.add(numbers[i]);
  //   }
  // }
  
  // approach #2
  // sort numbers
  // iterate through and return the number that is the same as the number preceding
  // numbers.sort();
  // for (let i = 0; i < numbers.length; i++) {
  //   if (numbers[i] === numbers[i+1]) return numbers[i];
  // }
  
  // final approach
  // calculate expected sum of an array that goes from 1 to n
  const n = numbers.length - 1;
  const expectedSum = (n * n + n) / 2;
  
  // calculate actual sum
  const actualSum = numbers.reduce((acc, cur) => acc + cur, 0);
  
  // return the difference
  return actualSum - expectedSum;
}






// Tests

let desc = 'short array';
let actual = findRepeat([1, 2, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findRepeat([4, 1, 3, 4, 2]);
expected = 4;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findRepeat([1, 5, 9, 7, 2, 6, 3, 8, 2, 4]);
expected = 2;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}