import Tile from './tile';
import { GRID_WIDTH, GRID_HEIGHT } from './constants';

class Grid {
  constructor (config) {
    this.width = (config && config.width) || 1;
    this.height = (config && config.height) || 1;
    
    this.tiles = (config && config.tiles) || [[ new Tile() ]];
    
    this.leftPadding = Math.floor((GRID_WIDTH - this.width) / 2);
    this.rightPadding = Math.ceil((GRID_WIDTH - this.width) / 2);
    this.topPadding = Math.floor((GRID_HEIGHT - this.height) / 2);
    this.bottomPadding = Math.ceil((GRID_HEIGHT - this.height) / 2);
  }
}

export default Grid;
