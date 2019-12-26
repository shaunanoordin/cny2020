import { TILE_SIZE, GRID_WIDTH, GRID_HEIGHT } from './constants'

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
  
  play (timeDelta) {
    
  }
  
  paint () {
    this.canvas2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    
    this.canvas2d.strokeStyle = '2px solid #888';
    this.canvas2d.beginPath();
    for (let y = 0; y < GRID_HEIGHT; y++) {
      for (let x = 0; x < GRID_HEIGHT; x++) {
        this.canvas2d.rect(TILE_SIZE * x, TILE_SIZE * y, TILE_SIZE, TILE_SIZE);
      }
    }
    this.canvas2d.stroke();
  }
  
  print (text) {
    this.messages.unshift(text);
    while (this.messages.length > 3) {
      this.messages.pop();
    }
    
    this.html.console.textContent = this.messages.join('\n');
  }
};

export default CNY2020;
