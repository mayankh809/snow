const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var engine
var ground
var world
var bgImg
var snow = [];




function setup() {
  createCanvas(800,400);
 engine=Engine.create()
 world = engine.world
 ground  = new Ground(400,400,800,10)
}
function preload(){
bgImg = loadImage("snow1.jpg")
}



function draw() {
  background(bgImg);
  Engine.update(engine)  
  if(frameCount%60===0){
    snow.push(new Snow(random(0,800),0))
  } 
  for(var i = 0; i<snow.length;i++){
    snow[i].display()
  }
  ground.display()
}