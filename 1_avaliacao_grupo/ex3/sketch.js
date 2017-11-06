//

var x,y,xFolha,yFolha,v,t,tamanho, img;

function preload() {img = loadImage("../ex3/eva.png");  //Carrega a imagem
}

function setup() 
{
  createCanvas (596, 842);
  xFolha=596;
  yFolha=842;
  v=100;
  t=v;
  x=width;
  y=height;
  tamanho=2;
}


function draw() {
    strokeWeight(10);
     stroke(39,82,89);
       rect(4,4, 420, 370);
         rect(4,190, 588, 560);
  if (frameRate%50);
  background (48,81,80,10);
   image(img, 0, y/2, img.x/2, img.y/2);
  xFolha += random(-v,v);
  yFolha += random(-v,v);

  if (xFolha<=0) xFolha+=t;
  if (xFolha>=width) xFolha-=t;
  if (yFolha<=0) yFolha+=t;
  if (yFolha>=height) yFolha-=t;

  //if (t>30 || t<0) tamanho*=-1;
  //t+=tamanho;

  noFill();
  strokeWeight(5);
  stroke(255);
  quad (xFolha/2,yFolha/2-60,  xFolha/2-45,yFolha/2,  xFolha/2,yFolha/2+60,  xFolha/2+45,yFolha/2);
  
}