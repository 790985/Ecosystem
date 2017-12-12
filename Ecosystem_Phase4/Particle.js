'use strict'
//use for class syntax
function Particle(loc, vel, acc){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.lifespan = 150;
}
Particle.prototype.update = function(){
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.lifespan -= 1;
  if(this.isDead()){
  }else {
    this.render();
  }
}


Particle.prototype.render = function(){
  ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
  ctx.strokeStyle = "rbga(255,255,255 " + this.lifespan/150 + ")";
  ctx.fillStyle = "rgba(255,255,255, " + this.lifespan/150 + ")";
  ctx.beginPath();
  ctx.arc(this.loc.x,this.loc.y, 10, Math.PI*2, 0, false);
  ctx.stroke();
  ctx.fill();
}
Particle.prototype.isDead = function(){
  if(this.lifespan < 0){
    return true;
  } else {
    return false;
  }
}
