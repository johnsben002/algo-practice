/**
 * 
 * Link to Algo Expert Problem: https://www.algoexpert.io/questions/Merge%20Sorted%20Arrays
 */

// function xmergeSortedArrays(arrays) {
//   // Write your code here.
//   // initialize final sorted list array
//   const sortedList = [];
//   // initiazlize array of indexes of the current smallest of each array in arrays
//   const elementIdxs = arrays.map(() => 0);

//   // while loop set to true, will break out once the sortedList is complete
//   while (true) {
//     // array to store smallest items of each array
//     const smallestItems = [];
//     // iterate through arrays to populate smallestItems array
//     for (let arrayIdx = 0; arrayIdx < arrays.length; arrayIdx++) {
//       const relevantArray = arrays[arrayIdx];
//       const elementIdx = elementIdxs[arrayIdx];
//       // skip this array if there are no more elements to add to sorted
//       if (elementIdx === relevantArray.length) continue;
//       // push smallest to current (note: alse need to push arrayIdx so we can increment elementIdxs where appropriate)
//       smallestItems.push({
//         arrayIdx,
//         num: relevantArray[elementIdx]
//       });
//     }
//     // if there are zero elements in smallestItems, we can break and return sortedList
//     if (smallestItems.length === 0) break;
//     // find smallest item of smallestItems array, push it into the sortedList, and increment the correct elementIdx
//     const nextItem = getMinValue(smallestItems);
//     sortedList.push(nextItem.num);
//     elementIdxs[nextItem.arrayIdx]++;
//   }
//   return sortedList;
// }

// const xgetMinValue = (items) => {
//   let minValueIndex = 0;
//   for (let i = 1; i < items.length; i++) {
//     if (items[i].num < items[minValueIndex].num) minValueIndex = i;
//   }
//   return items[minValueIndex];
// };


function mergeSortedArrays(arrays) {
  const sorted = [];
  const smallestItems = [];
  // populate smallestItems array
  for (let arrayIndex = 0; arrayIndex < arrays.length; arrayIndex++) {
    smallestItems.push({
      arrayIndex,
      elementIndex: 0,
      num: arrays[arrayIndex][0]
    });
  }
  const heap = new MinHeap(smallestItems);
  while (!heap.isEmpty()) {
    const smallestItem = heap.remove();
    const {arrayIndex, elementIndex, num} = smallestItem;
    sorted.push(num);
    if (elementIndex === arrays[arrayIndex].length-1) continue;
    heap.insert({
      arrayIndex,
      elementIndex: elementIndex + 1,
      num: arrays[arrayIndex][elementIndex+1]
    });
  }
  return sorted;
}

class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  isEmpty() {
    return this.heap.length === 0;
  }

  buildHeap(array) {
    // start on very last parent node and call siftDown on every node on the tree
    const lastParent = Math.floor((array.length-2)/2);
    for (let i = lastParent; i >= 0; i--) {
      this.siftDown(i, array.length-1, array);
    }
    return array;
  }

  siftDown(i, endIdx, array) {
    // swap w/ smallest of 2 children until in correct place or has no children
    let childOne = 2*i+1;
    while (childOne <= endIdx) {
      let smallerChild;
      const childTwo = 2*i+2 <= endIdx ? 2*i+2 : -1;
      if (childTwo !== -1 && array[childTwo].num < array[childOne].num) {
        smallerChild = childTwo;
      } else {
        smallerChild = childOne;
      };
      if (array[smallerChild].num < array[i].num) {
        this.swap(array, i, smallerChild);
        i = smallerChild;
        smallerChild = i * 2 + 1;
      } else {
        return;
      }
    };
  }

  siftUp(i, array) {
    // swap node with parent node until in correct place
    let parent = Math.floor((i-1)/2);
    while (i > 0 && array[i].num < array[parent].num) {
      this.swap(array, i, parent);
      i = parent;
      parent = Math.floor((i-1)/2);
    }
   
  }

  remove() {
    // swap root and last node
    this.swap(this.heap, 0, this.heap.length-1);
    // pop off last node
    const removed = this.heap.pop();
    // sift down on the new root node
    this.siftDown(0, this.heap.length-1, this.heap);
    return removed;
  }

  insert(value) {
    // add vlaue as last node in heap
    this.heap.push(value);
    // call sift up on it
    this.siftUp(this.heap.length-1, this.heap);
  }

  swap(arr, i, j) {
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
};



console.log(mergeSortedArrays([[1, 5, 9, 21], [-1, 0], [-124, 81, 121], [3, 6, 12, 20, 150]]));


// TESTING OUT HEAP IMPLEMENTATION
// const testArray1 = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];

// const heap = new MinHeap(testArray1);
//  console.log(heap);
//  console.log(heap.insert(76));
//  console.log(heap.peek());
//  console.log(heap.remove());
//  console.log(heap.peek());
//  console.log(heap.remove());
//  console.log(heap.peek());
//  console.log(heap.insert(87));
//  console.log(heap);