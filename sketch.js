var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var box1, box2, box3
var box1Body, box2Body, box3Body
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	box1=createSprite(width/2, 650, 200, 20,);
	box2=createSprite(290, 610, 20, 100,);
	box3=createSprite(510, 610, 20, 100,);
	
	box1.shapeColor = "red"
	box2.shapeColor = "red"
	box3.shapeColor = "red"

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 25 , {restitution:0.65, isStatic:true});
	World.add(world, packageBody);
	
	box1Body = Bodies.rectangle(width/2, 650, 200, 20 , {isStatic:true} );
	World.add(world, box1Body);
	box2Body = Bodies.rectangle(290, 610, 20, 100 , {isStatic:true} );
	World.add(world, box2Body);
	box3Body = Bodies.rectangle(510, 610, 20, 100 , {isStatic:true} );
	World.add(world, box3Body);
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("blue");
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  box1.x= box1Body.position.x 
  box1.y= box1Body.position.y 
  box2.x= box2Body.position.x 
  box2.y= box2Body.position.y 
  box3.x= box3Body.position.x 
  box3.y= box3Body.position.y 
  drawSprites();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
	//Matter.Body.setStatic(<body Name>, false);
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.

    
  }
}



