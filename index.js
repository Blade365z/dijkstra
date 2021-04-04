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

var unvisited = [];
var weights = {};
var parentMap = {};

//Functions to be implmeneted
//calulateShortest()
//Dijkstras()

const calulateShortest = (neigh,selectedNode) => {
  Object.keys(neigh).map(neighbour=>{
    if(weights[neighbour]){
      let currentWeight = weights[neighbour];
      let parent = parentMap[neighbour];
      console.log(parent);
      let totalWeight = 0;
      while(parent){
        let tempNeigh =  graph[parent];
        totalWeight+=tempNeigh[neighbour];
        
      }
    }
  })
}


const dijksta = (graph) => {
  unvisited = Object.keys(graph);
  unvisited.map(node=>weights[node]=Infinity)
  unvisited.map(node=>parentMap[node]=null)

  
  let countTrack = 0; 
  while(unvisited.length!==0){
    let selectedNode = null;
    if(countTrack===0){
      selectedNode='start';
      weights[selectedNode] = 0;
    }
    let neighbours = graph[selectedNode];
    calulateShortest(neighbours,selectedNode);

    unvisited.pop();
    countTrack+=1;
  }
}
dijksta(graph);