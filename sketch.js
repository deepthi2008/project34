
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var backgroundimg,background;
var basketballnetimg,basketballnet,basketballimg,basketball;
var scisscorsimg,scissors;

function preload(){
  backgroundimg = loadImage("backgroundimg.png");
  basketballnetimg =  loadImage("basketballnet.png");
  basketballimg = loadImage("basketball.png");
  scisscorsimg = loadImage("scissorsimg.png");
}


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;

 basketballnet = createSprite(50,290,40,40);
 basketballnet.addImage(basketballnetimg);
 basketballnet.scale=1.0;

 
  
}


function draw() 
{
  background(51);
  background.addImage(backgroundimg);
  Engine.update(engine);
  
}

