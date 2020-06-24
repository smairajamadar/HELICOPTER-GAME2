const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box2;
var box1;
//var ground1;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1 = createSprites(200,100,50,50);
    box2 = createSprites(220,30,50,80);
    World.add(world,box1,box2);
  //ground = Bodies.rectangle(200,390,200,20,ground_options);
   // World.add(world,ground);

ground1 = new Ground(200,380,400,20)
    //console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
  
box1.display();
box2.display();

}