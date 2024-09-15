/**
 * You're given a list of elements. Each element has a unique id and 3 properties. Two elements are considered as duplicates if they share any
of the 3 properties. Please write a function that takes the input and returns all the duplicates.

Input:
E1: id1, p1, p2, p3
E2: id2, p1, p4, p5
E3: id3, p6, p7, p8

Output: {{id1, id2}, {id3}}

Input:
E1: id1, p1, p2, p3
E2: id2, p1, p4, p5
E3: id3, p5, p7, p8

Output: {{id1, id3, id3}}
 */

class Node {
  constructor(id) {
    this.id = id;
    this.adjList = [];
  }
}

function findDuplicatesByProperties(list) {
  const graph = new Map();

  for (let obj of list) {
    graph.set(obj.id, new Node(obj.id));
  }

  const properties = new Map();
  for (let obj of list) {
    for (let key in obj) {
      if (key === 'id') {
        continue;
      }
      if (!properties.has(key)) {
        properties.set(key, obj.id);
      } else {
        const prevObj = graph.get(properties.get(key));
        prevObj.adjList.push(obj);

        const currentObj = graph.get(obj.id);
        currentObj.adjList.push(prevObj);
      }
    }
  }

  function traverse(node, visited) {
    if (visited.has(node.id)) {
      return;
    }
    visited.add(node.id);
    for (let nei of graph.get(node.id).adjList) {
      traverse(nei, visited);
    }
  }

  const visited = new Set();
  const result = [];
  for (let node of graph.values()) {
    if (!visited.has(node.id)) {
      result.push([graph.get(node.id), ...node.adjList]);
      traverse(node, visited);
    }
  }
  return result;
}

const arr = [
  {
    id: 1,
    p1: 'a',
    p2: 'b',
    p3: 'c',
  },
  {
    id: 2,
    p1: 'a',
    p4: 'b',
    p5: 'c',
  },
  {
    id: 3,
    p14: 'a',
    p6: 'b',
    p7: 'c',
  },
  {
    id: 4,
    p9: 'a',
    p10: 'b',
    p11: 'c',
  },
];

console.log(findDuplicatesByProperties(arr));
