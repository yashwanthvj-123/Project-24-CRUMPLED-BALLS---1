
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;

var paper;

var a1;

function setup () {

	createCanvas(800, 500);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,450,800,15);

	paper = new Ball (120,448,25);

	a1 = new Bin (620,435,150,20);
	

	Engine.run(engine);
  
}

function draw() {

  rectMode(CENTER);

  background("black");

  ground.display ();
  paper.display ();
  
  a1.display ();
  
  drawSprites();
 
}

function keyPressed () {

	if (keyCode == UP_ARROW) {

	   Matter.Body.applyForce ( paper.body , paper.body.position, { x:90,y:-87 } ); 
	
	}

}
