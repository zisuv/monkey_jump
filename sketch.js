
var monkey , monkey_running
var ground;
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score=0
var survivaltime=0;
var gameState=PLAY;
var PLAY=0;
var END=1;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup(){
  createCanvas(600,400);
  
  bananaGroup=createGroup();
  obstaclesGroup=createGroup();
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  
  
  
  
}


function draw() {
  background(180);
  stroke("white");
  textSize(20);
  fill("WHITE");
  text("SCORE: "+score, 500, 50);
  Obstacle();
  banana();
  stroke("black");
  textSize(20);
  fill("black");
  survivaltime=Math.ceil(frameCount/frameRate());
  text("SURVIVAL TIME: "+survivaltime,100,50);
  
   if(keyDown("space")&&monkey.y >= 235) {
      monkey.velocityY = -13; 
    }
   monkey.velocityY = monkey.velocityY +  0.8
   
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
   monkey.collide(ground);

  drawSprites();
}



function banana(){
  if(frameCount % 80 === 0){
    var banana = createSprite(600,180,10,10);
    banana.velocityX=-3;
    banana.addImage("banana",bananaImage);
    banana.scale=0.1;
    banana.lifetime=200
    banana.debug=true;
  }
}


 function Obstacle(){
  if(frameCount % 300 === 0) {
    var obstacle = createSprite(700,315,10,10);
    obstacle.velocityX = -3;
    obstacle.addImage("obstacle",obstaceImage);
    obstacle.debug = true;
    obstacle.scale=0.1;
    
   
 }
   
 }





  





