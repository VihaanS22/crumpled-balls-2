
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var ball;
var ground;
var line1, line2, line3
var bg
function preload(){

  bg = loadImage("bg.png")
	
}

function setup() {
	createCanvas(1400, 400);


	engine = Engine.create();
	world = engine.world;

	
ball = new Paper(20, 100, 20)
ground = new Ground(600,height,1600,20)
line1 = new Box(1130, 330, 10, 140, -15)
line2 = new Box(1300, 330, 10, 140, 15)
line3 = new Box(1250, 300, 140, 10)



	Engine.run(engine);
  
}


function draw() {

	
  background(bg);
  
  rectMode(CENTER);
  Engine.update(engine);

 

ball.display();
ground.display();
//line1.display();
//line2.display();
line3.display();

drawSprites();
 
}


function keyPressed() {
  
if(keyCode === UP_ARROW){

  Matter.Body.applyForce(ball.body , ball.body.position, {x:165, y:-145})
}

}
