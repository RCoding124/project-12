var garden,rabbit;
var gardenImg,rabbitImg;
var apples, Apple
var leaf
function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  Apple= loadImage("apple.png");
  Leave= loadImage("leaf.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}
var Apple = Math.round(random(1,2));
if(frameCount%80==0){
  if(Apple==1){
    //call create Apples function
    

    }
    else {
      //call create Leaves Function 
    


      function createApples();{
        apples= createSprite(random(50,350),40,10,10);
      }







function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);

  drawSprites();
}
