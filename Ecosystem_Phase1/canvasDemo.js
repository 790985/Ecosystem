

window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable
var BallList = [];
function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(255,255,255)';
  //for(var i = 0; i < 10; i++){
    BallList.push(new Ball());
  //}
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  animate(); // Call to your animate function
}
// To do:


//  1. Declare and init variables x, y, dx, dy, radius;

function animate(){
// 2. Draw a circle (arc method) and radius
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  for(var i = 0; i < BallList.length; i++){
  var ball = BallList[i];
  ctx.strokeStyle = ball.color;
  ctx.fillStyle = ball.color;
  ctx.beginPath();
  ctx.arc(ball.x,ball.y, ball.r, Math.PI*2, 0, false);
  ctx.stroke();
  ctx.fill();
  ball.y += ball.dy;
  ball.x += ball.dx;
  if(ball.x >= window.innerWidth + 25 || ball.x <= 25){
    ball.dx = ball.dx * -1;
  }else if (ball.y >= window.innerHeight + 25 || ball.y <= 25){
    ball.dy = ball.dy * -1;
  }
  }
  requestAnimationFrame(animate);
}
function Ball(){
      this.x = window.innerWidth/2;
      this.y = window.innerHeight/2;
      this.dx = Math.random() * 10 *2.75;
      this.dy = Math.random() * 10 *2.75;
      this.r = Math.random() * 25 + 5;
      if(Math.floor(Math.random()*2))
      this.rm = //attraction
      this.color = "rgb(" + Math.floor(Math.random() * (255 - 0 + 1))+","+Math.floor(Math.random()*(255-0+1))+","+Math.floor(Math.random()*(255 - 0 + 1)) + ")";
}
function addBall(){
      BallList.push(new Ball());
}
setInterval(addBall,1000);
