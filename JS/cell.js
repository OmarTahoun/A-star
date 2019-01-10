
function Cell(x, y) {
  this.x = x;
  this.y = y;
  this.g = 0;
  this.h = 0;
  this.f = 0;

  this.neighbors = [];
  this.cameFrom = undefined;
  this.blocked = false;
}


Cell.prototype.get_neighbors = function (grid, rows, cols) {
  x = this.x;
  y = this.y;

  if (x<rows-1){
    this.neighbors.push(grid[x+1][y]);
    if (y>0){
      this.neighbors.push(grid[x+1][y-1]);
    }
    if (y < cols-1){
      this.neighbors.push(grid[x+1][y+1])
    }
  }

  if (x>0){
    this.neighbors.push(grid[x-1][y])
    if (y > 0) {
      this.neighbors.push(grid[x-1][y-1])
    }
    if (y < cols-1){
      this.neighbors.push(grid[x-1][y+1])
    }
  }

  if (y < cols-1) {
    this.neighbors.push(grid[x][y+1])
  }

  if (y > 0) {
    this.neighbors.push(grid[x][y-1])
  }

};

Cell.prototype.heuristic = function (goal) {
  let distance = Math.max(Math.abs(this.x - goal.x), Math.abs(this.y - goal.y))
  return distance;
};


//  3- Show function
