import { TILE_SIZE, GRID_WIDTH, GRID_HEIGHT, DIRECTIONS } from './constants';
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
    
    this.tileMovingCounter = 0;
    this.tileMovingDuration = 100;
    this.isTileMoving = false;
    
    this.ratMovingCounter = 0;
    this.ratMovingDuration = 1000;
    
    this.grid = new Grid();
    this.loadLevel();
    
    this.prevTime = null;
    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));
  }
  
  main (time) {
    const timeStep = (this.prevTime) ? time - this.prevTime : time;
    this.prevTime = time;
    
    this.play(timeStep);
    this.paint();
    
    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));
  }
  
  loadLevel () {
    this.clearMovingTile();
    
    this.grid = new Grid({
      width: 3,
      height: 3,
      tiles: [
        [
          new Tile({ south: true, }),
          new Tile({ }),
          new Tile({ south: true, goal: true }),
        ],
        [
          null,
          new Tile({ south: true, north: true, }),
          new Tile({ south: true, east: true, }),
        ],
        [
          new Tile({ north: true, east: true, }),
          new Tile({ west: true, north: true, }),
          new Tile({ west: true, north: true, }),
        ],
      ],
      rat: {
        x: 0,
        y: 0,
        direction: DIRECTIONS.SOUTH,
      },
    })
  }
  
  play (timeStep) {
    
    if (this.isTileMoving) {
      // If there is an active moving tile, move it.
      
      this.tileMovingCounter = (this.tileMovingCounter + timeStep);
      this.grid.movePercentage = this.tileMovingCounter / this.tileMovingDuration;
      
      // When the duration is up, clear the active moving tile, so the player can move another one.
      if (this.tileMovingCounter >= this.tileMovingDuration) {
        this.grid.tiles[this.grid.moveToY][this.grid.moveToX] = this.grid.movingTile;
        this.clearMovingTile();
      }
    }
    
    const rat = this.grid.rat;
    if (rat.toX !== null && rat.toY !== null) {
      // If the rat has a destination, move it.
      
      this.ratMovingCounter = (this.ratMovingCounter + timeStep);
      rat.movePercentage = this.ratMovingCounter / this.ratMovingDuration;
      
      // When the duration is up, stop the rat.
      if (this.ratMovingCounter >= this.ratMovingDuration) {
        rat.x = rat.toX;
        rat.y = rat.toY;
        rat.toX = null;
        rat.toY = null;
        rat.movePercentage = 0
      }
    
    } else {
      // Are we at the exit goal yet?
      const tile = this.grid.getTile(rat.x, rat.y);
      if (tile && tile.goal) {
        console.log('WIN');
        
        // TODO
      }
      
      // Otherwise, decide what to do with the rat.
      
      this.doRatLogic();
    }
    
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
    const x = Math.floor(coords.x / TILE_SIZE) - this.grid.leftPadding;
    const y = Math.floor(coords.y / TILE_SIZE) - this.grid.topPadding;
    
    this.print(`Clicked on COL ${x} ROW ${y}`);
    
    this.moveTile(x, y);
  }
  
  moveTile (x, y) {
    // There can only be one active moving tile at a time.
    if (this.isTileMoving) return;
    
    const tile = this.grid.getTile(x, y);
    const rat = this.grid.rat;
    
    if (!tile) return;
    
    // If the rat is moving to/from a tile, that tile can't be moved.
    const isRatOnTile = (rat.x === x && rat.y === y)
      || (rat.toX === x && rat.toY === y && rat.toX !== null && rat.toY !== null);
    if (isRatOnTile) return;
    
    // Check all adjacent tiles.
    const eTile = this.grid.getTile(x + 1, y);
    const wTile = this.grid.getTile(x - 1, y);
    const sTile = this.grid.getTile(x, y + 1);
    const nTile = this.grid.getTile(x, y - 1);
    
    // If the adjacent tile is empty AND within the bounds of the grid, move the tile to the empty space
    if (!eTile && (x + 1) < this.grid.width) {
      this.setMovingTile(tile, x, y, x + 1, y);
    } else if (!wTile && (x - 1) >= 0) {
      this.setMovingTile(tile, x, y, x - 1, y);
    } else if (!sTile && (y + 1) < this.grid.height) {
      this.setMovingTile(tile, x, y, x, y + 1);
    } else if (!nTile && (y - 1) >= 0) {
      this.setMovingTile(tile, x, y, x, y - 1);
    }
  }
  
  setMovingTile (tile, fromX, fromY, toX, toY) {
    this.grid.tiles[toY][toX] = null;
    this.grid.tiles[fromY][fromX] = null;
    
    this.grid.movingTile = tile;
    this.grid.moveToX = toX;
    this.grid.moveToY = toY;
    this.grid.moveFromX = fromX;
    this.grid.moveFromY = fromY;
    this.grid.movePercentage = 0;
    
    this.isTileMoving = true;
    this.tileMovingCounter = 0;
  }
  
  clearMovingTile () {
    this.grid.movingTile = null;
    
    this.isTileMoving = false;
    this.tileMovingCounter = 0;
  }
  
  doRatLogic () {
    const rat = this.grid.rat;
    
    const curTile = this.grid.getTile(rat.x, rat.y);
    
    // Figure out where the rat needs to move to next
    // The rat moves forward whenever possible, then turns right, or left, in that order.
    // The rat never moves backwards
    switch (rat.direction) {
      case DIRECTIONS.SOUTH:
        if (curTile.south) { rat.direction = DIRECTIONS.SOUTH; break; }
        if (curTile.west) { rat.direction = DIRECTIONS.WEST; break; }
        if (curTile.east) { rat.direction = DIRECTIONS.EAST; break; }
        break;
      case DIRECTIONS.EAST:
        if (curTile.east) { rat.direction = DIRECTIONS.EAST; break; }
        if (curTile.south) { rat.direction = DIRECTIONS.SOUTH; break; }
        if (curTile.north) { rat.direction = DIRECTIONS.NORTH; break; }
        break;
      case DIRECTIONS.NORTH:
        if (curTile.north) { rat.direction = DIRECTIONS.NORTH; break; }
        if (curTile.east) { rat.direction = DIRECTIONS.EAST; break; }
        if (curTile.west) { rat.direction = DIRECTIONS.WEST; break; }
        break;
      case DIRECTIONS.WEST:
        if (curTile.west) { rat.direction = DIRECTIONS.WEST; break; }
        if (curTile.north) { rat.direction = DIRECTIONS.NORTH; break; }
        if (curTile.south) { rat.direction = DIRECTIONS.SOUTH; break; }
        break;
    }
    
    let nextTile = this.grid.getTile(rat.x, rat.y, rat.direction);
    
    // Now, can the rat move forward?
    if (nextTile) {
      if (rat.direction === DIRECTIONS.SOUTH && nextTile.north) {
        rat.toX = rat.x;
        rat.toY = rat.y + 1;
        rat.movePercentage = 0;
        this.ratMovingCounter = 0;
      } else if (rat.direction === DIRECTIONS.EAST && nextTile.west) {
        rat.toX = rat.x + 1;
        rat.toY = rat.y;
        rat.movePercentage = 0;
        this.ratMovingCounter = 0;
      } else if (rat.direction === DIRECTIONS.NORTH && nextTile.south) {
        rat.toX = rat.x;
        rat.toY = rat.y - 1;
        rat.movePercentage = 0;
        this.ratMovingCounter = 0;
      } else if (rat.direction === DIRECTIONS.WEST && nextTile.east) {
        rat.toX = rat.x - 1;
        rat.toY = rat.y;
        rat.movePercentage = 0;
        this.ratMovingCounter = 0;
      }
    } 
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
