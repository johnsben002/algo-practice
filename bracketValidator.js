// Determine if the input code is valid
function isValid(code) {

  // valid matches
  const matches = {
    '(' : ')',
    '[' : ']',
    '{' : '}'
  }

  // keep track of closing brackets needed to complete opening brackets
  const closing = [];

  for (let i = 0; i < code.length; i++) {
    let current = code[i];

    // opening brackets
    if (matches[current]) {
      closing.push(matches[current]);
    }

    // closing brackets
    if (current === ']' || current === ')' || current === '}') {
      if (current !== closing[closing.length-1]) {
        return false;
      } else {
        closing.pop();
      }
    }
    
  }

  // check to see if there are any unaccounted for open brackets
  return closing.length === 0;
}


















// Tests

let desc = 'valid short code';
assertEqual(isValid('()'), true, desc);

desc = 'valid longer code';
assertEqual(isValid('([]{[]})[]{{}()}'), true, desc);

desc = 'mismatched opener and closer';
assertEqual(isValid('([][]}'), false, desc);

desc = 'missing closer';
assertEqual(isValid('[[]()'), false, desc);

desc = 'extra closer';
assertEqual(isValid('[[]]())'), false, desc);

desc = 'empty string';
assertEqual(isValid(''), true, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}