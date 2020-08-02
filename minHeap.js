/**
 * Link to Algo Expert problem: https://www.algoexpert.io/questions/Min%20Heap%20Construction
 */

// Do not edit the class below except for the buildHeap,
// siftDown, siftUp, peek, remove, and insert methods.
// Feel free to add new properties and methods to the class.
class MinHeap {
  constructor(array) {
    this.heap = this.buildHeap(array);
  }

  buildHeap(array) {
    // start on very last parent node and call siftDown on every node on the tree
    const lastParent = Math.floor((array.length-2)/2);
    for (let i = lastParent; i >= 0; i--) {
      this.siftDown(i, array);
    }
    return array;
  }

  siftDown(i, array) {
    // swap w/ smallest of 2 children until in correct place or has no children
    const childOne = 2*i+1;
    const childTwo = 2*i+2;
    let smallerChild = array[childOne] < array[childTwo] ? childOne : childTwo;
    if (array[childOne] && !array[childTwo]) {  // edge case where there is only one child
      smallerChild = childOne;
    }

    // Base Case:
    if (!array[smallerChild] || array[smallerChild] >= array[i]) return array;

    // swap smallerChild w/ parent and recursively call
    [array[smallerChild], array[i]] = [array[i], array[smallerChild]];
    this.siftDown(smallerChild, array);
  }

  siftUp(i) {
    // swap node with parent node until in correct place
    const parent = Math.floor((i-1)/2);
    // base case:
    if (this.heap[parent] <= this.heap[i]) return;
    // swap w/ parent and call recursively
    [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
    this.siftUp(parent);
  }

  peek() {
    return this.heap[0];
  }

  remove() {
    // swap root and last node
    [this.heap[0], this.heap[this.heap.length-1]] = [this.heap[this.heap.length-1], this.heap[0]];
    // pop off last node
    const removed = this.heap.pop();
    // sift down on the new root node
    this.siftDown(0, this.heap);
    return removed;
  }

  insert(value) {
    // add vlaue as last node in heap
    this.heap.push(value);
    // call sift up on it
    this.siftUp(this.heap.length-1);
  }
};

const alreadyHeap = [9, 12, 23, 17, 18, 30, 44, 102, 31];
const testArray1 = [48, 12, 24, 7, 8, -5, 24, 391, 24, 56, 2, 6, 8, 41];

/** 
 * [
  {"arguments": [76], "method": "insert"},
  {"arguments": [], "method": "peek"},
  {"arguments": [], "method": "remove"},
  {"arguments": [], "method": "peek"},
  {"arguments": [], "method": "remove"},
  {"arguments": [], "method": "peek"},
  {"arguments": [87], "method": "insert"}
]
 */

 const heap = new MinHeap(testArray1);
 console.log(heap);
 console.log(heap.insert(76));
 console.log(heap.peek());
 console.log(heap.remove());
 console.log(heap.peek());
 console.log(heap.remove());
 console.log(heap.peek());
 console.log(heap.insert(87));
 console.log(heap);

