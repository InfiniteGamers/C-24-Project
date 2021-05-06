const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;




function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    Rubber = new Rubber(500,250,10);
    Stone = new Stone(550,270,60,60);
    Iron = new Iron(600,300,40,40);



  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    Rubber.display();
    Stone.display();
    Iron.display();
     

 
}