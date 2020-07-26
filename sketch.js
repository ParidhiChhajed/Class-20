var MovingRect, FixedRect;


function setup() {
  createCanvas(800,400);
  MovingRect = createSprite(400,200,50,50);
  MovingRect.shapeColor = "green";
  FixedRect = createSprite(500,300,80,30);
  FixedRect.shapeColor = "green";
}

function draw() {
  background(0); 

MovingRect.y = mouseY;
MovingRect.x = mouseX;

if(MovingRect.x-FixedRect.x<MovingRect.width/2+FixedRect.width/2&&
  FixedRect.x-MovingRect.x<MovingRect.width/2+FixedRect.width/2&&
  FixedRect.y-MovingRect.y<MovingRect.height/2+FixedRect.height/2&&
  MovingRect.y-FixedRect.y<MovingRect.height/2+FixedRect.height/2
  ){
    FixedRect.shapeColor = "red";
    MovingRect.shapeColor = "red";
}
else{
  FixedRect.shapeColor = "green";
  MovingRect.shapeColor = "green";
}

drawSprites();
}