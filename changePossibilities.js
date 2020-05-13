const outerFunc = (amountLeft, denominations) => {
  // utilize closure to memoize results
  const memo = {};

  const change = (amountLeft, denominations, currentIndex = 0) => {
    // create a memo key for the current index and amountLeft
    const memoKey = [amountLeft, currentIndex].join(', ')
    if (memo.hasOwnProperty(memoKey)) {
      return memo[memoKey];
    }
    
    // Base Cases:
    // hit the amount right on!
    if (amountLeft === 0) return 1;
    // went past the amount we're trying to get
    if (amountLeft < 0) return 0;
    // we're out of demoninations
    if (currentIndex === denominations.length) return 0;

    // Choose a current coin
    const currentCoin = denominations[currentIndex];
    
    // find out how many possibilities we can get for each number of times using current coint
    let numPossibilities = 0;
    while (amountLeft >= 0) {
      numPossibilities += change(amountLeft, denominations, currentIndex + 1);
      amountLeft -= currentCoin;
    }
    
    // save this answer in our memo and return
    memo[memoKey] = numPossibilities;
    return numPossibilities;
  }

  return change;
}

const changePossibilities = outerFunc();







// Tests

let desc = 'sample input';
let actual = changePossibilities(4, [1, 2, 3]);
let expected = 4;
assertEqual(actual, expected, desc);

desc = 'one way to make zero cents';
actual = changePossibilities(0, [1, 2]);
expected = 1;
assertEqual(actual, expected, desc);

desc = 'no ways if no coins';
actual = changePossibilities(1, []);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'big coin value';
actual = changePossibilities(5, [25, 50]);
expected = 0;
assertEqual(actual, expected, desc);

desc = 'big target amount';
actual = changePossibilities(50, [5, 10]);
expected = 6;
assertEqual(actual, expected, desc);

desc = 'change for one dollar';
actual = changePossibilities(100, [1, 5, 10, 25, 50]);
expected = 292;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`)
  }
}