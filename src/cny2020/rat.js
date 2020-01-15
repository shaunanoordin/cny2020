import { TILE_SIZE, DIRECTIONS } from './constants';

class Rat {
  constructor (config) {
    this.x = (config && config.x) || 0;
    this.y = (config && config.y) || 0;
    this.direction = (config && config.direction) || DIRECTIONS.SOUTH;
    
    this.toX = null;
    this.toY = null;
    this.movePercentage = 0;
  }
  
  paint (canvas2d, spritesheet, animationPercentage, leftPadding, topPadding) {
    const offsetX = (this.toX - this.x) * this.movePercentage;
    const offsetY = (this.toY - this.y) * this.movePercentage;
    const x = this.x + offsetX + leftPadding;
    const y = this.y + offsetY + topPadding;
    const midX = this.x + offsetX + leftPadding + 0.5;
    const midY = this.y + offsetY + topPadding + 0.5;
    
    canvas2d.fillStyle = 'rgba(0,0,0,0.2)';
    canvas2d.beginPath();
    canvas2d.arc(
      midX * TILE_SIZE,
      midY * TILE_SIZE,
      TILE_SIZE / 3,
      0, 2 * Math.PI);
    canvas2d.fill();

    canvas2d.strokeStyle = '#fcc';
    canvas2d.lineWidth = 4;
    canvas2d.beginPath();
    canvas2d.moveTo(midX * TILE_SIZE, midY * TILE_SIZE);
    switch (this.direction) {
      case DIRECTIONS.SOUTH:
        canvas2d.lineTo(midX * TILE_SIZE, (midY + 0.3) * TILE_SIZE);
        break;
      case DIRECTIONS.EAST:
        canvas2d.lineTo((midX + 0.3) * TILE_SIZE, midY * TILE_SIZE);
        break;
      case DIRECTIONS.NORTH:
        canvas2d.lineTo(midX * TILE_SIZE, (midY - 0.3) * TILE_SIZE);
        break;
      case DIRECTIONS.WEST:
        canvas2d.lineTo((midX - 0.3) * TILE_SIZE, midY * TILE_SIZE);
        break;
    }
    canvas2d.stroke();
    
    const col = this.direction;
    const row = ((animationPercentage >= 0.0 && animationPercentage < 0.25)
                 || (animationPercentage >= 0.5 && animationPercentage < 0.75)) 
      ? 0 : 1;
    
    canvas2d.drawImage(
      spritesheet,
      col * TILE_SIZE, row * TILE_SIZE, TILE_SIZE, TILE_SIZE,
      x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE
    );
  }
}

export default Rat;
