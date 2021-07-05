var tom;
var jerry;
var bgimage;
function preload() {
    //load the images here
    bgimage=loadImage("images/garden.png");
    tomimage1=loadAnimation("images/cat1.png");
    jerryimage1=loadAnimation("images/mouse1.png");
    
    tomimage2=loadAnimation("images/cat2.png","images/cat3.png");
    jerryimage2=loadAnimation("images/mouse2.png","images/mouse3.png");
    
    tomimage3=loadAnimation("images/cat4.png");
    jerryimage3=loadAnimation("images/mouse4.png");

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    tom=createSprite(800,650,20,20);
    tom.addAnimation("cat sitting",tomimage1 );
    tom.scale=0.2;
    
    jerry=createSprite(200,650,20,20);
    jerry.addAnimation("jerry sitting",jerryimage1 );
    jerry.scale=0.2;

}

function draw() {

    background(bgimage);
    //Write condition here to evalute if tom and jerry collide
    if(tom.x-jerry.x < (tom.width-jerry.width)/2){
     jerry.addAnimation("jerrylastimage",jerryimage3);
      jerry.changeAnimation("jerrylastimage");
  


      tom.velocityX = 0;
      tom.x = 320;
      tom.addAnimation("LastImageTom", tomimage3);
      tom.changeAnimation("LastImageTom");
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
    
  if(keyCode=== LEFT_ARROW){
      jerry.addAnimation("mouseteasing",jerryimage2);
      jerry.changeAnimation("mouseteasing");
      jerry.frameDelay = 25;


      tom.velocityX = -3;
      tom.addAnimation("catWalking", tomimage2);
      tom.changeAnimation("catWalking");
  }

}

