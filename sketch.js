var monkey, monkey_running, monkeyImage;
var banana, bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var banana,bananaImage;
var ground;
var invisibleGround;
var bananaGroup;
var obstacleGroup;

function preload() {
  
  monkey_running =
    loadAnimation("sprite_0.png", "sprite_1.png",     "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  

}



function setup() {

  monkey=createSprite(40,350,10,10);
  monkey.addAnimation("monkeyImage",monkey_running);
  monkey.scale=0.1;
  
  
  
  
  
  
  ground=createSprite(190,385,1000000,10);
  ground.x = ground.width /2;
 // ground.debug=true;
  
  invisibleGround=createSprite(190,385,400,10)
 // invisibleGround.shapeColor("white");
  
  
  
  
  bananaGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("white");
  
  
  
  
  if(keyDown("space")&&monkey.y>=349.3) {
     monkey.velocityY = -12;
    }
  monkey.velocityY=monkey.velocityY+0.8;
  
  spawnBanana();
  spawnObstacles();
  monkey.collide(invisibleGround);
  drawSprites();
}

function spawnBanana(){
  if(frameCount%200 ==0){
  banana=createSprite(400,270,10,10);
  banana.velocityX=-2;
  banana.y=Math.round(random(200,150));
  banana.addImage("banana",bananaImage);
  banana.scale=0.1;
  banana.lifetime=230;
  bananaGroup.add(banana);
  }
}

function spawnObstacles(){
  if (frameCount%290 ==0){
  obstacle=createSprite(400,360,10,10);
  obstacle.velocityX=-3;
  obstacle.addImage("obstacle",obstacleImage);
  obstacle.scale=0.1;
  obstacle.lifetime=230;
  obstacleGroup.add(obstacle);
  }
  
  
}