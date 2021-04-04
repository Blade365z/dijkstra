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

const calulateShortest = () => {

}

const dijksta = (graph) => {
  Object.keys(graph).map(node=>unvisited.push(node));
  while(unvisited.length!==0){
    
  }
}
dijksta(graph);