

window.onload = init;

// All of these are global
var canvas;
var ctx;
var colorArray = [
  'rgb(163, 48, 37, .3)', 'rgba(241, 167, 28, .3)', 'rgba(238, 241, 28, .3)',
  'rgba(28, 241, 238, .3)', 'rgba(28, 110, 241, .3)', 'rgba(128, 28, 241, .3)',
  'rgba(216, 28, 241, .3)', 'rgba(241, 28, 103, .3)', 'rgba(155, 7, 14, .3)'
];
var balls = [];
var mouseX, mouseY;
var mouseObj;

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(100,20,200)';
  canvas.addEventListener('mousemove', function(){
    mouseX = event.offsetX;     // Get the mouse coordinate
    mouseY = event.offsetY;

  }
  , false);
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  mouseObj = new Vehicle(0, new JSVector(window.innerWidth/2, window.innerHeight/2));
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  mouseObj.seekCoordinates(new JSVector(mouseX,mouseX));
  mouseObj.update();
  for(var i = 0; i < balls.length; i++){
    balls[i].update();
  }
  ctx.translate(window.innerWidth-mouseX, window.innerHeight-mouseY)
}

function makeBalls(num){

  for(var i = 0; i < num; i++){
    balls.push(new JSVector(((Math.random()*50)-20),((Math.random()*100)- 20)));
  }
}
