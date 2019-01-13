// Result optimal path
let path = [];
// size of the grid
let rows = cols = 25;

let grid;
let start, end;
let w, h;

let open;
let closed;

var slider, step, search;
function setup() {
  createCanvas(800, 800);
  slider = createSlider(5, 50, 25, 5);
  slider.position(70, 820);
  slider.input(changeSize);

  step = createButton('Step');
  step.position(slider.x + slider.width+10, 820);
  step.mousePressed(oneSstep);

  search = createButton('Search');
  search.position(step.x + step.width+10, 820);
  search.mousePressed(fullSearch);

  w = width / cols;
  h = height / rows;


  grid = createGrid();
  start = grid[0][0]
  end = grid[rows-1][cols-1]
  start.blocked = false;
  end.blocked = false;
  open = [];
  closed = [];
  open.push(start);


}

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
}


function draw() {
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
