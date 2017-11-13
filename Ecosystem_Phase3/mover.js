

function Mover(loc, vel, acc, len, clr){
  this.loc = loc;
  this.vel = vel;
  this.acc = acc;
  this.len = len;
  this.clr = clr;
}
function Snake(clr,segNum,orb){
  this.clr = clr;
  this.seg = segNum;
  this.orb = orb;
  this.r = 10;
  this.segLen = 50;
  this.seglist = []
  for(let i = 0; i < this.seg; i++){
    this.seglist[i] = new JSVector(0,0);
  }
}
Snake.prototype.update = function(){
  this.seglist[0] = this.orb.loc;
  for(let i = 1; i < this.seg; i++){
    let n = JSVector.subGetNew(this.seglist[i],this.seglist[i-1]);
    n.setMag(this.segLen);
    n.add(this.seglist[i-1]);
    this.seglist[i] = n;
  }


this.render();

}
Snake.prototype.render = function(){
  for(let i = 0; i < this.seglist.length; i++){
  ctx.fillStyle = this.clr;
  ctx.beginPath();
  ctx.arc(this.seglist[i].x, this.seglist[i].y, this.r, Math.PI*2,0,false);
  ctx.stroke();
  ctx.fill();
}
}

Mover.prototype.update = function(){

  this.loc.add(this.vel);
  if(this.loc.x >= (window.innerWidth  - this.len)|| this.loc.x <= this.len){
     this.vel.x *= -1;
  }
  if(this.loc.y >= window.innerHeight - this.len || this.loc.y <= this.len){
     this.vel.y *= -1;
  }
  this.render();
}

Mover.prototype.render = function(){
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.len, Math.PI*2,0,false);
    ctx.stroke();
    ctx.fill();
}
