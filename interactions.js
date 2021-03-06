// Remove the search result or current work and starts over with a brand new maze.
function startOver() {
  grid = createGrid();
  w = width / cols;
  h = height / rows;
  start = grid[0][0]
  end = grid[rows-1][cols-1]
  start.blocked = false;
  end.blocked = false;
  path = []
  open = [];
  closed = [];
  open.push(start);
  full = false;
}

// Change the grid size
function changeSize() {
  var size = slider.value();
  rows = cols = size;
  grid = createGrid();
  w = width / cols;
  h = height / rows;
  start = grid[0][0]
  end = grid[rows-1][cols-1]
  start.blocked = false;
  end.blocked = false;
  path = []
  open = [];
  closed = [];
  open.push(start);
  full = false;
}

// Mouse is pressed event handeled by the cell function "Clicked"
function mousePressed() {
  for (var i = 0; i <rows; i++) {
    for (var j = 0; j<cols; j++){
      grid[i][j].clicked();
    }
  }
}

// Remove all blocks, Clear canvas
function wipe() {
  for (var i = 0; i <rows; i++) {
    for (var j = 0; j<cols; j++){
      grid[i][j].blocked = false;
    }
  }
}


// Allows Full search in the grid
function fullSearch() {
  full = true;
}
// Save canvas as image
function saveImg() {
  saveCanvas("A_star", "png");
}

function reloadNeighbors() {
  // Getting the neighbors of the cells
  for (var i=0; i<rows; i++ ){
    for (var j=0; j<cols; j++){
      grid[i][j].neighbors = [];
      grid[i][j].get_neighbors(grid, rows, cols);
    }
  }
}
