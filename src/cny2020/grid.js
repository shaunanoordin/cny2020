import Tile from './tile';
import { TILE_SIZE, GRID_WIDTH, GRID_HEIGHT } from './constants';

class Grid {
  constructor (config) {
    this.width = (config && config.width) || 1;
    this.height = (config && config.height) || 1;
    
    this.tiles = (config && config.tiles) || [[ null ]];
    
    this.movingTile = null;
    this.moveFromX = null;
    this.moveFromY = null;
    this.moveToX = null;
    this.moveToY = null;
    this.movePercentage = 0;
    
    this.leftPadding = Math.floor((GRID_WIDTH - this.width) / 2);
    this.rightPadding = Math.ceil((GRID_WIDTH - this.width) / 2);
    this.topPadding = Math.floor((GRID_HEIGHT - this.height) / 2);
    this.bottomPadding = Math.ceil((GRID_HEIGHT - this.height) / 2);
  }
  
  paint (canvas2d) {
    
    for (let y = 0; y < GRID_HEIGHT; y++) {
      for (let x = 0; x < GRID_WIDTH; x++) {
        this.paint_staticTile(canvas2d, x, y);
      }
    }
    
    this.paint_movingTile(canvas2d);
  }
  
  paint_staticTile (canvas2d, x, y) {
    if (!(
      x >= this.leftPadding &&
      x < (GRID_WIDTH - this.rightPadding) &&
      y >= this.topPadding &&
      y < (GRID_HEIGHT - this.bottomPadding)
    )) {

      this.paint_blankTile(canvas2d, x, y);
      
    } else {
      
      const xIndex = x - this.leftPadding;
      const yIndex = y - this.topPadding;
      const tile = this.getTile(xIndex, yIndex)
      
      if (!tile || tile === this.movingTile) {
        this.paint_blankTile(canvas2d, x, y);
      } else {
        tile.paint(canvas2d, x, y);
      }
    }
  }
  
  paint_blankTile (canvas2d, x, y) {
    canvas2d.fillStyle = '#eee';
    canvas2d.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
  }
  
  paint_movingTile (canvas2d) {
    
    const tile = this.movingTile;
    if (!tile) return;
    
    const offsetX = TILE_SIZE * this.movePercentage * (this.moveToX - this.moveFromX);
    const offsetY = TILE_SIZE * this.movePercentage * (this.moveToY - this.moveFromY);
    
    tile.paint(
      canvas2d,
      this.moveFromX + this.leftPadding,
      this.moveFromY + this.topPadding,
      offsetX,
      offsetY
    );
    
  }
  
  getTile (x, y) {
    return (this.tiles && this.tiles[y] && this.tiles[y][x])
      ? this.tiles[y][x]
      : null;
  }
}

export default Grid;
