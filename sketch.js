var Player, eWall1, eWall2, eWall3, eWall4;
var wall1, wall2, wall3, wall4, wall5, wall6, wall7, wall8, wall9, wall10, wall11, wall12, wall13, wall14, wall15, wall16, wall17, wall18, wall19, wall20, wall21, wall22, wall23, wall24, wall25, wall26, wall27, wall28, wall29, wall30, wall31, wall32, wall33, wall34, wall35, wall36, wall37, wall38, wall39, wall40, wall41, wall42, wall43, wall44, wall45, wall46, wall47, wall48, wall49; 
var s1, s2, s3, s4, s5;
var s1Wall1, s1Wall2, s1Wall3, s1Wall4;
var s2Wall1, s2Wall2, s2Wall3, s2Wall4;
var s3Wall1, s3Wall2, s3Wall3, s3Wall4;
var s4Wall1, s4Wall2, s4Wall3, s4Wall4;
var s5Wall1, s5Wall2, s5Wall3, s5Wall4;
var b1, b11, b12, b13;
var b21, b22, b23, b24;
var b31, b32, b33, b34, b35, b36, b37, b38, b3b;
var b4, b41, b42, b4b;
var b54, b54Image, b51, b52, b53, b55;
var cArrow, cArrowImage, rArrow, rArrowImage;
var player1boyImage, player2boyImage, player1girlImage, player2girlImage, player1robotImage, player2robotImage;
var p, pGroup;
var dr, gos;
var beg, begy, beg1, beg2, beg3, beg4;
var end, endy, end1, end2, end3, end4;
var go = 0;
var cd = 0;
var gs = 0;
var slb1 = 0;
var slb2 = 0;
var slb3 = 0;
var slb4 = 0;
var slb5 = 0;
var sl1 = 0;
var sl2 = 0;
var sl3 = 0;
var l = 5;
var k = 0;
var yb = 0;
var input, button1, name1;
var gameState = "enter";
var bg;
//var thundersound;
var heading;
var name1;
var boyb, girlb, robotb;
var plc = "boy";
var tt1 = 0;
var tt2 = 300;
var tt3, tt4, tt5;
var iboy, iboyImage, igirl, igirlImage, irobot, irobotImage;
var bop = 0;
var insty, instyImage;
var hid = 0;
var cyanbdgImage, orangebdgImage, magentabdgImage;
var frbllImage, wsImage, bsImage, gsImage, lgsImage;
var skucImage, skumImage, skuyImage, skuoImage;
var hamImage, BeeRickImage;
var gd = 0;

function preload(){
  //load your images here 
  
  b54Image = loadImage("h.png");
  cArrowImage = loadImage("cArrow.png");
  rArrowImage = loadImage("rArrow.png");
  player1boyImage = loadAnimation("Boy1.png");
  player2boyImage = loadAnimation("Boy2.png");
  player1girlImage = loadAnimation("Girl1.png");
  player2girlImage = loadAnimation("Girl2.png");
  player1robotImage = loadAnimation("Robot1.png");
  player2robotImage = loadAnimation("Robot2.png");
  bg = loadImage("SquareRootOf.jpg");
  bgo = loadAnimation("O0.png","O1.png","O2.png","O3.png","O4.png","O5.png","O6.png","O7.png","O8.png","O9.png","O10.png","O11.png","O12.png","O13.png","O14.png","O15.png","O16.png","O17.png","O18.png",);
  bgc = loadAnimation("C0.png","C1.png","C2.png","C3.png","C4.png","C5.png","C6.png","C7.png","C8.png","C9.png");
  bgy= loadAnimation("Y0.png","Y1.png","Y2.png","Y3.png","Y4.png","Y5.png","Y6.png","Y7.png","Y8.png","Y9.png","Y10.png","Y11.png","Y12.png","Y13.png","Y14.png","Y15.png");
  bgm = loadAnimation("M0.png","M1.png","M2.png","M3.png","M4.png","M5.png");
  bgb = loadAnimation("B0.png","B1.png","B2.png","B3.png","B4.png","B5.png","B6.png","B7.png");
  iboyImage = loadImage("Boy1.png");
  igirlImage = loadImage("Girl1.png");
  irobotImage = loadImage("Robot1.png");
  instyImage = loadImage("Inst.png");
  cyanbdgImage = loadImage("CyanBDG.png");
  orangebdgImage = loadImage("OrangeBDG.png");
  frbllImage = loadImage("FB.png");
  wsImage = loadImage("WS.png");
  bsImage = loadImage("BS.jpg");
  gsImage = loadImage("GS.jpg");
  lgsImage = loadImage("LGS.jpg");
  magentabdgImage = loadImage("MagentaBDG.png");
  skucImage = loadImage("SKUC.png");
  skumImage = loadImage("SKUM.png");
  skuyImage = loadImage("SKUY.png");
  skuoImage = loadImage("SKUO.png");
  hamImage = loadImage("Ham.png");
  //BeeRickImage = loadImage("BeeRick.jpg");
  //bg2 = loadImage("")
  //thundersound = loadSound("thunder.mp3");
}

//timer function
function timeit(){
  time=second()
   
}

function setup(){
  createCanvas(windowWidth, windowHeight);

  //variable for timer
    var time=second()


    
  pGroup = new Group();
  
{
  wall1 = createSprite(180, 630, 20, 100);
  wall1.shapeColor = "DimGrey";
  //wall1.addImage(BeeRickImage);
  //wall1.scale = 0.05;
  //BeeRickImage.width = 200;         
  wall2 = createSprite(30, 570, 60, 20);
  wall2.shapeColor = "DimGrey";
  wall3 = createSprite(150, 570, 80, 20);
  wall3.shapeColor = "DimGrey";
  wall4 = createSprite(150, 500, 200, 20);
  wall4.shapeColor = "DimGrey";
  wall5 = createSprite(250, 560, 20, 140);
  wall5.shapeColor = "DimGrey";
  wall6 = createSprite(60, 240, 20, 380);
  wall6.shapeColor = "DimGrey";
  wall7 = createSprite(150, 445, 20, 100);
  wall7.shapeColor = "DimGrey";
  wall8 = createSprite(290, 400, 300, 20);
  wall8.shapeColor = "DimGrey";
  wall9 = createSprite(290, 250, 20, 300);
  wall9.shapeColor = "DimGrey";
  wall10 = createSprite(290, 220, 300, 20);
  wall10.shapeColor = "DimGrey";
  wall11 = createSprite(140, 310, 150, 20);
  wall11.shapeColor = "DimGrey";
  wall12 = createSprite(440, 310, 150, 20);
  wall12.shapeColor = "DimGrey";
  wall13 = createSprite(140, 130, 150, 20);
  wall13.shapeColor = "DimGrey";
  wall14 = createSprite(440, 130, 150, 20);
  wall14.shapeColor = "DimGrey";
  wall15 = createSprite(205, 05, 20, 120);
  wall15.shapeColor = "DimGrey";
  wall16 = createSprite(375, 05, 20, 120);
  wall16.shapeColor = "DimGrey";
  wall17 = createSprite(520, 160, 20, 320);
  wall17.shapeColor = "DimGrey";
  wall18 = createSprite(610, 400, 20, 400);
  wall18.shapeColor = "DimGrey";
  wall19 = createSprite(750, 210, 300, 20);
  wall19.shapeColor = "DimGrey";
  wall20 = createSprite(890, 300, 20, 160);
  wall20.shapeColor = "DimGrey";
  wall21 = createSprite(830, 390, 140, 20);
  wall21.shapeColor = "DimGrey";
  wall22 = createSprite(750, 370, 20, 60);
  wall22.shapeColor = "DimGrey";
  wall23 = createSprite(820, 300, 20, 60);
  wall23.shapeColor = "DimGrey";
  wall24 = createSprite(760, 280, 140, 20);
  wall24.shapeColor = "DimGrey";
  wall25 = createSprite(680, 365, 20, 190);
  wall25.shapeColor = "DimGrey";
  wall26 = createSprite(560, 400, 90, 20);
  wall26.shapeColor = "DimGrey";
  wall27 = createSprite(820, 460, 300, 20);
  wall27.shapeColor = "DimGrey";
  wall28 = createSprite(960, 295, 20, 350);
  wall28.shapeColor = "DimGrey";
  wall29 = createSprite(715, 130, 370, 20);
  wall29.shapeColor = "DimGrey";
  wall30 = createSprite(775, 500, 20, 70);
  wall30.shapeColor = "DimGrey";
  wall31 = createSprite(860, 590, 380, 20);
  wall31.shapeColor = "DimGrey";
  wall32 = createSprite(680, 560, 20, 70);
  wall32.shapeColor = "DimGrey";
  wall33 = createSprite(870, 560, 20, 70);
  wall33.shapeColor = "DimGrey";
  wall34 = createSprite(960, 500, 20, 70);
  wall34.shapeColor = "DimGrey";
  wall35 = createSprite(1040, 420, 20, 330);
  wall35.shapeColor = "DimGrey";
  wall36 = createSprite(1040, 190, 140, 20);
  wall36.shapeColor = "DimGrey";
  wall37 = createSprite(1120, 325, 20, 290);
  wall37.shapeColor = "DimGrey";
  wall38 = createSprite(1130, 540, 180, 20);
  wall38.shapeColor = "DimGrey";
  wall39 = createSprite(1120, 110, 180, 20);
  wall39.shapeColor = "DimGrey";
  wall40 = createSprite(1040, 80, 20, 40);
  wall40.shapeColor = "DimGrey";
  wall41 = createSprite(960, 60, 20, 120);
  wall41.shapeColor = "DimGrey";
  wall42 = createSprite(780, 60, 370, 20);
  wall42.shapeColor = "DimGrey";
  wall43 = createSprite(1120, 650, 20, 100);
  wall43.shapeColor = "DimGrey";
  wall44 = createSprite(340, 620, 20, 120);
  wall44.shapeColor = "DimGrey";
  wall45 = createSprite(340, 450, 20, 80);
  wall45.shapeColor = "DimGrey";
  wall46 = createSprite(430, 500, 20, 200);
  wall46.shapeColor = "DimGrey";
  wall47 = createSprite(480, 590, 120, 20);
  wall47.shapeColor = "DimGrey";
  wall48 = createSprite(480, 500, 120, 20);
  wall48.shapeColor = "DimGrey";
  wall49 = createSprite(650, 590, 60, 20);
  wall49.shapeColor = "DimGrey";
}

  //Player = createSprite(1050, 450, 20, 20);
  //Player = createSprite(85, 630, 20, 20);
  Player = createSprite(-1185, -1630, 20, 20);
  Player.addAnimation("rightboy",player1boyImage);
  Player.addAnimation("leftboy",player2boyImage);
  Player.addAnimation("rightgirl",player1girlImage);
  Player.addAnimation("leftgirl",player2girlImage);
  Player.addAnimation("rightrobot",player1robotImage);
  Player.addAnimation("leftrobot",player2robotImage);
  Player.scale = 0.05;
  //Player.shapeColor = "Red";
  

  beg = createSprite(30, 590, 20, 20);
  beg.addImage(instyImage);
  beg.scale = 0.035;
  begy = createSprite(339, 6705, 20, 20);
  begy.shapeColor = "whitesmoke";
  beg1 = createSprite(250, 6666, 1, 100);
  beg1.shapeColor = "whitesmoke";
  beg2 = createSprite(300, 6616, 101, 1);
  beg2.shapeColor = "whitesmoke";
  beg3 = createSprite(350, 6666, 1, 100);
  beg3.shapeColor = "whitesmoke";
  beg4 = createSprite(300, 6716, 101, 1);
  beg4.shapeColor = "whitesmoke";

  end = createSprite(1120, 10, 20, 20);
  end.shapeColor = "whitesmoke";
  endy = createSprite(339, 8927, 20, 20);
  endy.shapeColor = "whitesmoke";
  end1 = createSprite(250, 8888, 1, 100);
  end1.shapeColor = "whitesmoke";
  end2 = createSprite(300, 8838, 101, 1);
  end2.shapeColor = "whitesmoke";
  end3 = createSprite(350, 8888, 1, 100);
  end3.shapeColor = "whitesmoke";
  end4 = createSprite(300, 8938, 101, 1);
  end4.shapeColor = "whitesmoke";

  eWall1 = createSprite(-150, 350, 300, 700);
  eWall1.shapeColor = "DimGrey";
  eWall2 = createSprite(550, -150, 1800, 300);
  eWall2.shapeColor = "DimGrey";
  eWall3 = createSprite(1350, 350, 300, 700);
  eWall3.shapeColor = "DimGrey";
  eWall4 = createSprite(550, 825, 1800, 300);
  eWall4.shapeColor = "DimGrey";

  s1 = createSprite(100, 170, 60, 60);
  s1.shapeColor = "Cyan";
  s1.addAnimation("cyan",bgc);
  s1.scale = 0.15;
  s2 = createSprite(790, 170, 60, 60);
  s2.shapeColor = "Magenta";
  s2.addAnimation("magenta",bgm);
  s2.scale = 0.12;
  s3 = createSprite(1080, 360, 60, 60);
  s3.shapeColor = "Yellow";
  s3.addAnimation("yellow",bgy);
  s3.scale = 0.12;
  s4 = createSprite(385, 445, 70, 70);
  s4.shapeColor = "Orange";
  s4.addAnimation("orange",bgo);
  s4.scale = 0.117;
  s5 = createSprite(480, 30, 60, 60);
  s5.shapeColor = "Black";
  s5.addAnimation("black",bgb);
  s5.scale = 0.12;
  dr = createSprite(1040, 30, 20, 60);
  dr.shapeColor = "Red";

  s1Wall1 = createSprite(2465, 150, 20, 220);
  s1Wall1.shapeColor = "Cyan";
  s1Wall2 = createSprite(2650, 50, 350, 20);
  s1Wall2.shapeColor = "Cyan";
  s1Wall3 = createSprite(2835, 150, 20, 220);
  s1Wall3.shapeColor = "Cyan";
  s1Wall4 = createSprite(2650, 250, 350, 20);  
  s1Wall4.shapeColor = "Cyan";

  s2Wall1 = createSprite(3465, 150, 20, 220);
  s2Wall1.shapeColor = "Yellow";
  s2Wall2 = createSprite(3650, 50, 350, 20);
  s2Wall2.shapeColor = "Yellow";
  s2Wall3 = createSprite(3835, 150, 20, 220); 
  s2Wall3.shapeColor = "Yellow";
  s2Wall4 = createSprite(3650, 250, 350, 20);
  s2Wall4.shapeColor = "Yellow";

  s3Wall1 = createSprite(4465, 150, 20, 220);
  s3Wall1.shapeColor = "Magenta";
  s3Wall2 = createSprite(4650, 50, 350, 20);
  s3Wall2.shapeColor = "Magenta";
  s3Wall3 = createSprite(4835, 150, 20, 220);  
  s3Wall3.shapeColor = "Magenta";
  s3Wall4 = createSprite(4650, 250, 350, 20);  
  s3Wall4.shapeColor = "Magenta";

  s4Wall1 = createSprite(5465, 150, 20, 220);
  s4Wall1.shapeColor = "Orange";
  s4Wall2 = createSprite(5650, 50, 350, 20);
  s4Wall2.shapeColor = "Orange";
  s4Wall3 = createSprite(5835, 150, 20, 220);  
  s4Wall3.shapeColor = "Orange";
  s4Wall4 = createSprite(5650, 250, 350, 20);  
  s4Wall4.shapeColor = "Orange";

  s5Wall1 = createSprite(6465, 150, 20, 220);
  s5Wall1.shapeColor = "Black";
  s5Wall2 = createSprite(6650, 50, 350, 20);
  s5Wall2.shapeColor = "Black";
  s5Wall3 = createSprite(6835, 150, 20, 220);  
  s5Wall3.shapeColor = "Black";
  s5Wall4 = createSprite(6650, 250, 350, 20);  
  s5Wall4.shapeColor = "Black";

  b1 = createSprite(2790, 150, 40, 40);
  b1.addImage(cyanbdgImage);
  b1.scale = 0.15
  b11 = createSprite(2735, 100, 10, 10);
  b11.addImage(cArrowImage);
  b11.scale = 0.03;
  b12 = createSprite(2735, 150, 10, 10);
  b12.addImage(cArrowImage);
  b12.scale = 0.03;
  b13 = createSprite(2735, 200, 10, 10);
  b13.addImage(cArrowImage);
  b13.scale = 0.03;

  b21 = createSprite(Math.round(random(3500, 3800)), 70, 10, 10);
  b21.addImage(skucImage);
  b21.scale = 0.04;
  b22 = createSprite(Math.round(random(3500, 3800)), 70, 10, 10);
  b22.addImage(skuoImage);
  b22.scale = 0.03;
  b23 = createSprite(Math.round(random(3500, 3800)), 70, 10, 10);
  b23.addImage(skumImage);
  b23.scale = 0.04;
  b24 = createSprite(Math.round(random(3500, 3800)), 70, 10, 10);
  b24.addImage(skuyImage);
  b24.scale = 0.04;

  b31 = createSprite(4760, 90, 15, 30);
  b31.addImage(magentabdgImage);
  b31.scale = 0.12;
  b32 = createSprite(4760, 130, 15, 30);
  b32.addImage(magentabdgImage);
  b32.scale = 0.12;
  b33 = createSprite(4760, 170, 15, 30);
  b33.addImage(magentabdgImage);
  b33.scale = 0.12;
  b34 = createSprite(4760, 210, 15, 30);
  b34.addImage(magentabdgImage);
  b34.scale = 0.12;
  b35 = createSprite(4800, 90, 15, 30);
  b35.addImage(magentabdgImage);
  b35.scale = 0.12;
  b36 = createSprite(4800, 130, 15, 30);
  b36.addImage(magentabdgImage);
  b36.scale = 0.12;
  b37 = createSprite(4800, 170, 15, 30);
  b37.addImage(magentabdgImage);
  b37.scale = 0.12;
  b38 = createSprite(4800, 210, 15, 30);
  b38.addImage(magentabdgImage);
  b38.scale = 0.12;
  b3b = createSprite(4650, 150, 10, 10);
  //b3b.shapeColor = "Magenta";
  b3b.addImage(hamImage);
  b3b.scale = 0.085;

  b4 = createSprite(5780, 150, 40, 40);
  b4.addImage(orangebdgImage);
  b4.scale = 0.10;
  b41 = createSprite(5820, 150, 10, 100);
  b41.shapeColor = "Orange";
  b42 = createSprite(5480, 150, 10, 100);
  b42.shapeColor = "Red";
  b4b = createSprite(5650, 150, 10, 10);
  b4b.addImage(frbllImage);
  b4b.scale = 0.0625;

  b54 = createSprite(6750, 140, 10, 10);
  b54.addImage(b54Image);
  b54.scale = 0.11;
  b51 = createSprite(6550, 125, 20, 140);
  b51.shapeColor = "Black";
  b52 = createSprite(6610, 175, 20, 140);
  b52.shapeColor = "Black";
  b53 = createSprite(6670, 90, 20, 70);
  b53.shapeColor = "Black";
  b55 = createSprite(6670, 206, 20, 70);
  b55.shapeColor = "Black";

  input = createInput("Player Name");
  input.position(width/2 - 170,(height/2+height/5));
  input.size(200, 30);
  input.style('background',"white");
 
  
  button1 = createButton("Enter");
  button1.position(width/2 + 80,(height/2+height/5 + 1));  
  button1.size(70, 35);

  boyb = createImg('Boy1.png');
  boyb.position((width/2 -width/6 - 50),height/2-100);
  boyb.size(90, 150);
  boyb.style('font-size', '25px');
  robotb = createImg('Robot1.png');
  robotb.position((width/2 - 80),height/2-100);
  robotb.size(150, 130);
  robotb.style('font-size', '25px');
  girlb = createImg('Girl1.png');
  girlb.position(width/2 + width/6 -50,height/2-100);
  girlb.size(90, 150);
  girlb.style('font-size', '25px');


  heading = createElement('h1');
  heading.style('color', 'white')
  heading.html("The Spectral Maze!");
  heading.position(width/2 - 320,height/2.5 - height/3.5);
  heading.style('font-size', '75px');

  //iboy = createSprite(boyb.x, boyb.y, 60, 70);
  //iboy.shapeColor = "White";
  //igirl = createSprite(width/2, height/2, 60, 70);
  //igirl.shapeColor = "DimGrey";
  //irobot = createSprite((width/2+width/2), height/2, 60, 70);
  //irobot.shapeColor = "DimGrey";



  input.visible=false;
  button1.visible=false;
  heading.visible=false;
}

//thundersound.loop();

function draw() {
  background(lgsImage);
timeit()


//let fov = PI / 9;

  //time1 = showTime();
  if(gameState !== "enter" && gd === 0 ){
  tt1 = tt1 + 1;
  if(tt1 % 25 === 0){
    tt2 = tt2 - 1;
  }
  tt3 = tt2 / 60;
  if(tt3 == 5){
    tt4 = 5;
    tt5 = 00;
  }
  if(tt3 >= 4 && tt3 < 5){
    tt4 = 4;
    tt5 = tt2 - 240;
  }
  if(tt3 >= 3 && tt3 < 4){
    tt4 = 3;
    tt5 = tt2 - 180;
  }
  if(tt3 >= 2 && tt3 < 3){
    tt4 = 2;
    tt5 = tt2 - 120;
  }
  if(tt3 >= 1 && tt3 < 2){
    tt4 = 1;
    tt5 = tt2 - 60;
  }
  if(tt3 < 1){
    tt4 = 0;
    tt5 = tt2;
  }
  if (tt3 === 0){
    l = 0;

  }

  }
  Player.visible=true;
if (gameState==="enter"){
  //background("black")
  input.visible=true;
  button1.visible=true;
  heading.visible=true;
  Player.visible=false;
  if(plc === "boy"){
    Player.changeAnimation("rightboy", player1boyImage);
    Player.scale = 0.085;
  }
  if(plc === "girl"){
    Player.changeAnimation("rightgirl", player1girlImage);
    Player.scale = 0.085;
  }
  if(plc === "robot"){
    Player.changeAnimation("rightrobot", player1robotImage);
    Player.scale = 0.075;
  }
}

if(bop === 1){
button1.mousePressed(()=>{
  input.hide();
  button1.hide();
  boyb.hide();
  girlb.hide();
  robotb.hide();
  heading.hide();
  var name= input.value();
  name1=name;
  gameState="play";
  Player.x = 85;
  Player.y = 630;
  //Player.x = 1120;
  //Player.y = 390;
  hid = 1;
})
}
boyb.mousePressed(()=>{
  plc = "boy"
  bop = 1;
  boyb.size(120, 200);
  girlb.size(60, 100);
  robotb.size(100, 86.7)
  //iboy.shapeColor = "SeaGren";
  //igirl.shapeColor = "DimGrey";
  //irobot.shapeColor = "DimGrey";
})

girlb.mousePressed(()=>{
  plc = "girl"
  bop = 1;
  boyb.size(60, 100);
  girlb.size(120, 200);
  robotb.size(100, 86.7)
  //iboy.shapeColor = "DimGrey";
  //igirl.shapeColor = "SeaGren";
  //irobot.shapeColor = "DimGrey";
})

robotb.mousePressed(()=>{
  plc = "robot"
  bop = 1;
  boyb.size(60, 100);
  girlb.size(60, 100);
  robotb.size(200, 173.3)
  //iboy.shapeColor = "DimGrey";
  //igirl.shapeColor = "DimGrey";
  //irobot.shapeColor = "SeaGren";
})



if (gameState!=="enter"){

  if(go === 0){
    if(keyIsDown(UP_ARROW)) {
      Player.y = Player.y - 5;
    }
  
    if(keyIsDown(DOWN_ARROW)) {
      Player.y = Player.y + 5;
    }

    if(Player.x < 3900 || Player.x > 5900){ 
      if(keyIsDown(LEFT_ARROW)) {
        Player.x = Player.x - 5;
        if(plc === "boy"){
          Player.changeAnimation("leftboy", player2boyImage);
        }
        if(plc === "girl"){
          Player.changeAnimation("leftgirl", player2girlImage);
        }
        if(plc === "robot"){
          Player.changeAnimation("leftrobot", player2robotImage);
        }
      }
  
      if(keyIsDown(RIGHT_ARROW)) {
        Player.x = Player.x + 5;
        if(plc === "boy"){
          Player.changeAnimation("rightboy", player1boyImage);
        }
        if(plc === "girl"){
          Player.changeAnimation("rightgirl", player1girlImage);
        }
        if(plc === "robot"){
          Player.changeAnimation("rightrobot", player1robotImage);
        }
      }
    }
  }

  if(Player.x > 1900 && Player.x < 2900){
      if(keyIsDown(LEFT_ARROW)) {
        Player.x = Player.x + 5;
        if(plc === "boy"){
          Player.changeAnimation("leftboy", player2boyImage);
        }
        if(plc === "girl"){
          Player.changeAnimation("leftgirl", player2girlImage);
        }
        if(plc === "robot"){
          Player.changeAnimation("leftrobot", player2robotImage);
        }
      }
  
      if(keyIsDown(RIGHT_ARROW)) {
        Player.x = Player.x - 5;
        if(plc === "boy"){
          Player.changeAnimation("rightboy", player1boyImage);
        }
        if(plc === "girl"){
          Player.changeAnimation("rightgirl", player1girlImage);
        }
        if(plc === "robot"){
          Player.changeAnimation("rightrobot", player1robotImage);
        }
      }
    
  }
}

  if(Player.isTouching(s1) && slb1 === 0){
    Player.x = 2500;
    Player.y = 150;
    gs = 1;
    slb1 = 1;
  }

  if(gs === 1 && sl1 === 0){
    b1.velocityY = -2;
    b11.velocityX = -3;
    b12.velocityX = -3;
    b13.velocityX = -3;
    sl1 = 1;
  }
  
  if(Player.isTouching(b11)){
    l = l - 1;
    b11.y = b11.y + 5000;
  }
  if(Player.isTouching(b12)){
    l = l - 1;
    b12.y = b12.y + 5000;
  }
  if(Player.isTouching(b13)){
    l = l - 1;
    b13.y = b13.y + 5000;
  }
  
  if(b11.x <= 2495 || b12.x <= 2495 || b13.x <= 2495){
    if(sl1 === 1){
      b11.y = 100;
      b12.y = 150;
      b13.y = 200;

      b11.x = 2735;
      b12.x = 2735;
      b13.x = 2735;
      
    }
  }

  //if(Player.x > 1900 && Player.x < 2900){
  //  if (frameCount % 20 === 0) {
  //    if(keyIsDown(SHIFT)){
  //      spawnP();
  //    }
  //  }
  //}

  if(Player.x > 1900 && Player.x < 2900){
    cd = cd + 1;
    if (cd >= 20){
      if(keyIsDown(SHIFT)){
        spawnP();
        cd = 0;
      }
    }
  }
  
  if(b1.isTouching(pGroup) && sl2 === 0){
    Player.x = 150;
    Player.y = 170;
    sl2 = 1;
    k = k + 1;
  }


  if(Player.isTouching(s3) && slb2 === 0){
    Player.x = 3500;
    Player.y = 150;
    b21.velocityY = Math.round(random(2, 4));
    b22.velocityY = Math.round(random(2, 4));
    b23.velocityY = Math.round(random(2, 4));
    b24.velocityY = Math.round(random(2, 4));
    slb2 = 1;
  }

  if(Player.isTouching(b21)){
    l = l - 1;
    b21.y = 70;
    b21.x = Math.round(random(3500, 3800));
    b21.velocityY = Math.round(random(2, 4));
  }

  if(Player.isTouching(b22)){
    l = l - 1;
    b22.y = 70;
    b22.x = Math.round(random(3500, 3800));
    b22.velocityY = Math.round(random(2, 4));
  }

  if(Player.isTouching(b23)){
    l = l - 1;
    b23.y = 70;
    b23.x = Math.round(random(3500, 3800));
    b23.velocityY = Math.round(random(2, 4));
  }

  if(Player.isTouching(b24)){
    yb = yb + 1;
    b24.y = 70;
    b24.x = Math.round(random(3500, 3800));
    b24.velocityY = Math.round(random(2, 4));
  }

  if(b21.isTouching(s2Wall4)){
    b21.y = 70;
    b21.x = Math.round(random(3500, 3800));
    b21.velocityY = Math.round(random(2, 4));
  }

  if(b22.isTouching(s2Wall4)){
    b22.y = 70;
    b22.x = Math.round(random(3500, 3800));
    b22.velocityY = Math.round(random(2, 4));
  }

  if(b23.isTouching(s2Wall4)){
    b23.y = 70;
    b23.x = Math.round(random(3500, 3800));
    b23.velocityY = Math.round(random(2, 4));
  }

  if(b24.isTouching(s2Wall4)){
    b24.y = 70;
    b24.x = Math.round(random(3500, 3800));
    b24.velocityY = Math.round(random(2, 4));
  }

  if(yb === 10 && slb2 === 1){
    Player.x = 1080;
    Player.y = 410;
    slb2 = 2;
    k = k + 1;
  }

  if(Player.isTouching(s3) && slb2 % 2 === 0){
    Player.x = 1080;
    Player.y = 310;
    slb2 = slb2 + 1;
  }

  if(Player.isTouching(s3) && slb2 % 2 !== 0){
    Player.x = 1080;
    Player.y = 410;
    slb2 = slb2 + 1;
  }



  if(Player.isTouching(s2) && slb3 === 0){
    Player.x = 4500;
    Player.y = 150;
    slb3 = 1;
    b3b.velocityX = 4;
    b3b.velocityY = -3.33333;
  }

  if(b3b.isTouching(b31)){
    b3b.bounceOff(b31);
    b31.y = 55555;
  }

  if(b3b.isTouching(b32)){
    b3b.bounceOff(b32);
    b32.y = 55555;
  }

  if(b3b.isTouching(b33)){
    b3b.bounceOff(b33);
    b33.y = 55555;
  }

  if(b3b.isTouching(b34)){
    b3b.bounceOff(b34);
    b34.y = 55555;
  }

  if(b3b.isTouching(b35)){
    b3b.bounceOff(b35);
    b35.y = 55555;
  }

  if(b3b.isTouching(b36)){
    b3b.bounceOff(b36);
    b36.y = 55555;
  }

  if(b3b.isTouching(b37)){
    b3b.bounceOff(b37);
    b37.y = 55555;
  }
  
  if(b3b.isTouching(b38)){
    b3b.bounceOff(b38);
    b38.y = 55555;
  }

  if(b3b.isTouching(s3Wall1) && slb3 === 1){
    l = l - 1;
    b3b.x = 4650;
    b3b.y = 150;
    b3b.velocityX = 4;
    b3b.velocityY = -3.33333;
  }

  if(sl3 === 0 && b31.y > 50000 && b32.y > 50000 && b33.y > 50000 && b34.y > 50000 && b35.y > 50000 && b36.y > 50000 && b37.y > 50000 && b38.y > 50000){
    Player.x = 840;
    Player.y = 170;
    sl3 = 1;
    slb3 = 2;
    k = k + 1;
  }

  if(Player.isTouching(s2) && slb3 % 2 === 0){
    Player.x = 740;
    Player.y = 170;
    slb3 = slb3 + 1;
  }

  if(Player.isTouching(s2) && slb3 % 2 !== 0){
    Player.x = 840;
    Player.y = 170;
    slb3 = slb3 + 1;
  }



  if(Player.isTouching(s4) && slb4 === 0){
    Player.x = 5510;
    Player.y = 150;
    b4b.velocityX = 3;
    b4b.velocityY = 1.65;
    b4.velocityY = 1.5;
    slb4 = 1; 
  }

  if(b4b.isTouching(b42)){
    l = l - 1;
    b4b.x = 5650;
    b4b.y = 150;
    b4.y = 150;
    b4b.velocityX = 3;
    b4b.velocityY = 1.65;
    b4.velocityY = 1.5;
  }

  if(b4b.isTouching(b41)){
    Player.x = 385;
    Player.y = 505;
    b4b.y = 55555;
    b4b.velocityX = 55;
    k = k + 1;
  }


  if(Player.isTouching(s5) && slb5 === 0){
    Player.x = 6500;
    Player.y = 150;
    slb5 = 1;
  }

  if(Player.isTouching(b54)){
    l = l + 1;
    Player.x = 480;
    Player.y = 80;
    k = k + 1;
  }

  if(k === 5 && Player.isTouching(dr)){
    dr.y = 55555;
    k = 0;
    gd = 1;
  }

  if(l === 0 && go === 0){
    go = 1;
    Player.x = 300;
    Player.y = 4444;
  }

  if(Player.isTouching(beg)){
    Player.x = 300;
    Player.y = 6666;
  }

  if(Player.isTouching(begy)){
    Player.x = 85;
    Player.y = 630;
  }
  
  if(Player.isTouching(end)){
    Player.x = 300;
    Player.y = 8888;
  }

  if(Player.isTouching(endy)){
    Player.x = 1120;
    Player.y = 40;
  }

 { 
  Player.bounceOff(eWall1);
  Player.bounceOff(eWall2);
  Player.bounceOff(eWall3);
  Player.bounceOff(eWall4);

  Player.bounceOff(wall1);
  Player.bounceOff(wall2);
  Player.bounceOff(wall3);
  Player.bounceOff(wall4);
  Player.bounceOff(wall5);
  Player.bounceOff(wall6);
  Player.bounceOff(wall7);
  Player.bounceOff(wall8);
  Player.bounceOff(wall9);
  Player.bounceOff(wall10);
  Player.bounceOff(wall11);
  Player.bounceOff(wall12);
  Player.bounceOff(wall13);
  Player.bounceOff(wall14);
  Player.bounceOff(wall15);
  Player.bounceOff(wall16);
  Player.bounceOff(wall17);
  Player.bounceOff(wall18);
  Player.bounceOff(wall19);
  Player.bounceOff(wall20);
  Player.bounceOff(wall21);
  Player.bounceOff(wall22);
  Player.bounceOff(wall23);
  Player.bounceOff(wall24);
  Player.bounceOff(wall25);
  Player.bounceOff(wall26);
  Player.bounceOff(wall27);
  Player.bounceOff(wall28);
  Player.bounceOff(wall29);
  Player.bounceOff(wall30);
  Player.bounceOff(wall31);
  Player.bounceOff(wall32);
  Player.bounceOff(wall33);
  Player.bounceOff(wall34);
  Player.bounceOff(wall35);
  Player.bounceOff(wall36);
  Player.bounceOff(wall37);
  Player.bounceOff(wall38);
  Player.bounceOff(wall39);
  Player.bounceOff(wall40);
  Player.bounceOff(wall41);
  Player.bounceOff(wall42);
  Player.bounceOff(wall43);
  Player.bounceOff(wall44);
  Player.bounceOff(wall45);
  Player.bounceOff(wall46);
  Player.bounceOff(wall47);
  Player.bounceOff(wall48);
  Player.bounceOff(wall49);

  Player.bounceOff(s1);
  Player.bounceOff(s2);
  Player.bounceOff(s3);
  Player.bounceOff(s4);
  Player.bounceOff(s5);
  Player.bounceOff(dr);

  Player.bounceOff(beg1); 
  Player.bounceOff(beg2);
  Player.bounceOff(beg3);
  Player.bounceOff(beg4);

  Player.bounceOff(end1); 
  Player.bounceOff(end2);
  Player.bounceOff(end3);
  Player.bounceOff(end4);

  Player.bounceOff(s1Wall1);
  Player.bounceOff(s1Wall2);
  Player.bounceOff(s1Wall3);
  Player.bounceOff(s1Wall4);

  Player.bounceOff(s2Wall1);
  Player.bounceOff(s2Wall2);
  Player.bounceOff(s2Wall3);
  Player.bounceOff(s2Wall4);

  Player.bounceOff(s3Wall1);
  Player.bounceOff(s3Wall2);
  Player.bounceOff(s3Wall3);
  Player.bounceOff(s3Wall4);

  Player.bounceOff(s4Wall1);
  Player.bounceOff(s4Wall2);
  Player.bounceOff(s4Wall3);
  Player.bounceOff(s4Wall4);

  Player.bounceOff(s5Wall1);
  Player.bounceOff(s5Wall2);
  Player.bounceOff(s5Wall3);
  Player.bounceOff(s5Wall4);

  Player.bounceOff(b1);
  b1.bounceOff(s1Wall1);
  b1.bounceOff(s1Wall2);
  b1.bounceOff(s1Wall3);
  b1.bounceOff(s1Wall4);

  Player.bounceOff(b51);
  Player.bounceOff(b52);
  Player.bounceOff(b53);
  Player.bounceOff(b55);

  b3b.bounceOff(s3Wall1);
  b3b.bounceOff(s3Wall2);
  b3b.bounceOff(s3Wall3);
  b3b.bounceOff(s3Wall4);
  b3b.bounceOff(Player);

  b4b.bounceOff(s4Wall1);
  b4b.bounceOff(s4Wall2);
  b4b.bounceOff(s4Wall3);
  b4b.bounceOff(s4Wall4);
  b4b.bounceOff(Player);  
  b4b.bounceOff(b4);

  b4.bounceOff(s4Wall1);
  b4.bounceOff(s4Wall2);
  b4.bounceOff(s4Wall3);
  b4.bounceOff(s4Wall4);
}


  if(Player.x < 1300 && Player.y < 6000){
    camera.position.x = Player.x;
    camera.position.y = Player.y;
  }

  if(Player.x > 1900 && Player.x < 2900){
    camera.position.x = 2650;
    camera.position.y = 150;
    background(gsImage);
  }

  if(Player.x > 2900 && Player.x < 3900){
    camera.position.x = 3650;
    camera.position.y = 150;
    background(gsImage);
  }

  if(Player.x > 3900 && Player.x < 4900){
    camera.position.x = 4650;
    camera.position.y = 150;
    background(lgsImage);
  }

  if(Player.x > 4900 && Player.x < 5900){
    camera.position.x = 5650;
    camera.position.y = 150;
    background(gsImage);
  }

  if(Player.x > 5900 && Player.x < 6900){
    camera.position.x = 6650;
    camera.position.y = 150;
    background(bsImage);
  }

  if(Player.x < 1300 && Player.y > 6000 & Player.y < 7000){
    camera.position.x = 300;
    camera.position.y = 6666;
    background(gsImage);
  }
  
  if(Player.x < 1300 && Player.y > 8000 & Player.y < 9000){
    camera.position.x = 300;
    camera.position.y = 8888;
  }

  fill(222, 222, 222);
    text("START", 65, 665);
    text("FINISH",1101,70);


    textSize(10);
    text("Beware " + name1 + "!", 50, 540);

    drawSprites();
    
  if(hid === 0){
    fill(222, 222, 222);

    textSize(8);
    text("Please pick a character and enter your name!", camera.position.x - 85, camera.position.y + 100);
  }

    textSize(10);
    text("Instructions", 05, 610);
    textSize(10);
    text("The End", 1101, 30);

  fill(63, 63, 63);
    textSize(5);
    text("Continue", 329, 6704);
    text("Playing", 331, 6710);

  if(dr.y < 500){
    fill(222, 222, 222);
      textSize(5);
      text("Unlock", 1032, 22.5);
      text("with", 1035, 27.5);
      text("five", 1036, 32.5);
      text("keys", 1035, 37.5);
  }
  fill(222, 222, 222);
    textSize(5);
    text("Use your arrow keys to move around!", 43, 672);

  textStyle(BOLD);
  fill(222, 222, 222);
    textSize(6);
    text("You have 5 lives to complete the game", 110, 6590);
    textSize(6);
    text("If you fail a challenge, you lose a life", 110, 6600);
    textSize(6);
    text("Once you have 0 lives, its", 110, 6610);

  fill(255, 0, 0);
    textSize(6);
    text("GAME OVER", 184, 6610);

  fill(222, 222, 222);
    textSize(6);
    text("If you complete a challenge, from each", 380, 6590);
    textSize(6);
    text("Portal you obtain a key. Once you obtain", 376, 6600);
    fill(255, 0, 0);
    textSize(6);
    text("ALL 5 KEYS", 369, 6610);
    fill(222, 222, 222);
    textSize(6);
    text(", you can unlock the final door", 404, 6610);

    fill(255, 0, 0);
    textSize(12);
    text("Controls:", 436, 6675);
    fill(222, 222, 222);
    textSize(6);
    text("Control the player using the Arrow Keys", 378, 6690);
    textSize(6);
    text("You also need to use Shift at some points", 374, 6700);
    //textSize(6);
    //text("Up Arrow is up, Down Arrow is down", 373, 6700);
    //textSize(6);
    //text("Left Arrow is left, Right Arrow is right", 373, 6710);

    fill(255, 0, 0);
    textSize(12);
    text("Goal:", 110, 6675);
    fill(222, 222, 222);
    textSize(6);
    text("Your goal is to navigate and complete the maze", 110, 6690);
    textSize(6);
    text("To complete the maze, you have to earn 5 keys", 110, 6700);
    textSize(6);
    text("You can earn a key by completing a challenge", 110, 6710);
    textSize(6);
    text("To play a challenge, enter a colored portal", 110, 6720);
    textSize(6);
    text("The portals will take you to the Enigma Realm", 110, 6730);
    textSize(6);
    text("By obtaining 5 keys, you can open the final door", 110, 6740);
    textSize(6);
    text("Conquer the Enigma Realm and finish the maze!", 110, 6750);

    text("There is a 5 Minute time limit to complete the maze", 347, 6780);
    textSize(6);
    text("If the time runs out, you lose and have to start over", 346, 6790);
    textSize(6);
    textStyle(NORMAL);

    textSize(18);
    text("Congratulations!", 230, 8810);
    textSize(18);
    text("You conquered the Enigma Realm!", 160, 8975);
    textSize(8);
    text("Feel free to try this game as many times as you like by refreshing the page", 165, 8990);


  textSize(12);
  fill(0, 0, 0);
    text("Lives: " + l, 2500, 55);
    text("Timer: " + tt4 + ":", 2742, 55);
    text(tt5, 2790, 55);
    text("Dodge the arrows and use Shift to shoot Bow - ie!", 2510, 255);

  fill(0, 0, 0);
    text("Lives: " + l, 3475, 55); 
    text("Timer: " + tt4 + ":", 3762, 55);
    text(tt5, 3810, 55);
    text("Catch 10 yellow skulls as they fall from the sky!", 3525, 255);
    text("Yellow Skulls Caught: " + yb + "/10", 3570, 55);    
  fill(255, 255, 0);
    text("Also try and avoid touching the other skulls!", 3532, 275);


  fill(0, 0, 0);
    text("Lives: " + l, 4500, 55);
    text("Timer: " + tt4 + ":", 4742, 55);
    text(tt5, 4790, 55);
    text("Destroy all of the magenta graves by bouncing the axe!", 4510, 255);

  fill(0, 0, 0);
    text("Lives: " + l, 5500, 55);
    text("Timer: " + tt4 + ":", 5742, 55);
    text(tt5, 5790, 55);
    text("Defeat Bouncer by getting the fireball into the opposing goal!", 5490, 255);

  fill(222, 222, 222);
    text("Lives: " + l, 6500, 55);
    text("Timer: " + tt4 + ":", 6742, 55);
    text(tt5, 6790, 55);
    text("Here, have a free life!", 6700, 180);
    text("Pssst. Find the secret passage to reach the heart!", 6500, 255);


  fill(222, 222, 222);
    text("Lives: " + l, 7500, 55);
    text("Timer: " + tt4 + ":", 7742, 55);
    text(tt5, 7790, 55);
    text("??? How are you here ??? Refresh and try not to escape the maze this time ok ???", 7515, 230);

  fill(0, 0, 0);

    text("Black", 466, 25);
    text("Portal", 465, 40);  
    
  fill(0, 255, 255);

    text("Cyan", 87, 165);
    text("Portal", 85, 180);

  fill(255, 128, 0);

    text("Orange", 366, 430);
    text("Portal", 370, 470);


  fill(0, 0, 0);
  textSize(12);
  textStyle(BOLD);
    text("Magenta", 766, 165);
    text("Portal", 774.25, 180);

  fill(255, 0, 255);
  textSize(12);
  textStyle(NORMAL);
    text("Magenta", 767, 165);
    text("Portal", 775, 180);

  fill(255, 255, 0);

    text("Yellow", 1063, 355);
    text("Portal", 1065, 370);

  //Magenta = (790, 170, 60, 60);
  //Yellow = (1080, 360, 60, 60);
  //Orange = (385, 445, 70, 70);
  fill(63, 63, 63);
    //textSize(10);
    //text("Bow-", b1.x - 12, b1.y - 5);
    //textSize(10);
    //text("naparte", b1.x - 16, b1.y + 10);

    //textSize(10);
    //text("Bouncer", b4.x - 19, b4.y + 3);

  fill(222, 222, 222);

  if(Player.x < 1900 && go === 0 && gameState !== "enter"){
      text("Lives: " + l, camera.position.x - 190, camera.position.y - 90);
      text("Keys: " + k, camera.position.x + 150, camera.position.y - 90);
      //text(time, 65, 635);
    //text(tt1, -1100, -1650);
    ///text(tt2, -1100, -1640);
    //text(tt3, -1100, -1630);
      text("Timer: " + tt4 + ":", camera.position.x + 130, camera.position.y + 100);
      text(tt5, camera.position.x + 177, camera.position.y + 100);
  }

  if(Player.y > 6000 && Player.y < 7000){
    fill(255, 0, 0);
    text("Lives: " + l, camera.position.x - 190, camera.position.y - 90);
    text("Keys: " + k, camera.position.x + 150, camera.position.y - 90);
    text("Timer: " + tt4 + ":", camera.position.x + 130, camera.position.y + 100);
      text(tt5, camera.position.x + 177, camera.position.y + 100);
    
  }
  fill(222, 222, 222);

  if(go === 1){
    textSize(18);
    text("You lost all of your lives!", Player.x - 95, Player.y - 50);
    textSize(18);
    text("You can try again by refreshing the page!", Player.x - 160, Player.y + 60);
    textSize(12);
    text("Feel free to try this game as many times as you like", Player.x - 130, Player.y + 90);
  }

}

function spawnP(){
  
  var p = createSprite(Player.x, Player.y, 10, 10);
  p.addImage(rArrowImage);
  p.scale = 0.03;
  p.lifetime = 120;
  p.velocityX = 3;
  pGroup.add(p);

}