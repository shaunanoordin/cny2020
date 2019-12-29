import Tile from './tile';
import { TILE_SIZE, GRID_WIDTH, GRID_HEIGHT } from './constants';

class Grid {
  constructor (config) {
    this.width = (config && config.width) || 1;
    this.height = (config && config.height) || 1;
    
    this.tiles = (config && config.tiles) || [[ null ]];
    
    this.leftPadding = Math.floor((GRID_WIDTH - this.width) / 2);
    this.rightPadding = Math.ceil((GRID_WIDTH - this.width) / 2);
    this.topPadding = Math.floor((GRID_HEIGHT - this.height) / 2);
    this.bottomPadding = Math.ceil((GRID_HEIGHT - this.height) / 2);  }
  
  paint (canvas2d) {
    
    for (let y = 0; y < GRID_HEIGHT; y++) {
      for (let x = 0; x < GRID_WIDTH; x++) {
        
        if (!(
          x >= this.leftPadding &&
          x < (GRID_WIDTH - this.rightPadding) &&
          y >= this.topPadding &&
          y < (GRID_HEIGHT - this.bottomPadding)
        )) {
          
          canvas2d.fillStyle = '#eee';
          canvas2d.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
          
        } else {
          
          const xIndex = x - this.leftPadding;
          const yIndex = y - this.topPadding;
          
          const tile = (this.tiles && this.tiles[yIndex])
            ? this.tiles[yIndex][xIndex]
            : undefined;
          
          if (tile) {
            canvas2d.fillStyle = '#844';
            canvas2d.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
          } else {
            canvas2d.fillStyle = '#666';
            canvas2d.fillRect(x * TILE_SIZE, y * TILE_SIZE, TILE_SIZE, TILE_SIZE);
          }
          
          // canvas2d.lineCap = "round";
          canvas2d.lineWidth = 8;
          canvas2d.strokeStyle = '#fff';
          if (tile && tile.east) {
            canvas2d.beginPath();
            canvas2d.moveTo((x + 0.5) * TILE_SIZE, (y + 0.5) * TILE_SIZE);
            canvas2d.lineTo((x + 1) * TILE_SIZE, (y + 0.5) * TILE_SIZE);
            canvas2d.stroke();
          }
          if (tile && tile.west) {
            canvas2d.beginPath();
            canvas2d.moveTo((x + 0.5) * TILE_SIZE, (y + 0.5) * TILE_SIZE);
            canvas2d.lineTo((x + 0) * TILE_SIZE, (y + 0.5) * TILE_SIZE);
            canvas2d.stroke();
          }
          if (tile && tile.south) {
            canvas2d.beginPath();
            canvas2d.moveTo((x + 0.5) * TILE_SIZE, (y + 0.5) * TILE_SIZE);
            canvas2d.lineTo((x + 0.5) * TILE_SIZE, (y + 1) * TILE_SIZE);
            canvas2d.stroke();
          }
          if (tile && tile.north) {
            canvas2d.beginPath();
            canvas2d.moveTo((x + 0.5) * TILE_SIZE, (y + 0.5) * TILE_SIZE);
            canvas2d.lineTo((x + 0.5) * TILE_SIZE, (y + 0) * TILE_SIZE);
            canvas2d.stroke();
          }
          
        }
      }
    }
  }
}

export default Grid;
