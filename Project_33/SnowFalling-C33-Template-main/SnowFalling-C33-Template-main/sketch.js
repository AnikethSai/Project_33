var bg,bgi;
var cat,catImg1,catImg2,catImg3,catImg4;;
var snowi;
var snow,snow1,snow2,snow3;

function preload(){
  bg = loadImage("snow1.jpg");
  catImg1 = loadImage("cat1.png")
   catImg2 = loadAnimation("cat2.png","cat3.png")
   catImg3 = loadImage("cat4.png")
   snowi = loadImage("snow4.webp")
   snowi1 = loadImage("snow5.webp")
}

function setup() {
  createCanvas(1000,800);
  //background("white")
  bgi = createSprite(500,400)
    bgi.addImage(bg)
bgi.scale = 2

cat = createSprite(799,600)
    cat.addImage(catImg1);
    cat.scale = 0.15;
    cat.velocityX = 0;
    cat.velocityY = 0;

    
      snow = createSprite(100,100)
      snow.addImage("snow",snowi);
      snow.scale = 0.1
      snow.velocityY = 1;

      snow1 = createSprite(300,150)
      snow1.addImage("snow1",snowi);
      snow1.scale = 0.1
      snow1.velocityY = 1
      
      snow2 = createSprite(400,-150)
      snow2.addImage("snow1",snowi1);
      snow2.scale = 0.1
      snow2.velocityY = 1
      
      snow3 = createSprite(800,-50)
      snow3.addImage("snow1",snowi1);
      snow3.scale = 0.1
      snow3.velocityY = 1       
          
    }


function draw() {
  background(0);  
 
  if(cat.x<=100){
    cat.velocityX = 3;
  }

  if(cat.x>=800){
    cat.velocityX = -3;
  }
   
  if(snow.y> 700){
    snow.y = 100
  }

  if(snow1.y> 700){
    snow1.y = 150
  }

  if(snow2.y> 700){
    snow2.y = -150
  }

  if(snow3.y> 700){
    snow3.y = -50
  }

  
  drawSprites(); 
}

function keyPressed(){
  if(keyCode===LEFT_ARROW){
cat.velocityX = -3;
cat.addAnimation("cat_Walking",catImg2)
cat.changeAnimation("cat_Walking",catImg2)
  }
  if(keyCode===32){
    cat.velocityX = 0;
    cat.addAnimation("cat_Walking",catImg2)
    cat.changeAnimation("cat_Walking",catImg2)
      }
}