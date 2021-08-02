var track , trackImg , edges
var runner , runner_running 
var invisibleBoundary1 , invisibleBoundary2

function preload(){
  //pre-loading images
  trackImg = loadImage("path.png");
  runner_running = loadAnimation("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
 
  //creating a track sprite 
  track = createSprite(200,200);
  track.addImage(trackImg);
  track.scale = 1;
  track.velocityY = 4;

  //creating a runner sprite
  runner = createSprite(170,130,40,40);
  runner.addAnimation("running",runner_running);
  runner.scale = 0.1;

  //creating invisible boundaries
  invisibleBoundary1 = createSprite(390,200,20,400);
  invisibleBoundary1.visible = false;

  invisibleBoundary2 = createSprite(10,200,20,400);
  invisibleBoundary2.visible = false;
}

function draw() {
  background(0);

  //moving the runner using mouse 
  runner.x = mouseX;

  //colliding the runner with the walls 
  runner.collide(invisibleBoundary1);
  runner.collide(invisibleBoundary2);

  //logging the x position of runner
  console.log(runner.x);

  //reseting the background
  if(track.y > 400){
    track.y = height/2;
  }
  drawSprites();
}

track.depth = runner.depth;
runner.depth = runner.depth + 1;