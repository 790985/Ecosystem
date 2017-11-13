window.onload = init; // Wait for the page to load before we begin animation
var canvas;
var ctx;// This is a better name for a global variable
var movers = [];
var attr;
function init(){
  //get the canvas
  canvas = document.getElementById('cnv');
  // Set the dimensions of the canvas
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(255,255,255)';
  //for(var i = 0; i < 10; i++){
  //}
  // get the context
  ctx = canvas.getContext('2d');
  loadMovers(); // This is the context
  animate(); // Call to your animate function
}
// To do:


//  1. Declare and init variables x, y, dx, dy, radius;

function animate(){
// 2. Draw a circle (arc method) and radius
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,window.innerWidth, window.innerHeight);
  for(var i = 0; i < movers.length; i++){
    movers[i].update();
  }
  attr.update();
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
    ctx.strokeStyle = "rgb(0,0,250)";
    ctx.fillStyle = "rgb(0,0,250)";
    attr = new Attractor(new JSVector(40,30),
            new JSVector(Math.random * 10 + 1, Math.random * 10 + 1),
              new JSVector(0,0), 40 );
              //"rgb(0,0,250)");
    attr.loc = new JSVector(100,100);
    }
//function addMover(){
//      movers.push(new Mover());
//}
//setInterval(addMover,1000);
