//  ---------------- using array ----------------

class Stack{
  constructor() {
    this.stack = []
  }
  push(ele) {
    this.stack.push(ele)
  }
  pop() {
    this.stack.pop()
  }
  show() {
    return this.stack
  }
}

const s = new Stack()


s.push(1)
s.push(2)
s.push(5)
s.pop()
console.log(s.show())


//  ---------------- Using Linked List ----------------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0
  }

  push(value) {
    const node = new Node(value);
    node.next = this.top;
    this.top = node;
    this.size++;
  }

  pop() {
    if (this.isEmpty()) return console.log("Stack is empty");
    let cur = this.top.next
    this.top = cur;
    this.size--;
  }

  peek() {
    if (this.isEmpty()) return console.log("Stack is empty");
    return this.top.value
  }

  print() {
    const l = []
    let cur = this.top;

    while(cur) {
      l.push(cur.value)
      cur = cur.next
    }
    console.log(l)
  }
}

const stack = new Stack()

stack.push(12)
stack.push(13)
stack.push(14)
stack.push(15)

stack.pop()
// stack.pop()
// stack.pop()

stack.print()

console.log("Top :", stack.peek())

console.log(stack)
