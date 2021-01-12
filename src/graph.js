export default class Graph {
  constructor() {
    this.adjacencyList = new Map();
  }

  addNode(name) {
    this.adjacencyList.set(name, new Set());
  }

  hasNode(name) {
    if (this.adjacencyList.get(name)) {   //returns key if exists, or undefined if key does not exist
      return true;
    }
    return false;
  }

  createEdge(node1, node2) {
    this.adjacencyList.get(node1).add(node2);
    this.adjacencyList.get(node2).add(node1);
  }

  hasEdge(node1, node2) {
    return false;
  }
  
}