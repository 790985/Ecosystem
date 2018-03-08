
'use strict'

class Cell {
  constructor(game, location, occupied, row, col) {
    this.game = game;
    this.loc = location;
    this.occupied = occupied;
    this.number = 0;
    this.mark = false;
    this.neighbors = [];
    this.row = row;
    this.col = col;


  }
  render(){
    //  draw a rectangle at location
    this.addNeighbors();
    if(this.occupied == -1){
      this.game.context.fillStyle="blue";
    }if(this.occupied == 1){
      this.game.context.fillStyle="#AABBAA";
    }if(this === game.root){
      this.game.context.fillStyle="red";
    }if(this === game.goal){
      this.game.context.fillStyle="green";
    }
    this.game.context.strokeStyle="#001122";
    this.game.context.fillText(this.number.toString(),0,0);
    this.game.context.fillText(this.number.toString(),50,50);
    this.game.context.fillText(this.number.toString(),100,100);
    this.game.context.fillText(this.number.toString(),150,150);
    this.game.context.fillRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
    this.game.context.strokeRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
  }
   addNeighbors(){
       let n, e, s, w = null;
       if(this.row > 0 && this.game.grid[this.row][this.col].occupied == 1){  // find north
            n = this.game.grid[this.row][this.col];
            this.neighbors.push(n);
       }
       if(this.row < 36 && this.game.grid[this.row][this.col].occupied == 1){  // find north
            s = this.game.grid[this.row][this.col];
            this.neighbors.push(s);
        }
        if(this.col > 0 && this.game.grid[this.row][this.col].occupied == 1){  // find north
             w = this.game.grid[this.row][this.col];
             this.neighbors.push(w);
           }
           if(this.col > 32 && this.game.grid[this.row][this.col].occupied == 1){  // find north
                e = this.game.grid[this.row][this.col];
                this.neighbors.push(e);
              }

     }
}
