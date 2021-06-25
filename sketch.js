 const Engine = Matter.Engine;
 const World = Matter.World;
 const Events = Matter.Events;
 const Bodies = Matter.Bodies;
 

var back, backImage;
var elsa,elsaImg;
var fire = [];
var fireImg;
var fireGroup, olafGroup;
var Score=0;
var margin;
var olaf, olafImg;


function preload(){
    backImage= loadImage("frozen tree.jpg");
    elsaImg=loadImage("elsa.png");
    fireImg= loadImage("Fire.png");
    olafImg = loadImage("olaf.png");
}

function setup(){
  createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;

  elsa = createSprite(950,600,10,10)
  elsa.addImage(elsaImg);
  elsa.scale=0.4;

  back = createSprite(600,400);
  back.addImage(backImage);
  back.scale=1.5

  margin = createSprite(1200,400,10,800)
 
  fireGroup= new Group();

  Engine.run(engine);
}

function draw(){
  rectMode(CENTER);
  background("red");
  Engine.update(engine);
  elsa.y=mouseY; 

  if(elsa.isTouching(fireGroup)){
    fireGroup.destroyEach();
    Score=Score+1;
  }
 
  elsa.setCollider("rectangle", 0, 0, 900, 300, 365);

  for (var k = 0; k < fire.length; k++){
      fire[k].display();  
   }

  back.display();
  spawnFire();
  drawSprites();
  elsa.display();

  textSize(30);
  fill("#001C46")
  text("Score = "+ Score,900,100)
  text("hey!Arendelle needs your help save it from the fire!",50,100)

  if(margin.isTouching(fireGroup)){
     Score=0;
     fireGroup.setVelocityXEach(0);

     textSize(30);
     fill("#001C46")
     text("ITS OK BETTER LUCK NEXT TIME", 300,400)
     textSize(30);
     fill("#001C46")
     text("WANNA PLAY AGAIN? MOVE YOUR CURSOR!!", 300,430)

     olaf = createSprite(300,600,10,10)
     olaf.addImage(olafImg);
     olaf.scale=0.15 
   }
}

function spawnFire(){
  if(frameCount % 100 === 0 ){
    fire = createSprite(0,Math.round(random(100,400)),10,10) ;
    fire.addImage(fireImg);
    fire.scale = 0.3;
    fire.velocityX = 9;
    fireGroup.add(fire);   
}
}

