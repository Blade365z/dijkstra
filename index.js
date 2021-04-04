//Dijkstra's Algorithm

// Adjacency List of a weighted graph
const graph = {
    start: {A: 5, B: 2},
        A: {C: 4, D: 2},
        B: {A: 8, D: 7},
        C: {D: 6, finish: 3},
        D: {finish: 1},
   finish: {}
  };

console.log(graph)

//visited  - Array; Keeping track of all the visisted vertex
//weights - HashMap; Keeping track of the weights 
//parentMap -Hashmap; Keeping track of the parents

var visited = [];
var weights = {};
var parentMap = {};

//Functions to be implmeneted
//calulateShortest()
//Dijkstras()
const calulateShortest = (neigh,selectedNode) => {
  Object.keys(neigh).map(neighbour=>{
    if(weights[neighbour]){
      let currentWeight = weights[neighbour];
      let parent = selectedNode;
      let totalWeight = 0;
      while(parent){
        let tempNeigh = graph[parent];
        totalWeight+=tempNeigh[neighbour];
        parent = parentMap[tempNeigh];
      }
      //Relaxation
      if(totalWeight < currentWeight) {
          weights[neighbour] = totalWeight;
          parentMap[neighbour] = selectedNode;
          parent = parentMap[parent];
      }
    }
  })
  let min={
    node:null,
    cost:Infinity
  };
  Object.keys(weights).map(node=>{
    if(weights[node]<min.cost && !visited.includes(node)){
      min.cost = weights[node];
      min.node = node
    }
  });
  return min;
}


const dijksta = (graph) => {
  //Initalization
  Object.keys(graph).map(node=>weights[node]=Infinity)
  Object.keys(graph).map(node=>parentMap[node]=null)
  let selectedNode = null;
  let countTrack = 0; 


  while(visited.length!==Object.entries(graph).length){
    if(countTrack===0){
      selectedNode='start';
      weights[selectedNode] = 0;
      let startNeighbours = graph[selectedNode];
      Object.keys(startNeighbours).map(node=>{
        parentMap[node]=selectedNode
      })
    }
    visited.push(selectedNode)
    let neighbours = graph[selectedNode];
    if(neighbours){
      let min = calulateShortest(neighbours,selectedNode);
      selectedNode=min.node;
    }
    countTrack+=1;
  }
  console.log(weights)
  console.log(parentMap);
}
dijksta(graph);