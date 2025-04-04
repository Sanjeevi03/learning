class Graph {
  constructor() {
    this.adjacencyList = {}
  }

  addVertex(vertex) {
    if(!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set()
    }
  }

  addEdge(v1, v2) {
    if(!this.adjacencyList[v1]) {
      this.addVertex(v1)
    }
    if(!this.adjacencyList[v2]) {
      this.addVertex(v2)
    }
    this.adjacencyList[v1].add(v2)
    this.adjacencyList[v2].add(v1)
  }

  display() {
    for(let i in this.adjacencyList) {
      console.log(i, "->", [...this.adjacencyList[i]])
    }
  }

  hasEdge(v1, v2) {
    return this.adjacencyList[v1].has(v2) && this.adjacencyList[v2].has(v1)
  }

  removeEdge(v1, v2) {
    this.adjacencyList[v1].delete(v2)
    this.adjacencyList[v2].delete(v1)
  }

  removeVertex(v) {
    if(!this.adjacencyList[v]) return;
    for(let i of this.adjacencyList[v]) {
      this.removeEdge(v, i)
    }
    delete this.adjacencyList[v]
  }
}

const gr = new Graph();

gr.addVertex("A")
gr.addVertex("B")
gr.addVertex("C")

gr.addEdge("A", "B")
gr.addEdge("B", "C")
// gr.addEdge("C", "D")

// gr.removeEdge("A", "B")

// console.log(gr.hasEdge("A", 'C'))

gr.removeVertex("A")
gr.display()
console.log(gr)