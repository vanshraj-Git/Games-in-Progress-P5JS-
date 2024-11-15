x=450;
y=20;
count=0;
ismoving=true;
function setup() {
  createCanvas(500, 500);
}
function draw() {
  background(0);
  
  triangle(0, 500, 500, 500, 500, 0); //x1,y1,x2,y2,x3,y3
  ellipse(x, y, 40, 40);  // x,y,w,h width and height
  describe('A white circle on a black canvas.');
  if(ismoving==true)
  {
  x=x-1;
  y=y+1;
  }
  if(x>=0){
  textSize(32);
  fill(255);
  text("Score: " + count, 10, 30);
  }
  
if(x<0){
  textSize(32)
  fill(255,0,0)
  text("Your Final Score is "+ count,10,30)
}
  }

function mousePressed(){
  if(x>=0){
  count=count+1;
  }
}
