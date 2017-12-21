function JSVector(x, y){
  this.x = x;
  this.y = y;
}
JSVector.prototype.add = function(vector){
  this.x += vector.x;
  this.y += vector.y;
}
JSVector.prototype.addGetNew = function(vector){
  return new JSVector(this.x + vector.x,this.y + vector.y);
}
JSVector.prototype.sub = function(vector){
  this.x -= vector.x;
  this.y -= vector.y;
}
JSVector.prototype.subGetNew = function(vector){
  return new JSVector(this.x - vector.x, this.y- vector.y);
}
JSVector.prototype.mult = function(vector){
  this.x *= vector.x;
  this.y *= vector.y;
}
JSVector.prototype.div = function(vector){
  this.x /= vector.x;
  this.y /= vector.y;
}
JSVector.prototype.copy = function(){
  return new JSVector(this.x,this.y);
}
JSVector.prototype.setMag = function(){
  this.x = Math.cos(this.getDir) * this.getMag();
  this.y = Math.sin(this.getDir) * this.getMag();
}
JSVector.prototype.getMag = function(){
  return Math.sqrt(this.x * this.x + this.y * this.y);
}
JSVector.prototype.getDir = function(){
  return Math.atan2(this.y,this.x);
}
JSVector.prototype.setDir = function(angle){
  this.x = this.getMag * Math.cos(angle);
  this.y = this.getMag * Math.sin(angle);
}
JSVector.prototype.normalize = function(){
	this.div(this.getMag());

  //this.divide(new JSVector(this.getMag(),this.getMag()))
}
JSVector.prototype.lerp = function(){

}
JSVector.prototype.limit = function(mag){
  if(this.getMag() > mag){
	this.setMag(mag);
  }
}
JSVector.prototype.distance = function(vector){
  return this.subGetNew(this.getMag(),vector.getMag());
}
//}
//Vector.prototype.angleBetween(vector){

//}
