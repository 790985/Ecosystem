window.onload = init;
var canvas;
var ctx;
var mover;
var orbiter;
var snake;
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
    mover.update();
    orbiter.update();
    snake.update();
    console.log(snake, "2");
}

function loadMovers(){
        var radius = Math.random() * 30 + 15;
        var x = Math.random() * (window.innerWidth - radius*2) + radius;
        var y = Math.random() * (window.innerHeight - radius*2) + radius;
        var dx = Math.random() * 10 + 1;
        var dy = Math.random() * 10 + 1;

        var loc = new JSVector(x, y);
        var vel = new JSVector(dx, dy);
        var acc = new JSVector(0,0);
        ctx.strokeStyle = randomColor();
        ctx.fillStyle = randomColor();
        mover = new Mover(loc, vel, acc, radius, randomColor());
        var x = Math.random() * (window.innerWidth - radius*2) + radius;
        var y = Math.random() * (window.innerHeight - radius*2) + radius;
        var dx = Math.random() * 10 + 1;
        var dy = Math.random() * 10 + 1;

        var loc = new JSVector(x, y);
        var vel = new JSVector(dx, dy);
        orbiter = new Orbiter(loc, vel, randomColor(),mover, 20);
        snake = new Snake(randomColor(),5,orbiter);
        console.log(snake);
}

function randomColor(){
  var r = Math.random() * 255|50;
  var g = Math.random() * 255|50;
  var b = Math.random() * 255|50;
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

//setInterval(loadMover, 6000);
