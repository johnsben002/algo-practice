function getClosingParen(sentence, openingParenIndex) {

  // Find the position of the matching closing parenthesis

   let openNestedParens = 0;

   for (let i = openingParenIndex + 1; i < sentence.length; i++) {
     if (sentence[i] === ')') {
       if (openNestedParens === 0) {
         return i;
       } else {
         openNestedParens -= 1;
       }
     } else if (sentence[i] === '(') {
       openNestedParens += 1;
     }
  }

  throw new Error('No closing parens');
}


















// Tests

let desc = 'all openers then closers';
let actual = getClosingParen('((((()))))', 2);
let expected = 7;
assertEqual(actual, expected, desc);

desc = 'mixed openers and closers';
actual = getClosingParen('()()((()()))', 5);
expected = 10;
assertEqual(actual, expected, desc);

desc = 'no matching closer';
const noCloser = () => (getClosingParen('()(()', 2));
assertThrowsError(noCloser, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
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