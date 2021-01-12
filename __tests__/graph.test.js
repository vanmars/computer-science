import Graph from '../src/graph.js';

describe('Graphy', () => {

  let graph = new Graph();

  afterEach(() => {
    graph = new Graph();
  });

test('should correctly instantiate a graph', () => {
    expect(graph.adjacencyList.size).toEqual(0);
  })

test('should add a new node', () => {
    graph.addNode("Jasmine");
    expect(graph.adjacencyList.get("Jasmine").size).toEqual(0);
  });

test('should return null if the node does not exist in the adjacency list', () => {
    expect(graph.hasNode("Ada")).toEqual(false);
  })
})