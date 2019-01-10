// Result optimal path
let path = [];
// size of the grid
let rows = cols = 50;

let grid;
let start, end;
let w, h;

let open = []
let closed = []

function setup() {
  createCanvas(800, 800);
  w = width / cols;
  h = height / rows;


  grid = createGrid();
  start = grid[0][0]
  end = grid[rows-1][cols-1]
  open.push(start)
  // Start the search....
}


function draw() {
  if (open.length > 0) {
    search();
  }else{
    // No solution
    // console.log("finished");
  }

  // Draw the grid;
  for (var i = 0; i <rows; i++) {
    for (var j = 0; j<cols; j++){
      grid[i][j].show(color(255), w, h);
    }
  }

  for (var i=0; i<closed.length; i++){
    closed[i].show(color(255,0,0), w,h)
  }

  for (var i=0; i<open.length; i++){
    open[i].show(color(0,255,0), w,h)
  }

  // Draw the search process
 for (var i = 0; i<path.length; i++){
   path[i].show(color(0,0,255), w, h);
 }
}
