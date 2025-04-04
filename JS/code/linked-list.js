class Node {
  constructor(value) {
    this.value = value;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0
  }

  isEmpty() {
    return this.size === 0;
  }

  print() {
    const l = [];
    let cur = this.head;
    while(cur) {
      l.push(cur.value)
      cur = cur.next
    }
    console.log(l)
  }

  prepend(value) {
    const node = new Node(value);
    if(this.isEmpty()) {
      this.head = node;
      this.next = null
    } else {
      node.next = this.head;
      this.head = node
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if(this.isEmpty()) {
      this.head = node;
      this.next = null
    } else {
      let prev = this.head;
      while(prev.next) {
        prev = prev.next;
      }
      prev.next = node
    }
    this.size++;
  }

  insert(value, index) {
    if(index < 0 || index > this.size) {
      return console.log("Enter valid index");
    }

    if(index === 0) {
      this.prepend(value);
      return;
    }
    
    let prev = this.head;
    for(let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    const node = new Node(value);
    node.next = prev.next;
    prev.next = node;
    this.size++;
  }

  removeAtHead() {
    if(!this.isEmpty()) {
      this.head = this.head.next
      this.size--;
    }
  }

  remove(index) {
    if (index < 0 || index >= this.size) {
      return console.log("Enter valid index");
    }

    if(index === 0) {
      this.removeAtHead();
      return;
    }

    let prev = this.head;
    for(let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }
    prev.next = prev?.next?.next;
    this.size--
  }

  removeValue(value) {
    let cur = this.head;
    let prev = this.head;
    let index = 0
    while (value !== cur.value) {
      if(cur.next === null) {
        return console.log("Value not found")
      }
      cur = cur.next;
      index++;
    }

    if(Object.is(cur, prev)) {
      this.head = this.head.next
      return;
    }
    
    for (let i = 0; i < index - 1; i++) {
      prev = prev.next;
    }

    prev.next = cur.next;
    this.size--
  }

  reverse() {
    let cur = this.head;
    let prev = null;
    
    while(cur) {
      let next = cur.next;
      cur.next = prev;
      prev = cur;
      cur = next
    }
    this.head = prev;
  }

}

let l = new LinkedList()

l.prepend(20)
l.prepend(10)

l.append(50)
l.append(70)

l.insert(30, 2);
l.insert(60, 4);
l.print()
// l.removeAtHead();

// l.remove(5)

// l.removeValue(10)

l.reverse()

l.print()
console.log(l)











// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor() {
//     this.head = null;
//     this.size = 0
//   }

//   empty() {
//     return this.size === 0
//   }

//   prepend (value) {
//     const node = new Node(value);
//     if(this.empty()) {
//       this.head = node
//     } else {
//       node.next = this.head;
//       this.head = node;
//     }
//     this.size++;
//   }

//   append(value) {
//     const node = new Node(value);
//     if(this.empty()) {
//       this.head = node
//     } else {
//       let cur = this.head;
//       while(cur.next) {
//         cur = cur.next
//       }
//       cur.next = node
//     }
//     this.size++;
//   }

//   insert(value, index) {
//     if(index < 0 || this.size <= index) {
//       console.log("Enter valid index")
//       return;
//     }
//     if(index === 0) {
//       return this.prepend(value)
//     } else {
//       const node = new Node(value);
//       let prev = this.head;
//       for (let i = 0; i < index - 1; i++) {
//         prev = prev.next;
//       }
//       node.next = prev.next
//       prev.next = node;
//       this.size++
//     }
//   }

//   remove(value) {
//     let cur = this.head;
//     let index = 0;
//     while(cur && cur.value !== value) {
//       cur = cur.next
//       index++;
//     }

//     if(index === 0) {
//       this.head = null;
//       this.size--;
//       return;
//     }
    
//     let prev = this.head;
//     for (let i = 0; i < index - 1; i++) {
//       prev = prev.next;
//     }
//     prev.next = cur.next;
//     this.size--
//   }

//   print() {
//     let l = [];
//     let cur = this.head;
//     while(cur) {
//       l.push(cur.value)
//       cur = cur.next
//     }
//     console.log(l)
//   }

// }

// const l = new LinkedList();


// l.prepend(20);
// l.prepend(10);

// l.append(30);

// l.insert(2, 1)
// l.insert(3, 2)

// l.remove(3);
// l.remove(30);
// l.remove(2);
// l.remove(20);
// l.remove(10);

// console.log(l.empty())
// l.print()
// console.log(l)

