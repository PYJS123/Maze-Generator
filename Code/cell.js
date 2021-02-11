class Cell {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.posx = this.x * this.w;
    this.posy = this.y * this.h;
    this.visited = false;

    this.walls = [true, true, true, true];
  }

  show() {
    if (this.visited === true) {
      fill(255, 0, 255, 100);
    } else {
      fill(255);
    }
    noStroke();
    rect(this.x * this.w, this.y * this.h, this.w, this.h);

    stroke(0);
    strokeWeight(2);
    if (this.walls[0]) {
      line(this.posx, this.posy, this.posx + this.w, this.posy);
    }
    if (this.walls[1]) {
      line(this.posx + this.w, this.posy + this.h, this.posx + this.w, this.posy);
    }
    if (this.walls[2]) {
      line(this.posx + this.w, this.posy + this.h, this.posx, this.posy + this.h);
    }
    if (this.walls[3]) {
      line(this.posx, this.posy, this.posx, this.posy + this.h);
    }
  }
}
