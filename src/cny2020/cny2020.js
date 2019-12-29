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
    this.grid = new Grid({
      width: 3,
      height: 3,
      tiles: [
        [
          new Tile({ north: true, south: true, }),
          new Tile({ north: true, east: true, }),
          new Tile({ west: true, east: true, }),
        ],
        [
          new Tile({ south: true, west: true, }),
          null,
          new Tile({ west: true, east: true, }),
        ],
        [
          new Tile({ north: true, south: true, }),
          new Tile({ north: true, east: true, }),
          new Tile({ west: true, east: true, }),
        ],
      ],
    })
  }
  
  play (timeDelta) {
    
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
