'use strict'

class Cell {
  constructor(game, location, id, col, row) {
    this.checkNode = true;
    this.node = -1; // No negative one distance.
//    this.number = 0;
    this.game = game;
    this.loc = location;
    this.occupied = 1;
  //  this.num = 0;
    this.neighbors = [];
    this.id = id;
    //this.row = row;
    //this.col = col;
    this.vec = new JSVector(0,0);
    this.row = row;
    this.col = col;
  }

  render(){
    //  draw a rectangle at location
    if(this.occupied == -1){
      this.game.context.fillStyle = 'black';
    } else if(this.occupied == 1){
      this.game.context.fillStyle="#AABBAA";
      // this.game.context.strokeStyle="#001122";
    }
    else if(this.occupied == 2){
      this.game.context.fillStyle = 'red';
    }
    else if(this.occupied == 3){
      this.game.context.fillStyle = 'green';
    }

    //if(this.id ==32){
    //  console.log("id = "+this.id.toString()+"     "+this.col.toString()+","+this.row.toString());}
    this.game.context.fillRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
    this.game.context.strokeRect(this.loc.x, this.loc.y, this.game.colWidth, this.game.colWidth);
    this.game.context.fillStyle = 'green';
    this.game.context.fillText(this.id.toString(), this.col*this.game.colWidth, (this.row+1)*this.game.colWidth);
  }
  //
  // addNeighbors(){
  //      var n, e, s, w;
  //      if(this.row > 0 && this.game.grid[this.col][this.row].occupied == 1){  // find north
  //           n = this.game.grid[this.col][this.row-1];
  //           console.log(this.row);
  //           this.neighbors.push(n);
  //         //  n.occupied = 4;
  //           console.log(n);
  //      }
  //      if(this.row < 32 && this.game.grid[this.col][this.row].occupied == 1){  // find north
  //           s = this.game.grid[this.col][this.row+1];
  //           this.neighbors.push(s);
  //       //    s.occupied = 4;
  //           console.log(s);
  //       }
  //       if(this.col > 0 && this.game.grid[this.col][this.row].occupied == 1){  // find north
  //            w = this.game.grid[this.col][this.row];
  //            this.neighbors.push(w);
  //     //       w.occupied = 4;
  //            console.log(w);
  //          }
  //          if(this.col < 36 && this.game.grid[this.row][this.col].occupied == 1){  // find north
  //               e = this.game.grid[this.row][this.col];
  //               this.neighbors.push(e);
  // //                e.occupied = 4;
  //               console.log(e);
  //             }
  //
  //    }

}
//addNeighbors();
