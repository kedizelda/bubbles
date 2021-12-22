let bugs = []; // array of Jitter objects

function setup() {
  createCanvas(windowWidth, windowHeight);
  // Create objects
}

function mouseDragged() {
  for (let i = 0; i < 1; i++) {
    bugs.push(new Jitter());
  }
}

function mouseOver() {
  for (let i = bugs.length - 1; i >= 0; i--) {
    if (bugs[i].contains(mouseX, mouseY)) {
      bugs[i].changeColor("#001D40");
    }
  }
}

function draw() {
  background("#001D40");
  for (let i = 0; i < bugs.length; i++) {
    bugs[i].move();
    bugs[i].display();
  }
}

// Jitter class
class Jitter {
  constructor() {
    this.x = mouseX;
    this.y = mouseY;
    this.diameter = random(5, 12);
    this.speed = 5;
  }

  contains(px, py) {
    let d = dist(px, py, this.x, this.y);
    if (d < this.r) {
      return true;
    } else {
      return false;
    }
  }

  move() {
    this.x += random(-this.speed, this.speed);
    this.y += random(-this.speed, this.speed)-5;
    
}
  display() {
    ellipse(this.x, this.y, this.diameter, this.diameter);
    strokeWeight(0);
    fill("#FFFFFF");
  }  
}

// code modified https://p5js.org/examples/objects-array-of-objects.html