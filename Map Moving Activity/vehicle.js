'use strict'
document.addEventListener('keypress',keyPressed, false);
var dir; //1 = up: 2 = left: 3 = down: 4 = right
function Vehicle(loc){
  this.loc = loc;
}
  // Method to update position
  Vehicle.prototype.update = function(){
  this.render();
  }
  function keyPressed(event){
    if(event.keyCode == 87){
      ctx.translate(0,10);
      this.loc.y -= 10;
    }else if(event.keyCode == 65){
      ctx.translate(-10,0);
      this.loc.x += 10;
    }else if(event.keyCode == 83){
      ctx.translate(0,-10);
      this.loc.y += 10;
    }else if(event.keyCode == 68){
      ctx.translate(10,0);
      this.loc.y -= 10;
    }
  }
// Method to display
  Vehicle.prototype.render = function() {
    ctx.strokeStyle = "rgb(117, 177, 118)";
    ctx.fillStyle = "rgba(255, 0, 0, .75)";
    ctx.translate(this.loc.x, this.loc.y);
    ctx.beginPath();
    ctx.arc(this.loc.x,this.loc.y, 10,Math.PI*2,0,false);
    ctx.fill();
    ctx.stroke();

  }
