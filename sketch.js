var fixed,moving;

function setup() {

  createCanvas(1200,800);
  fixed=   createSprite(400, 200, 100, 80);
  fixed.shapeColor="green";
  fixed.debug = true;
  moving=createSprite(200,100,50,50);
  moving.shapeColor="green";
  moving.debug = true;
}

function draw() {
  background(0); 
  moving.x=mouseX;
  moving.y=mouseY;
  if(moving.x-fixed.x<=moving.width/2+fixed.width/2 &&
     fixed.x-moving.x<=moving.width/2+fixed.width/2 &&
     moving.y-fixed.y<=moving.height/2+fixed.height/2 &&
     fixed.y-moving.y<=moving.height/2+fixed.height/2

  
    
    ){

    moving.shapeColor="red"
    fixed.shapeColor="red"
  }
else{


  moving.shapeColor="green"
    fixed.shapeColor="green"
}
  drawSprites();

}