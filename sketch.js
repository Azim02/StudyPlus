//declaring variables
var slide1, slide2, slide3, slide4, slide5, slide6, slide7, slide8, slide9, slide10;
var slide11, slide12, slide13, slide14, slide15, slide16, slide17;
var slide18, slide19, slide20, slide21, slide22, slide23, slide24;
var slide25, slide26, slide27, slide28;

var p1, p2, p3, p4, p5, p6, p7, p8, p9, p10;
var p11, p12, p13, p14, p15, p16, p17;
var p18, p19, p20, p21, p22, p23, p24;
var p25, p26, p27, p28;

var login;
var user;
var profile, profileIcon;

//function to load Images, Animations, Sounds, etc...
function preload(){
  //loading images
  p1 = loadImage("p1.jpg");
  p2 = loadImage("p2.jpg");
  p3 = loadImage("p3.jpg");
  p4 = loadImage("p4.jpg");
  p5 = loadImage("p5.jpg");
  p6 = loadImage("p6.jpg");
  p7 = loadImage("p7.jpg");
  p8 = loadImage("p8.jpg");
  p9 = loadImage("p9.jpg");
  p10 = loadImage("p10.jpg");
  p11 = loadImage("p11.jpg");
  p12 = loadImage("p12.jpg");
  p13 = loadImage("p13.jpg");
  p14 = loadImage("p14.jpg");
  p15 = loadImage("p15.jpg");
  p16 = loadImage("p16.jpg");
  p17 = loadImage("p17.jpg");
  p18 = loadImage("p18.jpg");
  p19 = loadImage("p19.jpg");
  p20 = loadImage("p20.jpg");
  p21 = loadImage("p21.jpg");
  p22 = loadImage("p22.jpg");
  p23 = loadImage("p23.jpg");
  p24 = loadImage("p24.jpg");
  p25 = loadImage("p25.jpg");
  p26 = loadImage("p26.jpg");
  p27 = loadImage("p27.jpg");
  p28 = loadImage("p28.jpg");

  //loading animation

  //loading sound
}

//setup function -
function setup(){
  //creating the canvas
  createCanvas(displayWidth, 9500);


  //creating the slides -

  slide1 = createSprite(displayWidth/2, 350);
  slide1.addImage(p1);
  slide1.visible = false;
  
  slide2 = createSprite(displayWidth/2, 900);
  slide2.addImage(p2);
  slide2.visible = false;
  
  slide3 = createSprite(displayWidth/2, 1450);
  slide3.addImage(p3);
  slide3.visible = false;
  
  slide4 = createSprite(displayWidth/2, 2000, 100, 100);
  slide4.addImage(p4);
  slide4.visible = false;
  
  slide5 = createSprite(displayWidth/2, 2550, 100, 100);
  slide5.addImage(p5);
  slide5.visible = false;
  
  slide6 = createSprite(displayWidth/2, 3100, 100, 100);
  slide6.addImage(p6);
  slide6.visible = false;
  
  slide7 = createSprite(displayWidth/2, 3650, 100, 100);
  slide7.addImage(p7);
  slide7.visible = false;
  
  slide8 = createSprite(displayWidth/2, 4200, 100, 100);
  slide8.addImage(p8);
  slide8.visible = false;
  
  slide9 = createSprite(displayWidth/2, 4750, 100, 100);
  slide9.addImage(p9);
  slide9.visible = false;
  
  slide10 = createSprite(displayWidth/2, 5300, 100, 100);
  slide10.addImage(p10);
  slide10.visible = false;
  
  slide11 = createSprite(displayWidth/2, 5850, 100, 100);
  slide11.addImage(p11);
  slide11.visible = false;
  
  slide12 = createSprite(displayWidth/2, 6400, 100, 100);
  slide12.addImage(p12);
  slide12.visible = false;
  
  slide13 = createSprite(displayWidth/2, 6950, 100, 100);
  slide13.addImage(p13);
  slide13.visible = false;
  
  slide14 = createSprite(displayWidth/2, 7500, 100, 100);
  slide14.addImage(p14);
  slide14.visible = false;
  
  slide15 = createSprite(displayWidth/2, 8050, 100, 100);
  slide15.addImage(p15);
  slide15.visible = false;
  
  slide16 = createSprite(displayWidth/2, 8600, 100, 100);
  slide16.addImage(p16);
  slide16.visible = false;
  
  slide17 = createSprite(displayWidth/2, 9150, 100, 100);
  slide17.addImage(p17);
  slide17.visible = false;

  slide18 = createSprite(displayWidth/2, 350, 100, 100);
  slide18.addImage(p18);
  slide18.visible = false;
  
  slide19 = createSprite(displayWidth/2, 900, 100, 100);
  slide19.addImage(p19);
  slide19.visible = false;
  
  slide20 = createSprite(displayWidth/2, 1450, 100, 100);
  slide20.addImage(p20);
  slide20.visible = false;
  
  slide21 = createSprite(displayWidth/2, 2000, 100, 100);
  slide21.addImage(p21);
  slide21.visible = false;
  
  slide22 = createSprite(displayWidth/2, 2550, 100, 100);
  slide22.addImage(p22);
  slide22.visible = false;
  
  slide23 = createSprite(displayWidth/2, 3100, 100, 100);
  slide23.addImage(p23);
  slide23.visible = false;
  
  slide24 = createSprite(displayWidth/2, 3650, 100, 100);
  slide24.addImage(p24);
  slide24.visible = false;
  
  slide25 = createSprite(displayWidth/2, 4200, 100, 100);
  slide25.addImage(p25);
  slide25.visible = false;
  
  slide26 = createSprite(displayWidth/2, 4750, 100, 100);
  slide26.addImage(p26);
  slide26.visible = false;
  
  slide27 = createSprite(displayWidth/2, 5300, 100, 100);
  slide27.addImage(p27);
  slide27.visible = false;
  
  slide28 = createSprite(displayWidth/2, 5850, 100, 100);
  slide28.addImage(p28);
  slide28.visible = false;

  login = new LogIn();
  user = new User();
}

//draw function -
function draw(){
  //background color
  background("yellowgreen");

  login.display();
  user.display();

  //drawing everything
  drawSprites();
}
