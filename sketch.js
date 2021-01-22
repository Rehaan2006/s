
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var boy;
var ground;
var tree;
var stone;
var wand;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	
	boy=new Boy(200,350,100,150,PI/2);

     ground=new Ground(400,650,800,10);
    tree=new Tree(600,450,300,500);
	//Create the Bodies Here.
     stone=new Stone(250,350,50,50);
   wand=new SlingShot(stone,{x:190,y:300})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  boy.display();
  ground.display();
 tree.display();
 stone.display();
 wand.display();
  drawSprites();
 
}



