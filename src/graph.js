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
  
}