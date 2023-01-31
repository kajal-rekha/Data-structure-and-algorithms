// adjacency matrix (O(n))

const matrix = [
  [0, 1, 0],
  [1, 0, 1],
  [0, 1, 0],
];

// 2d matrix
// 0 --> no connection
// 1 --> connected

console.log(matrix[0][1]); // 1
console.log(matrix[1][0]); // 1
console.log(matrix[0][2]); // 0
console.log(matrix[0][0]); // 0

// adjacency list (O(1))

adjacencyList = {
  A: ["B"],
  B: ["A", "C"],
  C: ["B"],
};

console.log(adjacencyList["C"]);

class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }

    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(vertex + " --> " + [...this.adjacencyList[vertex]]);
    }
  }

  hasEdge(vertex1, vertex2) {
    return (
      this.adjacencyList[vertex1].has(vertex2) &&
      this.adjacencyList[vertex2].has(vertex1)
    );
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
  }

  // time depends on the times
  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return null;
    } else {
      //remove edges

      for (let adjacencyVartex of this.adjacencyList[vertex]) {
        this.removeEdge(vertex, adjacencyVartex);
      }

      // delete vertex
      delete this.adjacencyList[vertex];
    }
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");

graph.addEdge("A", "B");
graph.addEdge("B", "C");

console.log(graph.hasEdge("A", "C"));

// graph.removeEdge("C", "B");

graph.removeVertex("A");

graph.display();
