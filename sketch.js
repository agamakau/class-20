var fixedrectangle, movingrectangle;


function setup() {
  createCanvas(800,800);
  fixedrectangle = createSprite(600,400,50,80);
  fixedrectangle.shapeColor="red";
  movingrectangle = createSprite(500,400,40,80);
  movingrectangle.shapeColor="green";
}

function draw() {
  background("yellow");
    
  movingrectangle.x = World.mouseX
  movingrectangle.y = World.mouseY
  if(movingrectangle.x-fixedrectangle.x<movingrectangle.width/2+fixedrectangle.width/2
   && fixedrectangle.x-movingrectangle.x<movingrectangle.width/2+fixedrectangle.width/2
   &&fixedrectangle.y-movingrectangle.y<movingrectangle.height/2+fixedrectangle.height/2
   &&movingrectangle.y-fixedrectangle.y<movingrectangle.height/2+fixedrectangle.height/2 ){
     fixedrectangle.shapeColor="blue"
     movingrectangle.shapeColor="blue"
   }
   else {
     fixedrectangle.shapeColor="orange"
     movingrectangle.shapeColor="orange"
   }
  drawSprites();
}