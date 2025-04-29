//  ---------------- using array ----------------

class Queue {
  constructor(size) {
    this.list = []
    this.size = size;
  }

  enqueue(value) {
    if(this.size <= this.list.length) {
      console.log("Queue is full")
      return
    }
    this.list.push(value)
  }
  
  dequeue() {
    this.list.shift()
  }

  peek() {
    console.log(this.list.at(0))
  }

  print() {
    console.log(this.list)
  }

}

const q = new Queue(5)

q.enqueue(10)
q.enqueue(20)
q.enqueue(30)
q.enqueue(40)
q.enqueue(50)
q.dequeue()
q.enqueue(60)


q.print()

q.peek()

//  ---------------- Using Linked List ----------------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class QueueLinkedList {
  constructor(size) {
    this.size = size;
    this.front = null;
    this.currentLength = 0
  }

  enqueue(value) {
    if(this.size <= this.currentLength) {
      console.log("Queue is full");
      return;
    }
    const node = new Node(value);
    if(this.currentLength === 0) {
      this.front = node;
    } else {
      let cur = this.front;
      while(cur.next) {
        cur = cur.next
      }
      cur.next = node
    }
    this.currentLength++
  }
  
  dequeue() {
    let cur = this.front;
    this.front = cur.next
    this.currentLength--;
  }

  peek() {
    console.log(this.front.value)
  }

  print() {
    const l = []
    let cur = this.front;
    while(cur) {
      l.push(cur.value)
      cur = cur.next
    }
    console.log(l)
  }

}

const ql = new QueueLinkedList(5)

ql.enqueue(10)
ql.enqueue(20)
ql.enqueue(30)
ql.enqueue(40)
ql.enqueue(50)
ql.enqueue(50)
ql.dequeue()
ql.enqueue(60)


ql.print()

ql.peek()

console.log(ql)


//  ---------------- Circular Queue ----------------

class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class CircularQueueLinkedList {
  constructor(size) {
    this.size = size;
    this.head = null;
    this.tail = null;
    this.currentLength = 0
  }

  enqueue(value) {
    if(this.size <= this.currentLength) {
      console.log("Queue is full");
      return;
    }
    const node = new Node(value);

    if(this.currentLength === 0) {
      this.head = node;
    } else {
      this.tail.next = node
    }
    this.tail = node;
    this.tail.next = this.head

    this.currentLength++
  }
  
  dequeue() {
    if(this.head === this.tail) {
      this.head = null
      this.tail = null
    } else {
      this.head = this.head.next;
      this.tail.next = this.head;
    }
    this.head = this.head.next
    this.currentLength--;
  }

  peek() {
    console.log(this.head.value)
  }

  print() {
    const l = []
    let cur = this.head;
    for(let i = 0; i < this.currentLength; i++) {
      l.push(cur.value)
      cur = cur.next
    }
    console.log(l)
  }

}

const cq = new CircularQueueLinkedList(5)

cq.enqueue(10)
cq.enqueue(20)
cq.enqueue(30)
// q.enqueue(40)
// q.enqueue(50)
cq.dequeue()
// q.enqueue(60)


cq.print()

cq.peek()

console.log(cq)