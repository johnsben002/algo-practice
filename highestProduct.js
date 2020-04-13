// Calculate the highest product of three numbers

function highestProductOf3(arrayOfInts) {
  // keep track of highest product of 2
  // leep track of lowest product of 2 (bc a super low negative might help us depending on the third num)
  // multiply current element by those to get current highest of three

  // edge cases
  if (arrayOfInts.length < 3) {
    throw new Error('Less than three items');
  }

  // pre-populate highest and lowest based on first two integers
  let highest = Math.max(arrayOfInts[0], arrayOfInts[1]);
  let lowest = Math.min(arrayOfInts[0], arrayOfInts[1]);

  // pre-populate first highest and lowest product of 2 integers
  let highestProductOf2 = arrayOfInts[0] * arrayOfInts[1];
  let lowestProductOf2 = arrayOfInts[0] * arrayOfInts[1];

  // pre-ppopulate highest product of 3 for first round before we iterate
  let highestProductOf3 = arrayOfInts[0] * arrayOfInts[1] * arrayOfInts[2];

  // iterate through starting at position 2 and update
  for (let i = 2; i < arrayOfInts.length; i++) {
    // set current
    let current = arrayOfInts[i];

    // update highestProductOf3;
    // check max between highestProductOf3 and current * highest and lowest products of 2
    highestProductOf3 = Math.max(highestProductOf3, highestProductOf2 * current, lowestProductOf2 * current);

    // update all the other variables
    highestProductOf2 = Math.max(highestProductOf2, highest * current, lowest * current);
    lowestProductOf2 = Math.min(lowestProductOf2, highest * current, lowest * current);
    highest = Math.max(highest, current);
    lowest = Math.min(lowest, current);

  }

  return highestProductOf3;
}


















// Tests

let desc = 'short array';
let actual = highestProductOf3([1, 2, 3, 4]);
let expected = 24;
assertEqual(actual, expected, desc);

desc = 'longer array';
actual = highestProductOf3([6, 1, 3, 5, 7, 8, 2]);
expected = 336;
assertEqual(actual, expected, desc);

desc = 'array has one negative';
actual = highestProductOf3([-5, 4, 8, 2, 3]);
expected = 96;
assertEqual(actual, expected, desc);

desc = 'array has two negatives';
actual = highestProductOf3([-10, 1, 3, 2, -10]);
expected = 300;
assertEqual(actual, expected, desc);

desc = 'array is all negatives';
actual = highestProductOf3([-5, -1, -3, -2]);
expected = -6;
assertEqual(actual, expected, desc);

desc = 'error with empty array';
const emptyArray = () => (highestProductOf3([]));
assertThrowsError(emptyArray, desc);

desc = 'error with one number';
const oneNumber = () => (highestProductOf3([1]));
assertThrowsError(oneNumber, desc);

desc = 'error with two numbers';
const twoNumber = () => (highestProductOf3([1, 1]));
assertThrowsError(twoNumber, desc);

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