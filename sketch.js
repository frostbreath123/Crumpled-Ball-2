
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var ground;
var dustbin;
var r;
var radius;

function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

  Engine.run(engine);
  
  paper = new Paper(200,450,70); 
  
  ground = new Ground(width/2,670,width,20);
  dustbin = new Dustbin(1200,650);
  
}


function draw() {
  rectMode(CENTER);
  background("lightgrey");
  paper.display();
  ground.display();
  dustbin.display();
 
 
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:140,y:-145});
  }
}



