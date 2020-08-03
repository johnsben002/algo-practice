/**
 * @param {number} n
 * @return {string[]}
 * @description 
 * Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.
 * For example, given n = 3, a solution set is:
 *[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]
 */
var xgenerateParenthesis = function(n, result = []) {
    // notes: always starts w/ ( and ends w )
    generateParensHelper(n, 0, 0, '', result);
    return result;
};



function xgenerateParensHelper(n, open, close, tempResult, result) {
  console.log(tempResult);
  // Base Case: tempResult is correct length
  if (tempResult.length === n*2) {
    result.push(tempResult);
    return;
  }

  // recursive cases:
  if (open < n) {
    generateParensHelper(n, open + 1, close, tempResult.concat('('), result);
  }
  if (close < open) {
    generateParensHelper(n, open, close + 1, tempResult.concat(')'), result);
  }
}






var generateParenthesis = function(n, result = []) {
  const generateParenthesisHelper = (open, close, tempResult) => {
      if (tempResult.length === n*2) {
          result.push(tempResult);
          return;
      }
      if (open < n) {
          generateParenthesisHelper(open + 1, close, tempResult + '(');
      }
      if (close < open) {
          generateParenthesisHelper(open, close + 1, tempResult + ')');
      }
  };
  generateParenthesisHelper(0, 0, '');
  return result;
};

console.log(generateParenthesis(3));