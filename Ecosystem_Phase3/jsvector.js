function JSVector(x, y){
	this.x = x;
  this.y = y;
}
JSVector.prototype.setMag = function(mag){
   var dir = this.getDirection();
	 this.x = mag * Math.cos(dir);
	 this.y = mag * Math.sin(dir);
}
JSVector.prototype.getMag = function(){
   return Math.sqrt((this.x*this.x)+(this.y*this.y))
}
JSVector.prototype.add = function(vec){
  this.x += vec.x
  this.y += vec.y
}
JSVector.addGetNew = function(vec1, vec2){
  var x = vec1.x + vec2.x;
  var y = vec1.y + vec2.y;
	return new JSVector(x, y);
}
JSVector.subGetNew = function(vec1, vec2){
	var x = vec2.x - vec1.x;
  var y = vec2.y - vec1.y;
	return new JSVector(x, y);
}
JSVector.prototype.sub = function(vec){
  this.x -= vec.x;
  this.y -= vec.y;
}
JSVector.prototype.mult = function(vec){
  this.x *= vec.x;
  this.y *= vec.y;
}
JSVector.prototype.div = function(vec){
  this.x /= vec.x;
  this.y /= vec.y;
}
JSVector.prototype.distance = function(vec1, vec2){
  var v = JSVector.subGetNew(vec1, vec2);
	return v.getMag();
}
JSVector.angleBetween = function(vec1, vec2){
  var a1 = vec1.getDirection();
	var a2 = vec2.getDirection();
	return a2 - a1;
}
JSVector.prototype.setDirection = function(angle){
	mag = this.getMag();
	this.x = mag * Math.cos(angle);
	this.y = mag * Math.sin(angle);
}
JSVector.prototype.getDirection = function(){
   return Math.atan2(this.y, this.x);
}
JSVector.prototype.normalize = function(){
	 var m = this.getMag();
	 this.div(m);
}
JSVector.prototype.limit = function(mag){
	if(this.getMag() > mag){
		this.setMag(mag);
	}
}
JSVector.prototype.copy = function(mag){
	this.setMag(mag);
}
