

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
var player;

function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(100,20,200)';
  canvas.addEventListener('keydown', function(e){
    if(e.keyCode == 87){
      player.dir = 2;//up
    }else if(e.keyCode == 83){
      player.dir = -2; //down
    }else if(e.keyCode == 65){
      player.dir = -1; //left
    }else if(e.keyCode == 68){
      player.dir = 1; //right
    }
  }
  , false);
  makeBalls(30);
  player = new Vehicle(new JSVector(window.innerWidth/2,window.innerHeight/2));
  // get the context
  ctx = canvas.getContext('2d'); // This is the context
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  ctx.translate(window.innerWidth/2-player.loc.x, window.innerHeight/2-player.loc.y);
  player.update();
  for(var i = 0; i < balls.length; i++){
    balls[i].update();
  }
}

function makeBalls(num){

  for(var i = 0; i < num; i++){
    balls.push(new obj(new JSVector(((Math.random()*500)-200),((Math.random()*500)- 200))));
  }
}
