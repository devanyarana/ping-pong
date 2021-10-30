// create paddles
var playerPaddle;
var computerPaddle;
var ball ; 
var line ; 
var line2 ; 
var line3 ; 
var line4 ; 
// create score
var score  = 0 ; 

function setup() {
  createCanvas(400,400);
  // setting places of walls & box 
  playerPaddle = createSprite (10,200,10,100);
  playerPaddle.shapeColor = "red";
   
  computerPaddle = createSprite (390,200,10,100);
  computerPaddle.shapeColor = "yellow";
   
  ball = createSprite (200,200,10,10);
  ball.shapeColor = "white";

  line = createSprite (200,3,400,6);
  line.shapeColor = "green";

  line2 = createSprite(200,396,400,6);
  line2.shapeColor = "green";

  line3 = createSprite(3,200,4,400);
  line3.shapeColor = "green";

  line4 = createSprite(397,200,4,400);
  line4.shapeColor = "green";
  
  ball.velocityX = -5;
  ball.velocityY = -5;
 
  
}

function draw() 
{
  background("black");
  fill("white");
  textFont("monospace");
  textSize(14);
 text("SCORE: " + score,160,20);

 if(ball.isTouching(line3)||(ball.isTouching(line4))){
  score = score + 1 ;
}
if(score == 5){
  textFont("monospace");
  textSize(30);
  text("YOU LOSE",140,180);
  ball.x = 200;
  ball.y = 200;
  playerPaddle.x = 10;
  playerPaddle.y = 200;
  computerPaddle.x = 390;
  computerPaddle.y = 200;
}
 createEdgeSprites();
ball.bounceOff(computerPaddle);
ball.bounceOff(playerPaddle);
ball.bounceOff(line);
ball.bounceOff(line2);
ball.bounceOff(line3);
ball.bounceOff(line4);
playerPaddle.bounceOff(line);
playerPaddle.bounceOff(line2);
playerPaddle.bounceOff(line3);
playerPaddle.bounceOff(line4);

    if(keyIsDown(UP_ARROW)){
      playerPaddle.position.y = playerPaddle.position.y - 6;
    }
    
    if(keyIsDown(DOWN_ARROW)){
      playerPaddle.position.y = playerPaddle.position.y + 6;
    }
    
    computerPaddle.y = ball.y;
    

drawSprites();
}




