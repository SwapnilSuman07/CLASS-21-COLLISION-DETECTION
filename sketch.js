var movingRect, fixedRect, gameObject1, gameObject2, gameObject3;


function setup() {

  createCanvas(800,400);
  movingRect = createSprite(400, 200, 80, 30);
  fixedRect = createSprite(200, 200, 50, 80);
  gameObject1 = createSprite(100,100,50,50);
  gameObject2=createSprite(200,100,50,50);
  gameObject3 = createSprite(300,100,50,50);
  movingRect.shapeColor = "green";
  fixedRect.shapeColor = "green";
  gameObject1.shapeColor = "green";
  gameObject2.shapeColor = "green";
  gameObject3.shapeColor = "green";
}

function draw() {
  background("yellow"); 
  
  movingRect.x = mouseX;
  movingRect.y = mouseY;

  if(isTouching(movingRect, gameObject3)){
    movingRect.shapeColor = "blue";
    gameObject3.shapeColor = "blue";
  }else{
    movingRect.shapeColor = "black";
    gameObject3.shapeColor = "black";
  }
  console.log(movingRect.x - fixedRect.x);

  

  drawSprites();
}

function isTouching(object1, object2){

  if(object1.x - object2.x < object1.width/2+object2.width/2
    && object2.x - object1.x < object1.width/2+object2.width/2
    && object1.y-object2.y < object1.height/2+object2.height/2
    && object2.y-object1.y < object1.height/2+object2.height/2 ) {
     return true;
  }else{
     return false;
  }
}