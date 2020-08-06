// This is an input class. Do not edit.
class Node {
  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

// Feel free to add new properties and methods to the class.
class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  setHead(node) {
    // Write your code here.
    if (this.head === null) {
      this.head = node;
      this.tail = node;
      return;
    }
    this.insertBefore(this.head, node);
  }

  setTail(node) {
    // Write your code here.
    if (this.tail === null) {
      this.setHead(node);
      return;
    }
    this.insertAfter(this.tail, node);
  }

  insertBefore(node, nodeToInsert) {
    // Write your code here.
    
  }

  insertAfter(node, nodeToInsert) {
    // Write your code here.
  }

  insertAtPosition(position, nodeToInsert) {
    // Write your code here.
  }

  removeNodesWithValue(value) {
    // Write your code here.
  }

  remove(node) {
    // Write your code here.
  }

  containsNodeWithValue(value) {
    // Write your code here.
  }
}


// [
//   {"id": "1", "next": null, "prev": null, "value": 1},
//   {"id": "2", "next": null, "prev": null, "value": 2},
//   {"id": "3", "next": null, "prev": null, "value": 3},
//   {"id": "3-2", "next": null, "prev": null, "value": 3},
//   {"id": "3-3", "next": null, "prev": null, "value": 3},
//   {"id": "4", "next": null, "prev": null, "value": 4},
//   {"id": "5", "next": null, "prev": null, "value": 5},
//   {"id": "6", "next": null, "prev": null, "value": 6}
// ]
// [
//   {"arguments": ["5"], "method": "setHead"},
//   {"arguments": ["4"], "method": "setHead"},
//   {"arguments": ["3"], "method": "setHead"},
//   {"arguments": ["2"], "method": "setHead"},
//   {"arguments": ["1"], "method": "setHead"},
//   {"arguments": ["4"], "method": "setHead"},
//   {"arguments": ["6"], "method": "setTail"},
//   {"arguments": ["6", "3"], "method": "insertBefore"},
//   {"arguments": ["6", "3-2"], "method": "insertAfter"},
//   {"arguments": [1, "3-3"], "method": "insertAtPosition"},
//   {"arguments": [3], "method": "removeNodesWithValue"},
//   {"arguments": ["2"], "method": "remove"},
//   {"arguments": [5], "method": "containsNodeWithValue"}
// ]