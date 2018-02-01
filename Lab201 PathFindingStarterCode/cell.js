
'use strict'

class Cell {
    constructor(game, location, type=0) {
      this.game = game;
      this.loc = location;
      this.type = type; // 0 = unoqupied 1 =occupied 2 = start 3 = goal

    }

    render(){
     //  draw a rectangle at location
     if(this.type = 1){
       this.game.context.fillStyle = "#001122";
       this.game.context.strokeStyle="#001122";
       this.game.context.fillRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
       this.game.context.strokeRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
     }else if(this.type = 0){
     this.game.context.fillStyle="#AABBAA";
     this.game.context.strokeStyle="#001122";
     this.game.context.fillRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
     this.game.context.strokeRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
    }
  }
}
