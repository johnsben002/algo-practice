/**
Given a column title as appear in an Excel sheet, return its corresponding column number.
For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
    ...
 */

var titleToNumber = function(s) {
  // work from end, add (26 ^ position from end) to every char 
  let position = 0;
  let col;
  for (let i = s.length-1; i >= 0; i--) {
      let char = s.charCodeAt(i) - 64;
      if (position === 0) {
          col = char;
          position++;
          continue;
      }
      col = col + (Math.pow(26, position) * char);
      position++;
  }
  return col;
};

console.log(titleToNumber('AAA'));
