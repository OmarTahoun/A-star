// size of the grid
let rows = cols = 25;
let grid;
let start, end;
let w, h;

// Result optimal path
let path = [];
let open;
let closed;
let full = false;

var slider, step, search, clear, reset, mode, save, diagonal;
let font;
// Set up the canvas and all the interactivity stuff.
function setup() {

  var canva = createCanvas(800, 800);
  canva.position((windowWidth - width) / 1.2, (windowHeight - height) / 2);
  slider = createSlider(5, 50, 25, 5);
  slider.position(190, 250);
  slider.input(changeSize);
  slider.addClass("slider")

  var p = createP('Set Grid Size:').addClass('text');
  p.position(slider.x+5, slider.y-slider.height-40);

  step = createButton('Step');
  step.position(slider.x, slider.y + slider.height + 60);
  step.mousePressed(oneStep);
  step.addClass('step');

  search = createButton('Search');
  search.position(step.x+ step.width + 10, step.y );
  search.mousePressed(fullSearch);
  search.addClass('search');

  clear = createButton('Clear');
  clear.position(search.x + search.width + 10, search.y);
  clear.mousePressed(wipe);
  clear.addClass('clear');

  reset = createButton('Reset');
  reset.position(clear.x + clear.width + 10, clear.y);
  reset.mousePressed(startOver);
  reset.addClass('reset');

  mode = createSelect('mode');
  mode.position(step.x, step.y + step.height + 60);
  mode.addClass('drop');
  mode.option('Blocks');
  mode.option('Start');
  mode.option('End');

  diagonal = createSelect('diagonal');
  diagonal.position(step.x, mode.y + mode.height + 60);
  diagonal.addClass('drop');
  diagonal.option('Diagonal');
  diagonal.option('No-Diagonal');
  diagonal.changed(reloadNeighbors);

  var t = createP('Choose what to edit: ').addClass('text');
  t.position(mode.x+5, mode.y-mode.height-30);

  save = createButton('Save');
  save.position(clear.x , mode.y);
  save.mousePressed(saveImg);
  save.addClass('save');

  w = width / cols;
  h = height / rows;
  font = w/3;

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
  // Only if the user wants full search keep running this
  if (full) {
    oneStep();
  }

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
    if (closed[i]== start) {
      closed[i].show(color(0, 255, 0), w, h);
    }
    else if (closed[i] == end) {
      closed[i].show(color(250, 0, 230), w, h);
    }
    else{
      closed[i].show(color(255,0,0), w, h);
    }
  }


  for (var i=0; i<open.length; i++){
    if (open[i]== start) {
      open[i].show(color(0, 255, 0), w, h);
    }
    else if (open[i] == end) {
      open[i].show(color(250, 0, 230), w, h);
    }
    else{
      open[i].show(color(0,255,0), w, h);
    }
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
