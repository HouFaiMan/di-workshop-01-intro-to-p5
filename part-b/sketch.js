function setup() {
  createCanvas(400, 400)
  background(0, 0, 0)
}

function draw() {
  fill(255, 0, 0)
  stroke(0, 0, 255)
  triangle(mouseX, mouseY, 30, 30)
}
