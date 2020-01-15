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
  
  paint (canvas2d, spritesheet = null, animationPercentage = 0, canBeClicked = false, x, y, offsetX = 0, offsetY = 0) {
    // Draw the base of the tile
    canvas2d.fillStyle = '#a44';
    if (!this.canMove) {
      canvas2d.fillStyle = '#654';
    } else if (canBeClicked) {
      const r = 204 + Math.abs(0.5 - animationPercentage) * 2 * 17;
      const g = 68 + Math.abs(0.5 - animationPercentage) * 2 * 34;
      const b = 68 + Math.abs(0.5 - animationPercentage) * 2 * 17;
      const a = 1.0;
      canvas2d.fillStyle = `rgba(${r},${g},${b},${a})`;
    }
    
    canvas2d.fillRect(x * TILE_SIZE + offsetX, y * TILE_SIZE + offsetY, TILE_SIZE, TILE_SIZE);

    // Draw the paths in the tile
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
        
    // Draw the center of the paths, if this tile has any paths.
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
    
    // Draw the border of the tile 
    canvas2d.strokeStyle = '#eee';
    canvas2d.lineWidth = 2;
    canvas2d.strokeRect(x * TILE_SIZE + offsetX, y * TILE_SIZE + offsetY, TILE_SIZE, TILE_SIZE);
    
    // If it's a Goal tile, draw some cheese!
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
      
      const col = 4;
      const row = (animationPercentage < 0.5) ? 0 : 1;
      canvas2d.drawImage(
        spritesheet,
        col * TILE_SIZE, row * TILE_SIZE,
        TILE_SIZE, TILE_SIZE,
        x * TILE_SIZE  + offsetX, y * TILE_SIZE + offsetY,
        TILE_SIZE, TILE_SIZE
      );
    }
  }
}

export default Tile;