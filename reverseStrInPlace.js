// Write a function that takes an array of characters and reverses the letters in place.
const xreverseInPlace = (string) => {

  if (string.length <= 1) return string;

  for (let i = 1; i < string.length; i += 1) {
    let currentSwitch = string.splice(i,1);
    string.unshift(...currentSwitch)
  }
  return string;
}

const reverseInPlace = (string) => {
  let start = 0;
  let end = string.length-1;

  while (start <= end) {
    [string[start], string[end]] = [string[end], string[start]]
    start++;
    end--;
  }
  return string;
}

console.log(reverseInPlace(['A','B','C','D','E']));