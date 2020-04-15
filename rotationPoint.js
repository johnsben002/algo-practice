function findRotationPoint(words) {

  // Find the rotation point in the vector
  // start with a binary search
  let floorIndex = 0;
  let ceilingIndex = words.length-1;

  while (floorIndex < ceilingIndex) {
    // find word in center of array
    const distance = ceilingIndex - floorIndex;
    const halfDistance = Math.floor(distance/2);
    const guessIndex = floorIndex + halfDistance;
    const guessVal = words[guessIndex];
 
    // check to see if word preceding our guess is in correct alphabetical order
    // if not, we have the rotation point
    if (guessVal < words[guessIndex]) {
      return guessIndex;
    }
    // otherwise, we need to find the side of the array that rotation point will be on
    if (guessVal > words[ceilingIndex]) {
      floorIndex = guessIndex;
    }
    if (guessVal < words[ceilingIndex]) {
      ceilingIndex = guessIndex
    }
  } 

  return false;
}


















// Tests

let desc = 'small array';
let actual = findRotationPoint(['cape', 'cake']);
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'medium array';
actual = findRotationPoint(['grape', 'orange', 'plum', 'radish', 'apple']);
expected = 4;
assertEquals(actual, expected, desc);

desc = 'large array';
actual = findRotationPoint(['ptolemaic', 'retrograde', 'supplant',
  'undulate', 'xenoepist', 'asymptote',
  'babka', 'banoffee', 'engender',
  'karpatka', 'othellolagkage']);
expected = 5;
assertEquals(actual, expected, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}