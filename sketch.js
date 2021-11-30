let totalpts = 500
let steps = totalpts + 5

function setup() {
  createCanvas(800, 400);
  stroke(255)
  frameRate(5)
}

function draw() {
  background(0);
  let rand = 0
  for (let i = 1; i < steps;i++ ){
    point((width/steps)*i,height/2+random(-rand,rand))
    rand += random(-10,0)
  }
}