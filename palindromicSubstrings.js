/**
 * @param {string} s
 * @return {number}
 */

 /**
  * 
  *
{Input: "abc"
Output: 3
Explanation: Three palindromic strings: "a", "b", "c".} 

Input: "aaa"
Output: 6
Explanation: Six palindromic strings: "a", "a", "a", "aa", "aa", "aaa".
  */

var countSubstrings = function(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
      let start = i;
      let end = i;
      // build out longest palindrome possible from each index
      while (start >= 0 && end < s.length && s[start] == s[end]) {
        count++;
        // increase substring length and check again
        start--;
        end++;
      }
      // check for palindromes that start out of double letters ('baab')
      start = i;
      end = i+1;
      while (start >= 0 && end < s.length && s[start] == s[end]) {
        count++;
        start--;
        end++;
      }
    }
    return count;
};

console.log(countSubstrings('aaa'));
console.log(countSubstrings('abc'));