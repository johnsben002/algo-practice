function findDuplicate(intArray) {

  // Find a number that appears more than once ... in O(n) time
  /**
   *  the integers are in the range 1..n
      the array has a length of n+1
      STRATEGY: traverse the array from the last position as if it is a linked list
          - find the node (index) that has two pointers to it
          - this means there is a cycle and we need to find the first node of the cycle
   */
  

   // STEP 1: GET INSIDE CYCLE
   const n = intArray.length - 1; 
   let positionInList = intArray.length;
   for (let i = 0; i < n; i++) {
    positionInList = intArray[positionInList-1];
   }

   // STEP 2: FIND LENGTH OF CYCLE
   const rememberedPositionInCycle = positionInList;
   let currentPositionInCycle = intArray[positionInList-1];
   let steps = 1;
   while (currentPositionInCycle !== rememberedPositionInCycle) {
     currentPositionInCycle = intArray[currentPositionInCycle-1];
     steps += 1;
   }

   // STEP 3: FIND FIRST NODE OF THE CYCLE
   let pointerStart = n + 1;
   let pointerAhead = n + 1;
   // move pointerAheead the length of the cycle
   for (let i = 0; i < steps; i++) {
     pointerAhead = intArray[pointerAhead-1];
   }

   // traverse list with both pointers until they are the same
   while(pointerStart != pointerAhead) {
     pointerStart = intArray[pointerStart-1];
     pointerAhead = intArray[pointerAhead-1];
   }
   // return the pointer position, as it is the repeat number
   return pointerAhead;
  

   
}


















// Tests

let desc = 'just the repeated number';
let actual = findDuplicate([1, 1]);
let expected = 1;
assertEqual(actual, expected, desc);

desc = 'short array';
actual = findDuplicate([1, 2, 3, 2]);
expected = 2;
assertEqual(actual, expected, desc);

desc = 'medium array';
actual = findDuplicate([1, 2, 5, 5, 5, 5]);
expected = 5;
assertEqual(actual, expected, desc);

desc = 'long array';
actual = findDuplicate([4, 1, 4, 8, 3, 2, 7, 6, 5]);
expected = 4;
assertEqual(actual, expected, desc);

function assertEqual(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}