// merge and sort two arrays
const mergeArrays = (myArray, alicesArray) => {
  let myCount = 0;
  let aliceCount = 0;
  let finalIndexCount = 0;
  let final = [];
  while (finalIndexCount < (myArray.length + alicesArray.length)) {
    const isMyArrayExhausted = myCount >= myArray.length;
    const isAlicesArrayExhausted = aliceCount >= alicesArray.length;

    if (!isMyArrayExhausted && (isAlicesArrayExhausted || myArray[myCount] < alicesArray[aliceCount])) {
      final[finalIndexCount] = myArray[myCount];
      myCount++;
    } else {
      final[finalIndexCount] = alicesArray[aliceCount];
      aliceCount++;
    }
    finalIndexCount++;
  }

  return final;
}

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));