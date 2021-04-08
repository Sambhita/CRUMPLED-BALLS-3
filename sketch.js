const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground,ball;
var binImages,bin;

function preload(){
    binImages = loadImage("Images/dustbingreen.png");
}
function setup(){
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;

    ground = new Ground();
    ball = new Paper();

	bin = createSprite(620,500,500,200);
    bin.addImage(binImages);
    bin.scale = 0.50;

	lineL = new Bin(550,490,20,200);
	lineR = new Bin(690,490,20,200);
	lineB = new Bin(620,570,200,20);

	slingshot = new SlingShot(ball.body,{x:400, y:100});
	//Create the Bodies Here.
  
}
function draw(){
    background("lightblue");
    Engine.update(engine);

	ground.display();
    ball.display();
    bin.display();
	//lineL.display();
    //lineR.display();
    //lineB.display();
    
	slingshot.display();

    //drawSprites();
}

function mouseDragged(){
    Matter.Body.setPosition(ball.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}