// Result optimal path
let path = [];
// size of the grid
let rows = cols = 25;

let grid;
let start, end;
let w, h;

let open;
let closed;

var slider, step, search, clear, reset, mode;

// Set up the canvas and all the interactivity stuff.
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

  clear = createButton('Clear');
  clear.position(search.x + search.width+10, 820);
  clear.mousePressed(wipe);

  reset = createButton('Reset');
  reset.position(clear.x + clear.width+10, 820);
  reset.mousePressed(startOver);

  mode = createRadio('mode');
  mode.position(reset.x + reset.width+10, 820);
  mode.option('Blocks');
  mode.option('Start');
  mode.option('End');

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

function draw() {
  // Draw the grid;
  for (var i = 0; i <rows; i++) {
    for (var j = 0; j<cols; j++){
      if (grid[i][j] == start) {
        grid[i][j].show(color(0, 255, 0), w, h);
      }
      else if (grid[i][j] == end) {
        grid[i][j].show(color(250, 0, 230), w, h);
      }
      else{
        grid[i][j].show(color(255), w, h);
      }
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
   if (path[i]== start) {
     path[i].show(color(0, 255, 0), w, h);
   }
   else if (path[i] == end) {
     path[i].show(color(250, 0, 230), w, h);
   }
   else{
     path[i].show(color(0,0,255), w, h);
   }
 }
}
