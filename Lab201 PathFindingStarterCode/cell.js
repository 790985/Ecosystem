
'use strict'

class Cell {
  constructor(game, location, occupied, row, col) {
    this.game = game;
    this.loc = location;
    this.occupied = occupied;
    this.number = 0;
    this.neighbors = [];
    this.row = row;
    this.col = col;


  }
  render(){
    //  draw a rectangle at location
    if(this.occupied == -1){
      this.game.context.fillStyle="blue";
    }if(this.occupied == 1){
      this.game.context.fillStyle="#AABBAA";
    }if(this.occupied == 2){
      this.game.context.fillStyle="red";
    }if(this.occupied == 3){
      this.game.context.fillStyle="green";
    }
    this.game.context.strokeStyle="#001122";
    this.game.context.fillRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
    this.game.context.strokeRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
  }
   addNeighbors(){
       let n, e, s, w = null;
       if(this.row > 0 && this.grid[this.row][this.col].occupied != -1){  // find north
            n = this.grid[this.row][this.col];
            this.neighbors.push(n);
       }

     }
}
