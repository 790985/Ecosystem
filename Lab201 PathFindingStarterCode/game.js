'use strict'

// wait for the window to load and than call back setup()
window.addEventListener('load', setup, false);
var game;   // the global game object
const FRAME_RATE=30;

function setup() {
  game = new Game();
  window.setTimeout(draw, 100);    // wait 100ms for resources to load then start draw loop
}

function draw() {   // the animation loop
  game.run();
  window.setTimeout(draw, 1000/FRAME_RATE);  // come back here every interval
}
function onClick(event){
  var mx = Math.floor(event.offsetX/game.colWidth);
  var my = Math.floor(event.offsetY/game.colWidth);

  if(Math.abs(game.grid[mx][my].occupied) == 1){
    game.grid[mx][my].occupied = -game.grid[mx][my].occupied;
    game.changed = true;
  }
 }

// Game is the top level object and it contains the levels
class Game {
  constructor() {   // from setup()
    //  Game elements
    this.changed = false;
    this.enemies = [];
    this.menuTileDivs = this.createMenuTileDivs();
    this.infoTileDivs = this.loadInfoTileArray();
    this.cols = 36;
    this.rows = 32;
    this.colWidth = 25;
    this.grid = [];
    this.loadGrid();
    //  create the canvas
    this.canvas =  document.getElementById('gameCanvas');
    this.canvas.addEventListener('click',onClick ,false);
    this.canvas.addEventListener("mouseover", handleCanvasMouseOver, false);
    if (!this.canvas || !this.canvas.getContext)
    throw "No valid canvas found!";
    //  create the context
    this.context = this.canvas.getContext("2d");
    if(!this.context)
    throw "No valid context found!";

    //  add levels to levels array
    this.levels = [];
    this.numLevels = 1;     // for now
    this.currentLevel = 1;
    for(let i = 0; i < this.numLevels; i++)
    this.levels.push(new Level(this, i+1));

    // set call backs
    //this.menuTileDivs = this.createMenuTileDivs();

  }
  run() {       // called from draw()

      this.render();
      //this.levels[this.currentLevel-1].run();  // run the current level

  }
  render() {    // draw whatever
    //this.loadGrid();
    this.drawGrid();
  }
  //++++++++++++++++++++++++++++++++++++++++  constructor calls
  createMenuTileDivs(){
    var tiles = [];
    for(var i = 0; i < 5; i++){
      var mtd = document.createElement("div");
      // getimage for tiles and bullets
      var cnvTurImgPath = "images/towers/d" + i + ".png";  // small tower image for canvas
      var cnvBulImgPath = "images/bullets/b" + i + ".png";     // bullet image for canvas
      var imgName = 'images/towers/tow' + i + '.png'; // large image for menu tile


      mtd.cnvTurImg = new Image();
      mtd.cnvTurImg.addEventListener('load',this.hideImgElement,false);
      mtd.cnvTurImg.addEventListener('error', function() { console.log(cnvTurImgPath + " failed to load"); }, false);
      mtd.cnvTurImg.src = cnvTurImgPath;    // start loading image

      mtd.cnvBulImg = new Image();
      mtd.cnvBulImg.addEventListener('load',this.hideImgElement,false);
      mtd.cnvBulImg.addEventListener('error', function() { console.log(cnvBulImgPath + " failed to load"); }, false);
      mtd.cnvBulImg.src = cnvBulImgPath;    // start loading image

      document.getElementById("menuDiv").appendChild(mtd);

      mtd.cost = 100*i +50;
      mtd.id = 'towDiv ' + i;
      //  Adding menu tile styles
      mtd.style.float = 'left';
      mtd.style.marginLeft = "90px";
      mtd.style.margintop = "12px";
      mtd.style.border = "solid";
      //mtd.style.border = "3px";
      mtd.style.borderRadius = "50%";
      mtd.style.width = "90px";
      mtd.style.height = "90px";
      //mtd.setClass = "menuTile";
      mtd.style.background = "pink";

      tiles.push(mtd);

      var tImg = new Image();
      tImg.addEventListener('error', function() { console.log(imgName + " failed to load"); }, false);
      tImg.src = imgName;
      mtd.addEventListener("mouseover", handleTileMouseOver, false);
      mtd.addEventListener("mouseout", handleTileMouseOut, false);
      mtd.addEventListener("mousedown", handleTileMouseDown, false);
      mtd.appendChild(tImg);

    }
    return tiles;
  }
  // load nfo tiles into array and style info tiles
  loadInfoTileArray(){
    var infoTiles = document.getElementsByClassName("infoTileDiv");
    //style infoTiles
    for(let i = 0; i < infoTiles.length; i++){
      infoTiles[i].style.width = "90px";
      infoTiles[i].style.height = "90px";
      infoTiles[i].style.backgroundColor = "white";
      infoTiles[i].style.border = "solid black 2px";
      infoTiles[i].style.borderRadius = "50%";
      infoTiles[i].style.marginTop = "50px";
      infoTiles[i].style.marginLeft = "3px";
    }
    return infoTiles;
  }


  loadGrid(){
    for(var i = 0; i < this.cols; i++){     // columns of rows
      this.grid[i] = [];
      for(var j = 0; j < this.rows; j++){ // start at 0
        this.grid[i][j] = new Cell(this, new JSVector((i*this.colWidth), (j*this.colWidth)),1);
        //make 10% of the cells occupied
        if(this.grid[i][j] != this.root && Math.floor(Math.random()*100) < 10 )
          this.grid[i][j].occupied = -1;
      }
    }
    //this.grid[0][0] = new Cell(this, new JSVector(0, 0), 2,0,0);
     this.root = this.grid[0][0];
    //this.grid[this.rows-1][this.cols-1] = new Cell(this, new JSVector((this.rows-1)*this.colWidth,(this.cols-1)*this.colWidth), 3,this.rows-1,this.cols-1);
     this.goal = this.grid[this.cols-1][this.rows-1]

  }  // ++++++++++++++++++++++++++++++++++++++++++++++  End LoadGrid
  drawGrid(){

    for(var i = 0; i < this.cols; i++){     // columns of rows
      for(var j = 0; j < this.rows; j++){
        this.grid[i][j].render();
        for(var k = 0; k < this.grid[i][j].neighbors.length; k++){
          if(this.grid[i][j].mark == false){
          this.grid[i][j].neighbors[k].number += 1;
        }

        }
      }
    }

  }

  createTower(tower){
    //this.towers.push(tower);
    game.currentTower = tower.id;
    console.log("CurrentTower:  " + tower.id);
  }
}//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++  End Game Class


//  +++++++++++++++++++++++++++++++++  MenuTile events
function handleTileMouseDown(){

  if(game.placingTurret) return;
  game.placingTower = true;
  game.createTower(this);
}
function handleTileMouseOver(){
  this.style.background = "red";
}
function handleTileMouseOut(){
  this.style.background = "pink";
}
//  +++++++++++++++++++++++++++++++++++  Canvas Events
function handleCanvasMouseOver(){
}
function pathFind(goal){
  var currentPath = [];


}
