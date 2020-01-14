import { TILE_SIZE, DIRECTIONS } from './constants';

class Tile {
  constructor (config) {
    this.south = (config && config.south) || false;
    this.north = (config && config.north) || false;
    this.east = (config && config.east) || false;
    this.west = (config && config.west) || false;
    
    this.goal = !!(config && config.goal) || false;
    this.canMove = !!(config && config.hasOwnProperty('canMove'))
      ? config.canMove
      : true;
  }
  
  paint (canvas2d, spritesheet, x, y, offsetX = 0, offsetY = 0) {
    canvas2d.fillStyle = '#a44';
    if (!this.canMove) canvas2d.fillStyle = '#654';
    canvas2d.fillRect(x * TILE_SIZE + offsetX, y * TILE_SIZE + offsetY, TILE_SIZE, TILE_SIZE);

    // canvas2d.lineCap = "round";
    canvas2d.lineWidth = 8;
    canvas2d.strokeStyle = '#fff';
    if (this.east) {
      canvas2d.beginPath();
      canvas2d.moveTo((x + 0.5) * TILE_SIZE + offsetX, (y + 0.5) * TILE_SIZE + offsetY);
      canvas2d.lineTo((x + 1) * TILE_SIZE + offsetX, (y + 0.5) * TILE_SIZE + offsetY);
      canvas2d.stroke();
    }
    if (this.west) {
      canvas2d.beginPath();
      canvas2d.moveTo((x + 0.5) * TILE_SIZE + offsetX, (y + 0.5) * TILE_SIZE + offsetY);
      canvas2d.lineTo((x + 0) * TILE_SIZE + offsetX, (y + 0.5) * TILE_SIZE + offsetY);
      canvas2d.stroke();
    }
    if (this.south) {
      canvas2d.beginPath();
      canvas2d.moveTo((x + 0.5) * TILE_SIZE + offsetX, (y + 0.5) * TILE_SIZE + offsetY);
      canvas2d.lineTo((x + 0.5) * TILE_SIZE + offsetX, (y + 1) * TILE_SIZE + offsetY);
      canvas2d.stroke();
    }
    if (this.north) {
      canvas2d.beginPath();
      canvas2d.moveTo((x + 0.5) * TILE_SIZE + offsetX, (y + 0.5) * TILE_SIZE + offsetY);
      canvas2d.lineTo((x + 0.5) * TILE_SIZE + offsetX, (y + 0) * TILE_SIZE + offsetY);
      canvas2d.stroke();
    }
    
    if (this.north || this.south || this.east || this.west) {
      canvas2d.fillStyle = '#fff';
      canvas2d.beginPath();
      canvas2d.arc(
        (x + 0.5) * TILE_SIZE + offsetX,
        (y + 0.5) * TILE_SIZE + offsetY,
        4,
        0, 2 * Math.PI);
      canvas2d.fill();
    }
    
    if (this.goal) {
      canvas2d.strokeStyle = '#fff';
      canvas2d.lineWidth = 4;
      canvas2d.beginPath();
      canvas2d.arc(
        (x + 0.5) * TILE_SIZE + offsetX,
        (y + 0.5) * TILE_SIZE + offsetY,
        TILE_SIZE / 3,
        0, 2 * Math.PI);
      canvas2d.stroke();
    }
  }
}

export default Tile;