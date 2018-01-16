'use strict'
function obj(loc){
  this.loc = loc;
}
this.update = function(){
  this.loc = loc;
}
this.render = function(){
  ctx.save();
  ctx.arc(this.loc.x,this.loc.y,5,Math.PI*2,0,false);
  ctx.fill();
  ctx.stroke();
}
