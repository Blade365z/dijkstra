//Dijkstra's Algorithm

// Adjacency List of a weighted graph
// const graph = {
//   start: { A: 5, B: 2 },
//   A: { C: 4, D: 2 },
//   B: { A: 8, D: 7 },
//   C: { D: 6, finish: 3 },
//   D: { finish: 1 },
//   finish: {}
// };

const graph = {
  start: { A: 5, B: 3 },
  A: { C: 4 },
  B: { A: 7, E: 6 },
  C: { E: 1, D: 2 },
  D: { finish: 1 },
  E: { D: 3 },
  finish: {}
};


console.log('Graph: ', graph)

//visited  - Array; Keeping track of all the visisted vertex
//weights - HashMap; Keeping track of the weights 
//parentMap -Hashmap; Keeping track of the parents

var visited = [];
var weights = {};
var parentMap = {};

//Functions to be implmeneted
//calulateShortest()
//Dijkstras()
const calulateShortest = (neigh, selectedNode) => {
  Object.keys(neigh).map(neighbour => {
    if (weights[neighbour]) {
      let currentWeight = weights[neighbour];
      let parent = selectedNode;
      let totalWeight = 0;
      while (parent) {
        let tempNeigh = graph[parent];
        totalWeight += tempNeigh[neighbour];
        parent = parentMap[tempNeigh];
      }
      //Relaxation
      if (totalWeight <= currentWeight) {
        weights[neighbour] = totalWeight;
        parentMap[neighbour] = selectedNode;
        parent = parentMap[parent];
      }
    }
  })
  //Find the minimum weighted node in the current context
  let min = {
    node: null,
    cost: Infinity
  };
  Object.keys(weights).map(node => {
    if (weights[node] < min.cost && !visited.includes(node)) {
      min.cost = weights[node];
      min.node = node
    }
  });
  return min;
}


const dijksta = (graph) => {
  //Initalization
  let startNode = 'start';
  let finishNode = 'finish';
  Object.keys(graph).map(node => weights[node] = Infinity)
  Object.keys(graph).map(node => parentMap[node] = null)
  let selectedNode = startNode;
  let startNeighbours = graph[selectedNode];
  weights[selectedNode] = 0;
  Object.keys(startNeighbours).map(node => {
    parentMap[node] = selectedNode
  })

  //Analysing all nodes and computing the cost
  while (visited.length !== Object.entries(graph).length) {
    visited.push(selectedNode)
    let neighbours = graph[selectedNode];
    if (neighbours) {
      let min = calulateShortest(neighbours, selectedNode);
      selectedNode = min.node;
    }
  }
  //Backtrack
  let path = [finishNode];
  let parent = parentMap[finishNode];
  let totalCost = weights[finishNode];
  if (parent) {
    while (parent) {
      path.push(parent);
      totalCost += weights[parent];
      parent = parentMap[parent];
    }
    //Printing the results
    console.log('Shortest Path: ', path.reverse().reduce((a, b) => a + ' -> ' + b));
    console.log('Total Cost: ', totalCost);
  }
  else {
    console.log('Destination node unreachable!')
  }
}
dijksta(graph);