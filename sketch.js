const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;
const World = Matter.World;

var engine, world;
var ground, d1, d2, d3, d4;

function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(480,800);
  
  ground = new Ground(250,795,500,25);

  d1 = new Division(70,700,10,200);
  d2 = new Division(140,700,10,200);
  d3 = new Division(210,700,10,200);
  d4 = new Division(280,700,10,200);
  d5 = new Division(350,700,10,200);
  d6 = new Division(420,700,10,200);

  p1 = new Plinko(10)
  Engine.run(engine);
}

function draw() {
  background(0);
  Engine.update(engine);

  d1.display();
  d2.display();
  d3.display();
  d4.display();
  d5.display();
  d6.display();
  ground.display();

  drawSprites();
}