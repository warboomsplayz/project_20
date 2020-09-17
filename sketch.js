var car,wall;
var speed,weight,deformation;
function setup() {
  createCanvas(1600,400);
car = createSprite(50,200,100,50);
car.shapeColor = '#0000FF';
wall = createSprite(1580,200,80,400);
wall.shapeColor
weight = random(400,1500);
speed = random(55,90)
deformation = 0.5*weight*speed*speed/22500
car.velocityX = 15
}
function draw() {
  background(0,0,0);  
 
 text (speed,200,80)
 text ("speed:",150,80)
 text (weight,200,60)
 text ("weght:",150,60)
 


if(frameCount>95){
if (deformation<100){
car.shapeColor = '#00FF00';

}

if(deformation>100){
car.shapeColor = '#FFFF00';

}
if (deformation>180){
car.shapeColor = '#Ff0101';
}
text (deformation,200,100)
 text ("deformation:",130,100)
car.velocityX = 0
}

 drawSprites();


}









