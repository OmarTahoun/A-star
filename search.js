function createGrid() {
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
  return grid;
}


// Searches only one step ahead
function oneStep() {
  if (open.length > 0) {
    // Sort the cells based their cost
    open.sort(function(a, b) {
      if(a.f < b.f) return -1;
      if(a.f > b.f) return 1;
      return 0
    });

    // choose the cell with the minimum cost
    let q = open[0]
    open.splice(0,1)
    closed.push(q)

    // If we Reach the end Print the best path
    if (q == end) {
      console.log("Done");
      open = []
      return 1;
    }

    // Calculate the cost for all the neighbors
    for (var i = 0; i < q.neighbors.length; i++) {
      let neighbor = q.neighbors[i];

      // If we didn't reach the end Calculate the cost of the neighbor
      let temp_g = q.g + 1;
      let temp_h = neighbor.heuristic(end);
      let temp_f = temp_g + temp_h;

      // IF the neighbor is not already passed
      if (!closed.includes(neighbor) && !neighbor.blocked) {
        // If the neighbor is not checked before
        if (!open.includes(neighbor)) {
          // Check it
          open.push(neighbor);
          neighbor.g = temp_g;
          neighbor.f = temp_f;
          neighbor.cameFrom = q;
      } else if(temp_f >= neighbor.f){
        // No, it's not a better path
        continue;
      }
    }
    }

        path = [];
        let temp = q;
        path.push(temp);
        while(temp.cameFrom){
          path.push(temp.cameFrom);
          temp = temp.cameFrom;
        }
  }
}
