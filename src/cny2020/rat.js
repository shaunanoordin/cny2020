import { TILE_SIZE, DIRECTIONS } from './constants';

class Rat {
  constructor (config) {
    this.x = (config && config.x) || 0;
    this.y = (config && config.y) || 0;
    this.direction = (config && config.direction) || DIRECTIONS.EAST;
    
    this.fromX = 0;
    this.fromY = 0;
    this.movePercentage = 0;
  }
  
  paint (canvas2d, leftPadding, topPadding) {
    console.log(this.x, this.y);
    
    // TODO
    canvas2d.fillStyle = '#c44';
    canvas2d.beginPath();
    canvas2d.arc(
      (this.x + leftPadding + 0.5) * TILE_SIZE,
      (this.y + topPadding + 0.5) * TILE_SIZE,
      TILE_SIZE / 3,
      0, 2 * Math.PI);
    canvas2d.fill();
  }
}

export default Rat;
