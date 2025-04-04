class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root === null;
  }

  insertNode(root, node) {
    if (node.value < root.value) {
      if (root.left === null) {
        root.left = node
      } else {
        this.insertNode(root.left, node)
      }
    } else {
      if (root.right === null) {
        root.right = node
      } else {
        this.insertNode(root.right, node)
      }
    }
  }

  insert(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node
    } else {
      this.insertNode(this.root, node)
    }
  }

  search(root, value) {
    if(!root) {
      return null
    }
    if(root.value === value) {
      return true
    } else if (value < root.value) {
      return this.search(root.left, value)
    } else {
      return this.search(root.right, value)
    }
  }

  preOrder(root) {
    if (root) {
      console.log(root.value)
      this.preOrder(root.left)
      this.preOrder(root.right)
    }
  }

  inOrder(root) {
    if (root) {
      this.preOrder(root.left)
      console.log(root.value)
      this.preOrder(root.right)
    }
  }

  postOrder(root) {
    if (root) {
      this.preOrder(root.left)
      this.preOrder(root.right)
      console.log(root.value)
    }
  }
  min(root) {
    if(!root.left) {
      return root.value
    } else {
      return this.min(root.left)
    }
  }
  
  max(root) {
    if(!root.right) {
      return root.value
    } else {
      return this.min(root.right)
    }
  }

  levelOrder(root) { // BFS
    let l = []
    l.push(root)
    while(l.length) {
      const cur = l.shift()
      console.log(cur.value)
      if(cur.left) {
        l.push(cur.left)
      }
      if(cur.right) {
        l.push(cur.right)
      }
    }
  }
  // yet to see delete
}

const t = new Tree()

t.insert(10)
t.insert(15)
t.insert(5)
t.insert(50)
t.insert(1)

console.log(t.search(t.root, 50))
console.log(t.search(t.root, 5))

console.log('--------------')

t.postOrder(t.root)


console.log("is empty:", t.isEmpty())

console.log(t)