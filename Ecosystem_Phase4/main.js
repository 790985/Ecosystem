window.onload = init;
var canvas;
var ctx;
var particles = [];
function init(){
  canvas = document.getElementById('cnv')
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  canvas.style.border = 'solid red 3px';
  canvas.style.backgroundColor = randomColor();
  ctx = canvas.getContext('2d');
  makeParticles(10);
  animate();
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0,0,canvas.width, canvas.height);
  for(let i = 0; i < particles.length; i++){
  if(particles[i] == null){
    addParticle(i);
  }
  particles[i].update();
  if(particles[i].isDead()){
    particles[i] = null;
  }
}
}
function makeParticles(numParticles){
  for(let i = 0; i < numParticles; i++){
    particles.push(new Particle(new JSVector((Math.random()*50)+200,(Math.random()*10)+20),new JSVector(Math.random()*3, Math.random()*3),new JSVector(0.01, 0.05)));
  }
}
function addParticle(index){
  if(index == null){
  particles.push(new Particle(new JSVector((Math.random()*50)+200,(Math.random()*10)+20),new JSVector(Math.random()*3, Math.random()*3),new JSVector(0.01, 0.05)));
  }
  particles[index] = new Particle(new JSVector((Math.random()*50)+200,(Math.random()*10)+20),new JSVector(Math.random()*3, Math.random()*3),new JSVector(0.01, 0.05));
}

function randomColor(){
  var r = Math.random() * 255|50;
  var g = Math.random() * 255|50;
  var b = Math.random() * 255|50;
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}
setInterval(addParticle, 1000);
