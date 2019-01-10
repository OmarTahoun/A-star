let path = [];
let rows = cols = 5;
let grid  = new Array(rows);

for (var i = 0; i<rows; i++){
  grid[i] = new Array(cols);
}

for (var i=0; i<rows; i++ ){
  for (var j=0; j<cols; j++){
    grid[i][j] = new Cell(i, j);
  }
}

for (var i=0; i<rows; i++ ){
  for (var j=0; j<cols; j++){
    grid[i][j].get_neighbors(grid, rows, cols);
  }
}

let start = grid[0][0]
let end = grid[rows-1][cols-1]

let open = []
let closed = []
open.push(start)

while (open.length > 0){
  open.sort(function(a, b) {
    if(a.f < b.f) return -1;
    if(a.f > b.f) return 1;
    return 0
  });

  let q = open[0]
  open.splice(0,1)



  for (var i = 0; i < q.neighbors.length; i++) {
    let neighbor = q.neighbors[i];
    if (neighbor == end) {
      console.log("Done");
      neighbor.cameFrom = q;

      let temp = neighbor;
      path.push(temp);
      while(temp.cameFrom){
        path.push(temp.cameFrom);
        temp = temp.cameFrom;
      }
      for(var i = 0; i<path.length; i++){
        console.log(path[i].x, path[i].y);
      }
      open = [];
      break;
    }

    let temp_g = q.g + 1;
    let temp_h = neighbor.heuristic(end);
    let temp_f = temp_g + temp_h;

    if (!closed.includes(neighbor)) {
      if (!open.includes(neighbor)) {
        neighbor.cameFrom = q;
        open.push(neighbor);
      }else if (temp_f > neighbor.f) {
        continue;
      }
    }
  }

  closed.push(q)
}
