var player;
var target;
var edges;

 



function setup() {
  createCanvas(800,800);

  edges=createEdgeSprites();
  player=createSprite(100,600,30,30);
  target=createSprite(700,100,50,50);
  obs1=createSprite(250,250,100,20);
  obs2=createSprite(300,320,100,20);
  obs3=createSprite(750,320,100,20);
  obs4=createSprite(700,250,100,20);
  obs5=createSprite(400,250,100,20);
  obs6=createSprite(100,250,100,20);
  obs7=createSprite(550,250,100,20);
  obs8=createSprite(450,320,100,20);
  obs9=createSprite(170,320,90,20);
  obs10=createSprite(30,320,100,20);
  obs11=createSprite(600,320,100,20);
  obs12=createSprite(400,400,100,20);
  obs13=createSprite(250,400,100,20);
  obs14=createSprite(100,400,100,20);
  obs15=createSprite(550,400,100,20);
  obs16=createSprite(700,400,100,20);
  
  player.shapeColor="offwhite";
  obs1.shapeColor="yellow";
  obs2.shapeColor="yellow";
  obs3.shapeColor="yellow";
  obs4.shapeColor="yellow";
  obs5.shapeColor="yellow";
  obs6.shapeColor="yellow";
  obs7.shapeColor="yellow";
  obs8.shapeColor="yellow";
  obs9.shapeColor="yellow";
  obs10.shapeColor="yellow";
  obs11.shapeColor="yellow";
  target.shapeColor="orange";
  obs12.shapeColor="yellow";
  obs13.shapeColor="yellow";
  obs14.shapeColor="yellow";
  obs15.shapeColor="yellow";
  obs16.shapeColor="yellow";
  
  
 
}

function draw() {
  background("black");  
  
  if(keyDown("up")){
    player.y=player.y-3;
  }
  if(keyDown("down")){
    player.y=player.y+3;
  }
  if(keyDown("left")){
    player.x=player.x-3;
  }
  if(keyDown("right")){
    player.x=player.x+3;
  }
  
 if(player.isTouching(obs1)){
   player.x=100;
   player.y=600;
 }
 if(player.isTouching(obs2)){
  player.x=100;
  player.y=600;
}
if(player.isTouching(obs3)){
  player.x=100;
  player.y=600;
}
if(player.isTouching(obs4)){
  player.x=100;
  player.y=600;
}
if(player.isTouching(obs5)){
  player.x=100;
  player.y=600;
}
if(player.isTouching(obs6)){
  player.x=100;
  player.y=600;
}

if(player.isTouching(obs7)){
  player.x=100;
  player.y=600;
}
if(player.isTouching(obs8)){
  player.x=100;
  player.y=600;
}
if(player.isTouching(obs9)){
  player.x=100;
  player.y=600;
}
if(player.isTouching(obs10)){
  player.x=100;
  player.y=600;
}
if(player.isTouching(obs11)){
  player.x=100;
  player.y=600;
}
if(player.isTouching(obs12)){
  player.x=100;
  player.y=600;
}
if(player.isTouching(obs13)){
  player.x=100;
  player.y=600;
}
if(player.isTouching(obs14)){
  player.x=100;
  player.y=600;
}
if(player.isTouching(obs15)){
  player.x=100;
  player.y=600;
}
if(player.isTouching(obs16)){
  player.x=100;
  player.y=600;
}
if(player.isTouching(target)){
  text("YOU WIN",200,200);
}
  drawSprites();
}
 