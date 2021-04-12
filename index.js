//Dijkstra's Algorithm

// Adjacency List of a weighted graph



const graph = {
  "0": {
    "1": 1,
    "5": 1
  },
  "1": {
    "2": 1,
    "6": 1
  },
  "2": {
    "3": 1,
    "7": 1
  },
  "3": {
    "4": 1,
    "8": 1
  },
  "4": {
    "5": 1,
    "9": 1
  },
  "5": {
    "6": 1,
    "10": 1
  },
  "6": {
    "7": 1,
    "11": 1
  },
  "7": {
    "8": 1,
    "12": 1
  },
  "8": {
    "9": 1,
    "13": 1
  },
  "9": {
    "10": 1,
    "14": 1
  },
  "10": {
    "11": 1,
    "15": 1
  },
  "11": {
    "12": 1,
    "16": 1
  },
  "12": {
    "13": 1,
    "17": 1
  },
  "13": {
    "14": 1,
    "18": 1
  },
  "14": {
    "15": 1,
    "19": 1
  },
  "15": {
    "16": 1,
    "20": 1
  },
  "16": {
    "17": 1,
    "21": 1
  },
  "17": {
    "18": 1,
    "22": 1
  },
  "18": {
    "19": 1,
    "23": 1
  },
  "19": {
    "20": 1,
    "24": 1
  },
  "20": {
    "21": 1
  },
  "21": {
    "22": 1
  },
  "22": {
    "23": 1
  },
  "23": {
    "24": 1
  },
  "24": {}
}

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
Dijkstra(graph);

function calulateShortest(neigh, selectedNode) {
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
      if (totalWeight < currentWeight) {
        weights[neighbour] = totalWeight;
        parentMap[neighbour] = selectedNode;
        parent = parentMap[parent];
      }
    }
  })
  //Find the minimum weighted node in the current context

  var min = {
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


function Dijkstra(graph) {
  //Initalization
  let startNode = "5";
  let finishNode = "13";
  Object.keys(graph).map(node => weights[node] = Infinity)
  Object.keys(graph).map(node => parentMap[node] = null)
  let selectedNode = startNode;
  let startNeighbours = graph[selectedNode];
  weights[selectedNode] = 0;
  Object.keys(startNeighbours).map(node => {
    parentMap[node] = selectedNode
  })
  //Analysing all nodes and computing the cost
  // while (visited.length !== Object.entries(graph).length) {
  //   if (!visited.includes(selectedNode))
  //     visited.push(selectedNode)
  //   let neighbours = graph[selectedNode];
  //   if (neighbours) {
  //     let min = calulateShortest(neighbours, selectedNode);
  //     selectedNode = min.node;
  //   }
  // }
  Object.keys(graph).forEach(node => {
    if (!visited.includes(selectedNode))
      visited.push(selectedNode)
    let neighbours = graph[selectedNode];
    if (neighbours) {
      let min = calulateShortest(neighbours, selectedNode);
      selectedNode = min.node;
    }
  })
  console.log(visited)

  //Backtrack
  //Validating if the destination is reachable or not.
  let parent = parentMap[finishNode];
  if (parent) {
    let path = [finishNode];
    let totalCost = weights[finishNode];
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


