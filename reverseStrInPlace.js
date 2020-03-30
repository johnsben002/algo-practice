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

const reverseWordsInPlace = (message) => {

  // helper function to reverse elements in an array
  const reverseLoop = (start, end) => {
    while (start <= end) {
      [message[start], message[end]] = [message[end], message[start]];
      start++;
      end--;
    }
  }
  // reverse all characters
  reverseLoop(0, message.length-1, message);
  
  // iterate through message array to get individual words
  let wordStarts = 0;
  for (let i = 0; i <= message.length; i += 1) {
    // looping until one index past the last one so we can get the ending word
    if (message[i] === ' ' || message[i] === undefined) {
      // reverse the word so it's the correct order again
      reverseLoop(wordStarts, i-1);
      // set new word starting index
      wordStarts = i + 1;
    }
  };
  
  return message;
};

const message = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];

console.log(reverseWordsInPlace(message))