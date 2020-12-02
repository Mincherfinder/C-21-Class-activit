var fixedrect,movingrect;
 var object1, object2;

function setup() {
  createCanvas(800,400);
  fixedrect = createSprite(400, 200, 50, 50);
   movingrect = createSprite(500,200,50,50);

  object1 = createSprite(500, 200, 50, 50);
  object2 = createSprite(600, 200, 50, 50);

  fixedrect.shapeColor = "green";
  movingrect.shapeColor = "green";
  object1.shapeColor = "yellow";
  object2.shapeColor = "blue";

  fixedrect.velocityX = 5;
  object2.velocityX = -5;

}

function draw() {
  background(255,255,255);  


  //movingrect.x = World.mouseX;
 // movingrect.y = World.mouseY;

//while calling the function, pass objects for which collision is to be detected
 if( isTouching(movingrect,object1)){       
  
  movingrect.shapeColor = "pink";
   object1.shapeColor = "pink";
  
 }
 else {

  movingrect.shapeColor = "green";
  object1.shapeColor = "yellow";
 }  

if( isTouching(movingrect, object2)){

  movingrect.shapeColor = "Orange";
   object2.shapeColor = "Orange";
}
 else{
   movingrect.shapeColor = "Green";
   object2.shapeColor = "Blue";
   } 
if( isTouching(fixedrect, movingrect)){
  movingrect.shapeColor = "Black";
  fixedrect.shapeColor = "Black";
}
else{
  movingrect.shapeColor = "Green";
  fixedrect.shapeColor = "Green";

}

  bounceOff(fixedrect,object2)


 drawSprites();
}
//what is algorithm - 

//yes or no - true 1 or false 0( boolean)
//function takes arguments/parameters - isTouching  will take two arguments - two objects for which collision is to be detected
function isTouching( obj1, obj2){
  //if the distance between the centers of the rectangle is equal to sum of half the width of their sides , then
  // the two rects are touching each other
  if(obj1.x -obj2.x < obj2.width/2 + obj2.width/2 &&
    obj2.x - obj1.x < obj1.width/2 + obj2.width/2 &&
    obj1.y - obj2.y < obj1.height/2 + obj2.height/2 &&
    obj2.y - obj1.y < obj1.height/2 + obj2.height/2 )
    
    {
          return true;
  

  }

  else{
    
    return false;
  }

}

function bounceOff(obj1, obj2){
  if(obj1.x -obj2.x < obj2.width/2 + obj2.width/2 &&
    obj2.x - obj1.x < obj1.width/2 + obj2.width/2)
  {
    obj1.velocityX = obj1.velocityX * (-1);

    obj2.velocityX = obj2.velocityX * (-1);
  }
  
}