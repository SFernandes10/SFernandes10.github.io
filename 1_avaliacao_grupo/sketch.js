
var x, y, t, v, factorCrescimento, xAnterior, yAnterior, pix, SGV;
var img;
function preload() {
  img = loadImage("Eva.jpg");
}
function setup() 
{
  createCanvas (596, 842, SVG);
  
  image(img, 0, 0);
  x = width/2;
  y = height/2;
  xAnterior = x;
  yAnterior = y;

  v = 30;
  t = v;
  factorCrescimento = 2;
 
}


function draw() 
{
  if (frameCount%50 === 0) background (255,10);
  x += random(-v, v);
  y += random(-v, v);

  if (x<=0) x +=t;
  if (x>=width) x-=t;
  if (y<=0) y+=t;
  if (y>=height) y-=t;

  if (t>30 ||t<0) factorCrescimento*=-1;
 

  t +=factorCrescimento;
 
  var pix = img.get(x,y);
  noFill();
  stroke (pix, 128);
  line(xAnterior, yAnterior, x, y);

  xAnterior = x;
  yAnterior = y;
}


function keyPressed()
{
  if (key === "1")
  {
    noLoop();
    save("meuProjecto.svg");

  }


}