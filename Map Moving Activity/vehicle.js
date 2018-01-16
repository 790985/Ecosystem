'use strict'

function Vehicle(id, loc){
  this.id = id;
  this.loc = loc;
  this.vel = new JSVector(Math.random()*3-1.5, Math.random()*3-1.5);
  this.acc = new JSVector(0, 0);
  this.angle = 0;

  // Method to update position
  this.update = function(){
	   this.loc.x = mouseX;
	   this.loc.y = mouseY;
    this.vel.add(this.acc);
    this.loc.add(this.vel);
  this.checkEdges();
  this.render();
  }
// Method to display
  this.render = function() {
    if(this.id >= 0){
      ctx.strokeStyle = "rgba(2, 2, 2, 1)";
      ctx.fillStyle = "rgba(0, 255, 0, .75)";
    }else{
      ctx.strokeStyle = "rgba(255, 0, 0, 1)";
      ctx.fillStyle = "rgba(255, 0, 0, .75)";
    }
    ctx.save();
    ctx.translate(this.loc.x, this.loc.y);
    this.angle = this.vel.getDirection()+Math.PI/2;
    ctx.rotate(this.angle);
    ctx.beginPath();
    ctx.moveTo(-6, 12);
    ctx.lineTo(6, 12);
    ctx.lineTo(0, -12);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.restore();

  }

  this.checkEdges = function(){
    if(this.loc.x < 0) this.loc.x  = window.innerWidth;
    if(this.loc.x > window.innerWidth) this.loc.x  = 0;
    if(this.loc.y < 0) this.loc.y  = window.innerHeight;
    if(this.loc.y > window.innerHeight) this.loc.y  = 0;
  }
  this.applyForce = function(force){
    this.vel.add(force);
  }
  this.seekCoordinates = function(target){
  var desired = JSVector.subGetNew(target,this.loc);
  desired.normalize();
  desired.mult(4);//implement variable
  var steer = JSVector.subGetNew(desired,this.vel);
  this.applyForce(steer);
}
}
