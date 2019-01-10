// Result optimal path
let path = [];

// size of the grid
let rows = cols = 5;

// open set and closed set
let open = []
let closed = []

// Initalizing a grid 2D array
let grid  = new Array(rows);
for (var i = 0; i<rows; i++){
  grid[i] = new Array(cols);
}

// Constructing the cells of the grid
for (var i=0; i<rows; i++ ){
  for (var j=0; j<cols; j++){
    grid[i][j] = new Cell(i, j);
  }
}

// Getting the neighbors of the cells
for (var i=0; i<rows; i++ ){
  for (var j=0; j<cols; j++){
    grid[i][j].get_neighbors(grid, rows, cols);
  }
}

// Start and end point of our search
let start = grid[0][0]
let end = grid[rows-1][cols-1]

// Starting the search from the start point
open.push(start)
while (open.length > 0){
  // Sort the cells based their cost
  open.sort(function(a, b) {
    if(a.f < b.f) return -1;
    if(a.f > b.f) return 1;
    return 0
  });

  // choose the cell with the minimum cost
  let q = open[0]
  open.splice(0,1)

  // Calculate the cost for all the neighbors
  for (var i = 0; i < q.neighbors.length; i++) {
    let neighbor = q.neighbors[i];

    // If we Reach the end Print the best path
    if (neighbor == end) {
      console.log("Done");

      neighbor.cameFrom = q;
      let temp = neighbor;
      path.push(temp);
      while(temp.cameFrom){
        path.push(temp.cameFrom);
        temp = temp.cameFrom;
      }

      // Print the path
      for(var i = 0; i<path.length; i++){
        console.log(path[i].x, path[i].y);
      }
      // exit the while loob
      open = [];
      break;
    }


    // If we didn't reach the end Calculate the cost of the neighbor
    let temp_g = q.g + 1;
    let temp_h = neighbor.heuristic(end);
    let temp_f = temp_g + temp_h;


    // IF the neighbor is not already passed
    if (!closed.includes(neighbor)) {
      // If the neighbor is not checked before
      if (!open.includes(neighbor)) {
        // Check it
        neighbor.cameFrom = q;
        open.push(neighbor);
      }else if (temp_f > neighbor.f) {
        continue;
      }
    }
  }

  // Add the current cell to the closed set
  closed.push(q)
}
