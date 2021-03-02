var canvas;
var music;
var block1, block2, block3, block4, ball, edges

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(1000,600);

    //create 4 different surfaces
block1= createSprite(50,580,220,30)
block1.shapeColor= rgb(0,0,255)
block2= createSprite(295,580,220,30)
block2.shapeColor= "#FA862E"
block3= createSprite(590,580,220,30)
block3.shapeColor="#CCFFCC"
block4= createSprite(850,580,220,30)
block4.shapeColor= "#E5CCFF"
ball= createSprite(random(50,850),100,40,40)
ball.shapeColor= "#FFFFFF"
ball.velocityX= 4
ball.velocityY= 9



    //create box sprite and give velocity

}

function draw() {
    background(rgb(0,0,0));

    //create edgeSprite
drawSprites()
edges=createEdgeSprites()
ball.bounceOff(edges)
if(block1.isTouching(ball) && ball.bounceOff(block1)){
     ball.shapeColor = rgb(0,0,255);
      music.play();
     }
     if(block2.isTouching(ball) && ball.bounceOff(block2)){
          ball.shapeColor = "#FA862E";
          music.play();
         }
         if(block3.isTouching(ball) && ball.bounceOff(block3)){
            ball.shapeColor ="#CCFFCC" ;
            music.play();
           }
           if(block4.isTouching(ball) && ball.bounceOff(block4)){
            ball.shapeColor = "#E5CCFF" ;
            music.play();
           }
           
         


    //add condition to check if box touching surface and make it box
}
