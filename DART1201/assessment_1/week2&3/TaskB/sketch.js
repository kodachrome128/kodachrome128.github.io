function setup() {
  // Sets the screen to be 720 pixels wide and 400 pixels high
  createCanvas(600, 400);
  background(52, 195, 235);
  noStroke();
  
  fill(51, 255, 0);
  rect(0, 250, 600, 150);
  
  fill(255, 255, 255);
  ellipse(100, 120, 120, 60);
  ellipse(150, 100, 120, 60);
  ellipse(190, 130, 120, 40);
  ellipse(300, 60, 120, 60);
  ellipse(340, 80, 120, 60);
  ellipse(410, 70, 120, 60);
  
  fill(156, 80, 0);
  stroke(255, 179, 0);
  strokeWeight(7);
  square(300, 150, 100);
  
  
  fill(255, 179, 0);
  triangle(250, 180, 350, 100, 450, 180);


  stroke(174, 255, 0);
  strokeWeight(5);
  line(0, 250, 600, 250);
  
}