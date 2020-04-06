// Check if any permutation of the input is a palindrome
function xhasPalindromePermutation(theString) {
  // for any permutation to be a palindrome, we need to have an even number of every letter (except one letter can be a standalone)
  // use reduce to tally occurances of each letter in the string
  const letterCount = theString.split('').reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1;
    return acc;
  }, {});
  // parse out tallys into an array so we can easily iterate through and check
  const counts = Object.values(letterCount);
  let isThereAnOdd = false;

  for (let i = 0; i < counts.length; i += 1) {
    // check if number is odd
    if (counts[i] % 2 !== 0) {
      // if it is odd, check if there was already an odd character count
      if (isThereAnOdd) return false;
      else isThereAnOdd = true;
    }
  }

  return true;
}

function hasPalindromePermutation(theString) {
  // use set to keep track of odd numbers of characters in the string
  const oddChars = new Set();

  // iterate through the string & check if current character is in the odd set, if not, add it, if it is, take it out
  for (let i = 0; i < theString.length; i++) {
    if (oddChars.has(theString[i])) {
      oddChars.delete(theString[i]);
    } else {
      oddChars.add(theString[i]);
    }
  }

  // if the oddChars size is less than or equal to 1, return true
  return oddChars.size <= 1;
}

















// Tests

let desc = 'permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcbcd'), true, desc);

desc = 'permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabccbdd'), true, desc);

desc = 'no permutation with odd number of chars';
assertEqual(hasPalindromePermutation('aabcd'), false, desc);

desc = 'no permutation with even number of chars';
assertEqual(hasPalindromePermutation('aabbcd'), false, desc);

desc = 'empty string';
assertEqual(hasPalindromePermutation(''), true, desc);

desc = 'one character string ';
assertEqual(hasPalindromePermutation('a'), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}