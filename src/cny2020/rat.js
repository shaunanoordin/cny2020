import { TILE_SIZE, DIRECTIONS } from './constants';

class Rat {
  constructor (config) {
    this.x = (config && config.x) || 0;
    this.y = (config && config.y) || 0;
    this.direction = (config && config.direction) || DIRECTIONS.EAST;
    
    this.toX = null;
    this.toY = null;
    this.movePercentage = 0;
  }
  
  paint (canvas2d, leftPadding, topPadding) {
    // TODO
    const offsetX = (this.toX - this.x) * this.movePercentage;
    const offsetY = (this.toY - this.y) * this.movePercentage;
    const x = this.x + offsetX + leftPadding + 0.5;
    const y = this.y + offsetY + topPadding + 0.5;
    
    canvas2d.fillStyle = '#c44';
    canvas2d.beginPath();
    canvas2d.arc(
      x * TILE_SIZE,
      y * TILE_SIZE,
      TILE_SIZE / 3,
      0, 2 * Math.PI);
    canvas2d.fill();

    canvas2d.strokeStyle = '#fcc';
    canvas2d.lineWidth = 4;
    canvas2d.beginPath();
    canvas2d.moveTo(x * TILE_SIZE, y * TILE_SIZE);
    switch (this.direction) {
      case DIRECTIONS.SOUTH:
        canvas2d.lineTo(x * TILE_SIZE, (y + 0.3) * TILE_SIZE);
        break;
      case DIRECTIONS.EAST:
        canvas2d.lineTo((x + 0.3) * TILE_SIZE, y * TILE_SIZE);
        break;
      case DIRECTIONS.NORTH:
        canvas2d.lineTo(x * TILE_SIZE, (y - 0.3) * TILE_SIZE);
        break;
      case DIRECTIONS.WEST:
        canvas2d.lineTo((x - 0.3) * TILE_SIZE, y * TILE_SIZE);
        break;
    }
    canvas2d.stroke();
    
  }
}

export default Rat;
