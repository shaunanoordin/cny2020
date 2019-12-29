import { TILE_SIZE, GRID_WIDTH, GRID_HEIGHT, MODES } from './constants';
import Grid from './grid';
import Tile from './tile';

class CNY2020 {
  constructor () {
    this.html = {
      app: document.getElementById('app'),
      canvas: document.getElementById('canvas'),
      console: document.getElementById('console'),
    };
    this.canvas2d = this.html.canvas.getContext('2d');
    this.canvasWidth = TILE_SIZE * GRID_WIDTH;
    this.canvasHeight = TILE_SIZE * GRID_HEIGHT;
    this.messages = [];
    
    this.html.canvas.width = this.canvasWidth;
    this.html.canvas.height = this.canvasHeight;
    this.html.canvas.addEventListener('pointerdown', this.onPointerDown.bind(this));
    
    this.transitionCounter = 0;
    this.transitionDuration = 1000;
    
    this.mode = MODES.IDLE;
    this.grid = new Grid();
    this.loadLevel();
    
    this.prevTime = null;
    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));
  }
  
  main (time) {
    const timeStep = (this.prevTime) ? time - this.prevTime : time;
    this.prevTime = time;
    
    this.play(timeStep);
    this.paint();
    
    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));
  }
  
  loadLevel () {
    this.mode = MODES.IDLE;
    
    this.grid = new Grid({
      width: 3,
      height: 3,
      tiles: [
        [
          new Tile({ north: true, south: true, }),
          new Tile({ north: true, west: true, }),
          new Tile({ west: true, east: true, }),
        ],
        [
          new Tile({ south: true, west: true, }),
          null,
          new Tile({ south: true, east: true, }),
        ],
        [
          new Tile({ north: true, south: true, }),
          new Tile({ north: true, east: true, }),
          new Tile({ west: true, east: true, }),
        ],
      ],
    })
  }
  
  play (timeStep) {
    
    
    if (this.mode === MODES.TILES_MOVING) {
      this.transitionCounter = (this.transitionCounter + timeStep);
      
      if (this.transitionCounter > this.transitionDuration) {
        this.mode = MODES.IDLE;
        this.transitionCounter = 0;
      }
    }
  }
  
  paint () {
    this.canvas2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    
    this.grid.paint(this.canvas2d);
  }
  
  print (text) {
    this.messages.unshift(text);
    while (this.messages.length > 3) {
      this.messages.pop();
    }
    
    this.html.console.textContent = this.messages.join('\n');
  }
  
  onPointerDown (e) {    
    const coords = getEventCoords(e, this.html.canvas);
    const x = Math.floor(coords.x / TILE_SIZE) - this.grid.leftPadding;
    const y = Math.floor(coords.y / TILE_SIZE) - this.grid.topPadding;
    
    this.print(`Clicked on COL ${x} ROW ${y}`);
    
    this.moveTile(x, y)
  }
  
  onPointerUp (e) {
    
  }
  
  moveTile (x, y) {
    if (this.mode !== MODES.IDLE) return;
    
    const tile = this.grid.getTile(x, y);
    
    if (!tile) return;
    
    const eTile = this.grid.getTile(x + 1, y);
    const wTile = this.grid.getTile(x - 1, y);
    const sTile = this.grid.getTile(x, y + 1);
    const nTile = this.grid.getTile(x, y - 1);
    
    if (!eTile && (x + 1) < this.grid.width) {
      this.grid.tiles[y][x + 1] = tile;
      this.grid.tiles[y][x] = null;
      
      this.modes = MODES.TILES_MOVING;
      this.transitionCounter = 0;
    } else if (!wTile && (x - 1) >= 0) {
      this.grid.tiles[y][x - 1] = tile;
      this.grid.tiles[y][x] = null;
      
      this.modes = MODES.TILES_MOVING;
      this.transitionCounter = 0;
    } else if (!sTile && (y + 1) < this.grid.height) {
      this.grid.tiles[y + 1][x] = tile;
      this.grid.tiles[y][x] = null;
      
      this.modes = MODES.TILES_MOVING;
      this.transitionCounter = 0;
    } else if (!nTile && (y - 1) >= 0) {
      this.grid.tiles[y - 1][x] = tile;
      this.grid.tiles[y][x] = null;
      
      this.modes = MODES.TILES_MOVING;
      this.transitionCounter = 0;
    }
  }
};

function getEventCoords (event, element) {
  const xRatio = (element.width && element.offsetWidth) ? element.width / element.offsetWidth : 1;
  const yRatio = (element.height && element.offsetHeight) ? element.height / element.offsetHeight : 1;
  
  const x = event.offsetX * xRatio;
  const y = event.offsetY * yRatio;
  return { x, y };
}

export default CNY2020;
