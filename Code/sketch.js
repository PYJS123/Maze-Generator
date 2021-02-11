let cols = 10,
  rows = cols;

let grid = [];

let current;

let stack = [];

// let allVis = true;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < cols; j++) {
      grid[i][j] = new Cell(i, j, width / cols, height / rows);
    }
  }
  current = grid[0][0];
  current.visited = true;
  stack.push(current);
  // frameRate(5);
}

function draw() {
  background(220);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < cols; j++) {
      grid[i][j].show();
      // if (grid[i][j].visited === false) {
      //   allVis = false;
      // }
    }
  }

  fill(0, 255, 0, 100);
  noStroke();
  rect(current.posx, current.posy, current.w, current.h);

  if (stack.length != 0) {
    let ngb = checkNeighbours();
    if (ngb == 'noway') {
      current = stack.pop();
      // stack.push(current);
    } else {
      removeWalls(current, ngb);
      current = ngb;
      current.visited = true;
      stack.push(current);
    }
  }
}

function checkNeighbours() {
  let neighbours = [];

  if (current.x != 0 && !grid[current.x - 1][current.y].visited) {
    neighbours.push(grid[current.x - 1][current.y]);
  }
  if (current.x != cols - 1 && !grid[current.x + 1][current.y].visited) {
    neighbours.push(grid[current.x + 1][current.y]);
  }
  if (current.y != 0 && !grid[current.x][current.y - 1].visited) {
    neighbours.push(grid[current.x][current.y - 1]);
  }
  if (current.y != rows - 1 && !grid[current.x][current.y + 1].visited) {
    neighbours.push(grid[current.x][current.y + 1]);
  }

  if (neighbours.length == 0) {
    return 'noway';
  } else {
    return random(neighbours);
  }
}

function removeWalls(cell1, cell2) {
  let x = cell1.x - cell2.x;
  let y = cell1.y - cell2.y;

  if (x == 1) {
    cell2.walls[1] = false;
    cell1.walls[3] = false;
  }
  if (x == -1) {
    cell1.walls[1] = false;
    cell2.walls[3] = false;
  }
  if (y == 1) {
    cell1.walls[0] = false;
    cell2.walls[2] = false;
  }
  if (y == -1) {
    cell1.walls[2] = false;
    cell2.walls[0] = false;
  }
}
