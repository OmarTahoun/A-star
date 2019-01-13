// Constructor for the cell object
function Cell(x, y) {
  // Position
  this.x = x;
  this.y = y;

  // Hurestic score
  this.g = 0;
  this.h = 0;
  this.f = 0;

  this.neighbors = [];
  this.cameFrom = undefined;
  this.blocked = false;
  if(random(1) < 0.3){
    this.blocked = true;
  }
}

// Gets the neighbors for all cells in a given grid
Cell.prototype.get_neighbors = function (grid, rows, cols) {
  // Current cell location
  x = this.x;
  y = this.y;

  // Right collumn to the current cell
  if (x<rows-1){
    // Cell to the Right
    this.neighbors.push(grid[x+1][y]);
    if (y>0){
      // Right Up
      this.neighbors.push(grid[x+1][y-1]);
    }
    if (y < cols-1){
      // Right Down
      this.neighbors.push(grid[x+1][y+1])
    }
  }

  // Left collumn to the current cell
  if (x>0){
    // Cell to the Left
    this.neighbors.push(grid[x-1][y])
    if (y > 0) {
      // Left up
      this.neighbors.push(grid[x-1][y-1])
    }
    if (y < cols-1){
      // Left Down
      this.neighbors.push(grid[x-1][y+1])
    }
  }


  // Cell Under
  if (y < cols-1) {
    this.neighbors.push(grid[x][y+1])
  }

  // Cell above
  if (y > 0) {
    this.neighbors.push(grid[x][y-1])
  }
};


// Heurestic calculation
Cell.prototype.heuristic = function (goal) {
  let distance = Math.max(Math.abs(this.x - goal.x), Math.abs(this.y - goal.y))
  return distance;
};

//Show function
Cell.prototype.show = function(color,w,h) {
  fill(color);
  if(this.blocked){
    fill(0);
  }
  stroke(0);
  rect(this.x * w, this.y * h, w-1, h-1)
};

Cell.prototype.clicked = function () {
  if (mouseX > this.x * w && mouseX < this.x * w + (w-1) &&
      mouseY > this.y * h && mouseY < this.y * h + (h-1)){
        if(mode.value() == 'Blocks'){
          this.blocked = !this.blocked;
        }
        else if (mode.value() == 'Start'){
          start = grid[this.x][this.y];
          open = [];
          open.push(start);
        }
        else if (mode.value() == 'End'){
          end = grid[this.x][this.y];
          }
      }
};
