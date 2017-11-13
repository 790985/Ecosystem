window.onload = init;
var canvas;
var ctx;
var snakelist = [];
var orbiterlist = [];
var moverlist = [];
var foodlist = [];
function init(){
  canvas = document.getElementById('cnv')
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid red 3px';
  canvas.style.backgroundColor = randomColor();
  ctx = canvas.getContext('2d');

  loadMovers();
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  for(var i = 0; i < 100; i++){
    moverlist[i].update();
    orbiterlist[i].update();
    snakelist[i].update();
  }
}

function loadMovers(){
  for(var i = 0; i < 100; i++){
        var radius = Math.random() * 30 + 15;
        var x = Math.random() * (window.innerWidth - radius*2) + radius;
        var y = Math.random() * (window.innerHeight - radius*2) + radius;
        var dx = Math.random() * 10 + 1;
        var dy = Math.random() * 10 + 1;

        var loc = new JSVector(x, y);
        var vel = new JSVector(dx, dy);
        var acc = new JSVector(0,0);
        ctx.strokeStyle = "rgba(0,0,0,0)";
        ctx.fillStyle = randomColor();
        moverlist[i] = new Mover(loc, vel, acc, radius, "rgba(0,0,0,0)");
        var x = Math.random() * (window.innerWidth - radius*2) + radius;
        var y = Math.random() * (window.innerHeight - radius*2) + radius;
        var dx = Math.random() * 10 + 1;
        var dy = Math.random() * 10 + 1;

        var loc = new JSVector(x, y);
        var vel = new JSVector(dx, dy);
        orbiterlist[i] = new Orbiter(loc, vel, randomColor(),moverlist[i], 20);
        snakelist[i] = new Snake(randomColor(),5,orbiterlist[i]);
      }
}

function randomColor(){
  var r = Math.random() * 255|50;
  var g = Math.random() * 255|50;
  var b = Math.random() * 255|50;
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

//setInterval(loadMover, 6000);
