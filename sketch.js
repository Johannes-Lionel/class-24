const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine
var world;
var box1;
var pig1;
var log1;
var bird1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    bird1 = new bird(12,12)
    box3 = new Box(700,440,70,70);
    box4 = new Box(920,440,70,70);
    pig2= new pig(810,420)
    log2= new log(810,380,300,PI/2)
    box1 = new Box(700,520,70,70);
    box2 = new Box(920,520,70,70);
    pig1=new pig(810,550)
    log1=new log(810,460,300,PI/2)
    box5=new Box(810,360,70,70)
    log3=new log(760,320,150,PI/7)
    log4=new log(870,320,150,-PI/7)
    ground = new Ground(600,height,1200,20)

}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    log1.display();
    log3.display();
    log4.display();
    box5.display();
    bird1.display();
}