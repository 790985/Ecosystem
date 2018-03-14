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

// Game is the top level object and it contains the levels
class Game {
  constructor() {   // from setup()
    //  Game elements
    this.enemies = [];
    this.menuTileDivs = this.createMenuTileDivs();
    this.infoTileDivs = this.loadInfoTileArray();
    this.cols = 36;
    this.rows = 32;
    this.colWidth = 25;
    this.id = 0;
    this.changed = false;
    this.mouseX;
    this.mouseY;
    this.mouseObj = new JSVector(this.mouseX, this.mouseY);
    this.grid = [];
    this.neighbors = [];
    this.loadGrid();
    //  create the canvas
    this.canvas =  document.getElementById('gameCanvas');
    //this.canvas.addEventListener("mouseover", handleCanvasMouseOver, false);
    this.canvas.addEventListener("click", handleCanvasMouseClick, false);
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
    this.drawGrid();
    this.loadNumbers();
    this.displayNumbers();
    //if(this.changed){
    //  this.loadNumbers();
    //  this.changed = false;
    //}
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
  //  this.id = 0;
    var n, e, s, w;
    for(var i = 0; i < this.cols; i++){     // columns of rows
      this.grid[i] = [];
      for(var j = 0; j < this.rows; j++){
        this.grid[i][j] = new Cell(this, new JSVector((i*this.colWidth), (j*this.colWidth)), this.id, i, j);
        this.id += 1;
        //make 10% of the cells occupied
        //this.grid[32][36].occupied = 3;
        if(this.grid[i][j] != this.root && Math.floor(Math.random()*100) < 10 ){
        this.grid[i][j].occupied = -1;
      }
      }
        //this.grid[i][j].occupied = 1;


      }

      this.grid[0][0].occupied = 2;
      this.grid[this.cols-1][this.rows-1].occupied = 3;

    }
    //this.canvas.fillText(this.num.toString(), this.row*this.colWidth, this.col*this.colWidth);


    // ++++++++++++++++++++++++++++++++++++++++++++++  End LoadGrid
  drawGrid(){

    for(var i = 0; i < this.cols; i++){     // columns of rows
      for(var j = 0; j < this.rows; j++){
        this.grid[i][j].render();
      }
    }

  }
displayNumbers(){
  for(var i = 0; i < this.cols; i++){     // columns of rows
  for(var j = 0; j < this.rows; j++){
    this.context.fillStyle = 'yellow';
    this.context.fillText(this.grid[i][j].node.toString(), i*this.colWidth, j*this.colWidth+(this.colWidth/2));
  }
}}

loadNumbers(){
  //this.changed = false;
  var currentNode = 0;
  var stopChecking = false;
  this.grid[0][0].node = currentNode;
  while(!stopChecking){
    for(var i = 0; i < this.cols; i++){     // columns of rows
      for(var j = 0; j < this.rows; j++){
        if(this.grid[i][j].checkNode == true && this.grid[i][j].occupied != -1 && this.grid[i][j].node == currentNode){
        //  console.log("HI!");
          //console.log("i = " + i + "j = " + j + "Current Node = " + currentNode);
          if(j > 0){  // find north
            if(this.grid[i][j-1].node == -1 && !(this.grid[i][j-1].occupied == -1)){
              this.grid[i][j-1].node = currentNode + 1;
            }
          }
          if(j < 31){  // find south
            if(this.grid[i][j+1].node == -1 && !(this.grid[i][j+1].occupied == -1)){
              this.grid[i][j+1].node = currentNode + 1;
            }
          }
          if(i > 0){  // find west
            if(this.grid[i-1][j].node == -1 && !(this.grid[i-1][j].occupied == -1)){
              this.grid[i-1][j].node = currentNode + 1;
            }
          }
          if(i < 35){  // find east
            if(this.grid[i+1][j].node == -1 && !(this.grid[i+1][j].occupied == -1)){
              this.grid[i+1][j].node = currentNode + 1;
            }
          }
          this.grid[i][j].checkNode = false;
          stopChecking = true;

        }
    }

  }
  currentNode++;
}
  for(var i = 0; i < this.cols; i++){     // columns of rows
    for(var j = 0; j < this.rows; j++){
      this.context.fillStyle = 'yellow';
      this.context.fillText(this.grid[i][j].node.toString(), i*this.colWidth, j*this.colWidth+(this.colWidth/2));
    }
  }
}

  createTower(tower){
    this.towers.push(tower);
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
function handleCanvasMouseClick(){
  var mouseX = Math.floor(event.offsetX / game.colWidth);
  var mouseY = Math.floor(event.offsetY / game.colWidth);
  //this.mouseObj = new JSVector(mouseX, mouseY);
  if(game.grid[mouseX][mouseY].occupied == 1 || game.grid[mouseX][mouseY].occupied == -1)
  game.grid[mouseX][mouseY].occupied = -game.grid[mouseX][mouseY].occupied;
  this.changed = true;
}
//
// function onClick(){
// //  if(mouseObj.loc.x)
// }
function Pathfinding(){

}
