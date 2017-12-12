window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable
var movers = [];
function init(){
  canvas = document.getElementById('cnv');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(255,255,255)';
  ctx = canvas.getContext('2d');
  loadMovers();
  animate();
}
function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  for(var i = 0; i < movers.length; i++){
    movers[i].update();
  }
}
function loadMovers(){
  for(var i=0; i < 10; i++){
    var x = Math.random() * window.innerWidth + 1;
    var y = Math.random() * window.innerHeight + 1;
    var radius = Math.random() * 30 + 5;
    var dx = Math.random() * 10 + 1;
    var dy = Math.random() * 10 + 1;
    var loc = new JSVector(x,y);
    var vel = new JSVector(dx,dy);
    var acc = new JSVector(0,0);
    movers.push(new Mover(loc, vel, acc, radius));
    ctx.strokeStyle = movers[i].clr;
    ctx.fillStyle = movers[i].clr;
  }
}
