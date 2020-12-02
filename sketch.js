var cataloonia=255;

//The setup function only happens once
function setup() {
	createCanvas(500, 500); //create a 500px X 500px canvas
}

//The draw function happens over and over again
function draw() {
  background(350,150,230); //an RGB color for the canvas' background
  //circle
  stroke(255,255,127) // an RGB color for the circle's border
  fill(255,255,127,150); // an RGB color for the inside of the circle (the last number refers to transparency (min. 0, max. 255))
  ellipse(cataloonia,300,75,75); // center of canvas, 20px dia
  fill (230,123,33,cataloonia);
}

function mousePressed(){
	cataloonia=cataloonia-5;
}
