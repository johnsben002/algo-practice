class QueueTwoStacks {
  
  constructor() {
    this.stack1 = [];
    this.stack2 = [];
  }
  
  enqueue(item) {
    // push item into stack 1
    this.stack1.push(item);
  }

  dequeue() {
    // check if queue is empty for edge case
    if (this.stack1.length === 0 && this.stack2.length === 0) {
      throw new Error('cannot dequeue from empty queue');
    }
    // check if anything is in stack 2, if yes, pop it off
    if (this.stack2.length > 0) return this.stack2.pop();

    // if stack 2 is empty, pop off everything in stack1 into stack2, and return out the last one
    while (this.stack1.length > 0) {
      this.stack2.push(this.stack1.pop());
    }

    return this.stack2.pop();
  }
}


// Tests
const q = new QueueTwoStacks();

q.enqueue(1);
q.enqueue(2);
q.enqueue(3);

let desc = 'dequeue #1';
let actual = q.dequeue();
let expected = 1;
assertEquals(actual, expected, desc);

desc = 'dequeue #2';
actual = q.dequeue();
expected = 2;
assertEquals(actual, expected, desc);

q.enqueue(4);

desc = 'dequeue #3';
actual = q.dequeue();
expected = 3;
assertEquals(actual, expected, desc);

desc = 'dequeue #4';
actual = q.dequeue();
expected = 4;
assertEquals(actual, expected, desc);

desc = 'dequeue from empty queue';
const emptyDequeue = () => q.dequeue();
assertThrowsError(emptyDequeue, desc);

function assertEquals(a, b, desc) {
  if (a === b) {
    console.log(`${desc} ... PASS`);
  } else {
    console.log(`${desc} ... FAIL: ${a} != ${b}`);
  }
}

function assertThrowsError(func, desc) {
  try {
    func();
    console.log(`${desc} ... FAIL`);
  } catch (e) {
    console.log(`${desc} ... PASS`);
  }
}