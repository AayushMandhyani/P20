function setup() {
  createCanvas(1600,400);
  car=createSprite(100, 200, 50, 75);
  wall=createSprite(1500, 200, 60, 200);
  speed=random(50,100)
  weight=random(500,1500)
  wall.shapeColor = color(80,80,80);
}

var car,wall;
var speed,weight;
var deformation


function draw() {
  background("black");  
  drawSprites();
  car.velocityX = speed;
  car.collide(wall);
  deformation = 0.5 * weight * speed * speed / 22500;
  if(deformation < 100){
    car.shapeColor = color(0,255,0);
  }
  if(deformation > 100 && deformation < 180){
    car.shapeColor = color(230,230,0);
  }
  if(deformation > 180){
    car.shapeColor = color(255,0,0);
  }
}