const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Engine = Matter.Engine;

var engine, world;

var holder, ball, ground;
var stand1, stand2;
var ball;
var slingshot;
var polygon_img;


function preload(){
  //polygon_img = loadImage("polygon.png");
  //backgroundImg = loadImage("bg.png");
}




function setup() {
  engine = Engine.create();
  world = engine.world;

  createCanvas(900,400);

  ground = new Ground();
  stand1 = new Stand(380,300,270,10);
  stand2 = new Stand(700,200,200,10);

  //level one
  block1 = new block(280,275,30,40)
  block2 = new block(310,275,30,40)
  block3 = new block(340,275,30,40)
  block4 = new block(370,275,30,40)
  block5 = new block(400,275,30,40)
  block6 = new block(430,275,30,40)
  block7 = new block(460,275,30,40)
  block8 = new block(490,275,30,40)
  //level two
  block9 = new block(310,235,30,30)
  block10 = new block(340,235,30,30)
  block11 = new block(370,235,30,30)
  block12 = new block(400,235,30,30)
  block13 = new block(430,235,30,30)
  block14 = new block(460,235,30,30)
  //level three
  block15 = new block(340,195,30,40)
  block16 = new block(370,195,30,40)
  block17 = new block(400,195,30,40)
  block18 = new block(430,195,30,40)
  //level four
  block19 = new block(370,155,30,40)
  block20 = new block(400,155,30,40)
  //level five
  block21 = new block(385,155,30,40);

  // ball with slings
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  
  slingShot = new slingShot(this.ball,{x:100,y:200})
  
}

function draw() {
  //background("backgroundImg")
  background("white");  
  Engine.update(engine)

  
      //ground.display();
      strokeWeight(2);
      stroke(15)

      drawSprites();

      stand1.display();
      stand2.display();

      stroke(15);
      fill("black");

      block1.display();
      block2.display();
      block3.display();
      block4.display();
      block5.display();
      block6.display();
      block7.display();
      block8.display();
      stroke(15);
      fill("orange");

      block9.display();
      block10.display();
      block11.display();
      block12.display();
      block13.display();
      block14.display();
      stroke(15);
      fill("violet")

      block15.display();
      block16.display();
      block17.display();
      block18.display();
      stroke(15);
      fill("green");

      block19.display();
      block20.display();

      block21.display()
      stroke(15);
      fill("blue")
     


     stroke(15);
     fill("red");
     block1.display();
     block2.display();
     block3.display();
     block4.display();
     block5.display();
     stroke(15);
     fill("red");
     block6.display();
     block7.display();
     block8.display();
     stroke(15);
     fill("orange");
     block9.display();

     ellipse(ball.position.x, ball.position.y,20);
     slingShot.display();
}


     //imageMode(CENTER)
     //ball = loadImage("polygon_img, ball.position.x-50, ball.position.y-80,40,40");
     //ellipseMode(RADIUS)


      

    function mouseDragged(){
      Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
    }

   function mouseReleased(){
     slingShot.fly();
   }

   function keyPressed(){
     if(keyCode === 32){
       slingShot.attach(this.polygon)
     }
   }


 
