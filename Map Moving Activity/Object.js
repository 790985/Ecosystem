function obj(loc,clr){
  this.loc = loc;
}
obj.prototype.update = function(){
  this.render();
}
obj.prototype.render = function(){
  ctx.beginPath();
  ctx.arc(this.loc.x,this.loc.y,40,Math.PI*2,0,false);
  ctx.fill();
  ctx.stroke();
}
