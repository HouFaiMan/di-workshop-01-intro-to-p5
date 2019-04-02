function setup() {
  createCanvas(400, 400)
  background(0, 0, 0)
}

function draw() {
  let width = 30;
  let height = 30;

  if (keyIsPressed) {
    if (key == 'r') {
      fill(255, 0, 0)
    } else if (key == 'g') {
      fill(0, 255, 0)
    } else if (key == 'b') {
      fill(0, 0, 255)
    } else if (key == 't') {
      fill(255, 0, 0)
      triangle(mouseX, mouseY, width, height);
    } else if (key == 'y') {
      fill(255, 0, 0)
      rect(mouseX, mouseY, width, height);
    } else if (key == 'u') {
      width = 60;
      height = 60;
    }
  } else {
    noStroke()
    ellipse(mouseX, mouseY, width, height)
  }
}
