'use strict'
//use for class syntax
class Particle{
  constructor(){
  this.loc = new JSVector(Math.random()*50,0);
  this.vel = new JSVector(Math.random()*3, Math.random()*3);
  this.acc = new JSVector(0.01, 0.05);
  this.lifespan = 200;

}
update(){
  this.vel.add(this.acc);
  this.loc.add(this.vel);
  this.lifespan -= 1;
  if(this.isDead()){
  }else {
    this.render();
  }
}
render(){
  ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
  ctx.strokeStyle = "rbga(255,255,255 " + this.lifespan/200 + ")";
  ctx.fillStyle = "rgba(255,255,255, " + this.lifespan/200 + ")";
  ctx.beginPath();
  ctx.arc(this.loc.x,this.loc.y, 10, Math.PI*2, 0, false);
  ctx.stroke();
  ctx.fill();
}
isDead() {
  if(this.lifespan < 0){
    return true;
  } else {
    return false;
  }
}
}
