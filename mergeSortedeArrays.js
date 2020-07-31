/**
 * 
 * Link to Algo Expert Problem: https://www.algoexpert.io/questions/Merge%20Sorted%20Arrays
 */

function mergeSortedArrays(arrays) {
  // Write your code here.
  // initialize final sorted list array
  const sortedList = [];
  // initiazlize array of indexes of the current smallest of each array in arrays
  const elementIdxs = arrays.map(() => 0);

  // while loop set to true, will break out once the sortedList is complete
  while (true) {
    // array to store smallest items of each array
    const smallestItems = [];
    // iterate through arrays to populate smallestItems array
    for (let arrayIdx = 0; arrayIdx < arrays.length; arrayIdx++) {
      const relevantArray = arrays[arrayIdx];
      const elementIdx = elementIdxs[arrayIdx];
      // skip this array if there are no more elements to add to sorted
      if (elementIdx === relevantArray.length) continue;
      // push smallest to current (note: alse need to push arrayIdx so we can increment elementIdxs where appropriate)
      smallestItems.push({
        arrayIdx,
        num: relevantArray[elementIdx]
      });
    }
    // if there are zero elements in smallestItems, we can break and return sortedList
    if (smallestItems.length === 0) break;
    // find smallest item of smallestItems array, push it into the sortedList, and increment the correct elementIdx
    const nextItem = getMinValue(smallestItems);
    sortedList.push(nextItem.num);
    elementIdxs[nextItem.arrayIdx]++;
  }
  return sortedList;
}

const getMinValue = (items) => {
  let minValueIndex = 0;
  for (let i = 1; i < items.length; i++) {
    if (items[i].num < items[minValueIndex].num) minValueIndex = i;
  }
  return items[minValueIndex];
};

console.log(mergeSortedArrays([[1, 5, 9, 21], [-1, 0], [-124, 81, 121], [3, 6, 12, 20, 150]]));