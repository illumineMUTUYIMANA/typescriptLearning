const graph: readonly [x: number, y: number] = [55.2, 41.3];
graph.push(10.2);

graph.push('hello');

let [x,y] =graph;

console.log(x);
console.log(graph[3]);
console.log(graph);


