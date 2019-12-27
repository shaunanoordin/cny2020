import { TILE_SIZE, GRID_WIDTH, GRID_HEIGHT } from './constants';
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
    
    this.grid = new Grid();
    this.loadLevel();
    
    this.prevTime = null;
    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));
  }
  
  main (time) {
    const timeDelta = (this.prevTime) ? time - this.prevTime : time;
    this.prevTime = time;
    
    this.play(timeDelta);
    this.paint();
    
    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));
  }
  
  loadLevel () {

  }
  
  play (timeDelta) {
    
  }
  
  paint () {
    this.canvas2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
        
    
    
    for (let y = 0; y < GRID_HEIGHT; y++) {
      for (let x = 0; x < GRID_WIDTH; x++) {
        if (x < this.grid.leftPadding
            || x > this.grid.rightPadding
            || y < this.grid.topPadding
            || y > this.grid.bottomPadding) {
          this.canvas2d.fillStyle = '#eee';
          this.canvas2d.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
        } else {
          
          const tile = this.grid.tiles[y - this.grid.topPadding][x - this.grid.leftPadding];
          this.canvas2d.fillStyle = '#844';
          this.canvas2d.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
          
          this.canvas2d.lineCap = "round";
          this.canvas2d.lineWidth = 8;
          this.canvas2d.strokeStyle = '#eee';
          if (tile && tile.east) {
            this.canvas2d.beginPath();
            this.canvas2d.moveTo((x + 0.5) * TILE_SIZE, (y + 0.5) * TILE_SIZE);
            this.canvas2d.lineTo((x + 1) * TILE_SIZE, (y + 0.5) * TILE_SIZE);
            this.canvas2d.stroke();
          }
          if (tile && tile.west) {
            this.canvas2d.beginPath();
            this.canvas2d.moveTo((x + 0.5) * TILE_SIZE, (y + 0.5) * TILE_SIZE);
            this.canvas2d.lineTo((x + 0) * TILE_SIZE, (y + 0.5) * TILE_SIZE);
            this.canvas2d.stroke();
          }
          if (tile && tile.south) {
            this.canvas2d.beginPath();
            this.canvas2d.moveTo((x + 0.5) * TILE_SIZE, (y + 0.5) * TILE_SIZE);
            this.canvas2d.lineTo((x + 0.5) * TILE_SIZE, (y + 1) * TILE_SIZE);
            this.canvas2d.stroke();
          }
          if (tile && tile.north) {
            this.canvas2d.beginPath();
            this.canvas2d.moveTo((x + 0.5) * TILE_SIZE, (y + 0.5) * TILE_SIZE);
            this.canvas2d.lineTo((x + 0.5) * TILE_SIZE, (y + 0) * TILE_SIZE);
            this.canvas2d.stroke();
          }
          
        }
        
      }
    }
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
    const col = Math.floor(coords.x / TILE_SIZE) - this.grid.leftPadding;
    const row = Math.floor(coords.y / TILE_SIZE) - this.grid.topPadding;
    
    this.print(`Clicked on COL ${col} ROW ${row}`);
  }
  
  onPointerUp (e) {
    
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
