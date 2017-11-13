function Orbiter(loc,vel,clr,obj,r){
this.loc = loc;
this.vel = vel;
this.clr = clr;
this.obj = obj;
this.r = r;
this.radiusVector = new JSVector(0,80);
this.currentAngle = Math.random() * Math.PI*2;
this.currentAngleV = Math.random()/10;
}
Orbiter.prototype.update = function(){
    this.currentAngle = this.currentAngle + this.currentAngleV;
    this.radiusVector.setDirection(this.currentAngle);
    this.loc = JSVector.addGetNew(this.radiusVector, this.obj.loc);
    this.render();
}
Orbiter.prototype.render = function(){
    ctx.fillStyle = this.clr;
    ctx.beginPath();
    ctx.arc(this.loc.x, this.loc.y, this.r, Math.PI*2,0,false);
    ctx.stroke();
    ctx.fill();
}
