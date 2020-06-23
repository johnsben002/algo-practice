function incrementString (string) {
  // return incrementedString

  // find length of ending number
  let numIndex = string.length-1;
  while(Number(string[numIndex]) || string[numIndex] === "0") {
    numIndex--;
  }

  // split string into two parts: ending number and the rest
  let firstPart = string.slice(0,numIndex+1);
  let numStr = string.slice(numIndex+1);

  // return an appended "1" if no ending number
  if (numStr === "") return string += "1";

  // convert numStr to number and increment
  let num = Number(numStr);
  num += 1;
  // convert back to string
  num = num.toString();
  // if num is the same length as numStr, concat and return
  if (num.length >= numStr.length) {
    return firstPart += num;
  } else {
    // account for trailing 0's
    let trailing0s = "";
    for (let i = num.length; i < numStr.length; i++) {
      trailing0s += "0";
    }
    return firstPart += trailing0s += num;
  }
}

console.log(incrementString("foobar000")) // "foobar001"
console.log(incrementString("foo")) // "foo1"
console.log(incrementString("foobar001")) // "foobar002"
console.log(incrementString("foobar99")) // "foobar100"
console.log(incrementString("foobar099")) // "foobar100"
console.log(incrementString(""))// "1"