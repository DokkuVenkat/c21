var fixedRect, movingRect;
var obj1,obj2
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 
  //function call will put moving rectangle in object 1 and fixed rect in object 2(which is in the library) 
  bounceOff(movingRect,fixedRect);

  
  drawSprites();
}
