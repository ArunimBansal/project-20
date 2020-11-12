var car 
var wall
var weight,speed


function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 50, 50);
  wall =createSprite(1500,200,60,height/2)
  speed=random(55,90)
  weight=random(400,1500)
  
}

function draw() {
  background(255,255,255);   
   car.velocityX=speed
  drawSprites();





  if(wall.x-car.x<(car.width+wall,width/2)){
car.velocityX=0
var deformation=0.5*weight*speed*speed/22509
 if(deformation>180){
   car.shapeColor=(255,0,0)
 }
 if(deformation<180 && deformation>100){
   car.shapeColor=(230,230,0)
   if(deformation<100){
     car.shapeColor=(0,255,0)
   }
 }
  }
}



function isTouching(car,wall){
  if (car.x - wall.x < car.width/2 + wall.width/2
    && wall.x - car.x < car.width/2 + wall.width/2
    && car.y - wall.y < car.height/2 + wall.height/2
    && wall.y - car.y < car.height/2 + wall.height/2) {
      
      return true;
}
else {
  
    return false;
}

}