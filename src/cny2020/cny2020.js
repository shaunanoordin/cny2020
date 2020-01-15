import { TILE_SIZE, GRID_WIDTH, GRID_HEIGHT, DIRECTIONS } from './constants';
import { getLevel } from './levels';
import Grid from './grid';
import Tile from './tile';
import { ImageAsset } from './image-asset';

class CNY2020 {
  constructor () {
    this.html = {
      app: document.getElementById('app'),
      canvas: document.getElementById('canvas'),
      button: document.getElementById('button'),
    };
    this.canvas2d = this.html.canvas.getContext('2d');
    this.canvasWidth = TILE_SIZE * GRID_WIDTH;
    this.canvasHeight = TILE_SIZE * GRID_HEIGHT;
    
    this.html.canvas.width = this.canvasWidth;
    this.html.canvas.height = this.canvasHeight;
    this.html.canvas.addEventListener('pointerdown', this.onPointerDown.bind(this));
    this.html.button.addEventListener('click', this.onButtonClick.bind(this));
    
    this.animationCounter = 0;
    this.animationDuration = 2000;
    
    this.tileMovingCounter = 0;
    this.tileMovingDuration = 100;
    this.isTileMoving = false;
    
    this.isWinScreenShowing = false;
    
    this.ratMovingCounter = 0;
    this.ratMovingDuration = 1000;
    
    this.ready = false;
    this.assets = {
      sprites: new ImageAsset('assets/sprites.png'),
      startScreen: new ImageAsset('assets/start-screen.png'),
      winScreen: new ImageAsset('assets/win-screen.png'),
    };
    
    this.level = 0;
    this.grid = new Grid();
    this.loadLevel();
    
    this.isWinScreenShowing = true;
    this.html.button.textContent = 'Start!';
    
    this.prevTime = null;
    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));
  }
  
  main (time) {
    const timeStep = (this.prevTime) ? time - this.prevTime : time;
    this.prevTime = time;
    
    if (this.ready) {
      this.play(timeStep);
      this.paint();
    } else {
      this.initialisationCheck();
    }
    
    this.nextFrame = window.requestAnimationFrame(this.main.bind(this));
  }
  
  initialisationCheck () {
    // Assets check
    let allAssetsLoaded = true;
    let numLoadedAssets = 0;
    let numTotalAssets = 0;
    Object.keys(this.assets).forEach((id) => {
      const asset = this.assets[id];
      allAssetsLoaded = allAssetsLoaded && asset.loaded;
      if (asset.loaded) numLoadedAssets++;
      numTotalAssets++;
    });
    
    // Paint status
    this.canvas2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    this.canvas2d.textAlign = 'start';
    this.canvas2d.textBaseline = 'top';
    this.canvas2d.fillStyle = '#ccc';
    this.canvas2d.font = `1em monospace`
    this.canvas2d.fillText(`Loading ${numLoadedAssets} / ${numTotalAssets} `, TILE_SIZE, TILE_SIZE);
    
    if (allAssetsLoaded) {
      this.ready = true;
    }
  }
  
  loadLevel () {
    // Reset counters, etc
    this.clearMovingTile();
    this.ratMovingCounter = 0;
    this.isWinScreenShowing = false;
    
    this.html.button.textContent = 'Reset';
    this.grid = getLevel(this.level);
  }
  
  play (timeStep) {
    // Update the animation counter
    this.animationCounter = (this.animationCounter + timeStep) % this.animationDuration;
    
    // Don't do anything if the Win Screen is showing.
    if (this.isWinScreenShowing) return;
    
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
        this.doWin();
      } else {
        // Otherwise, decide what to do with the rat.      
        this.doRatLogic();
      }
    }
    
  }
  
  paint () {
    this.canvas2d.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    
    if (this.isWinScreenShowing) {
      this.paintWinScreen();
    } else {
      const animationPercentage = this.animationCounter / this.animationDuration;
      this.grid.paint(this.canvas2d, this.assets.sprites.img, animationPercentage);
    }
  }
  
  paintWinScreen () {
    const image = (this.level === 0)
      ? this.assets.startScreen.img
      : this.assets.winScreen.img;
    
    this.canvas2d.drawImage(
      image,
      0, 0, this.canvasWidth, this.canvasHeight,
      0, 0, this.canvasWidth, this.canvasHeight
    );

  }
  
  onPointerDown (e) {    
    const coords = getEventCoords(e, this.html.canvas);
    const x = Math.floor(coords.x / TILE_SIZE) - this.grid.leftPadding;
    const y = Math.floor(coords.y / TILE_SIZE) - this.grid.topPadding;
    
    this.moveTile(x, y);
  }
  
  onButtonClick (e) {
    if (this.isWinScreenShowing) {
      // If the Win Screen is showing, then the button should activate the next level, IF it exists.
      
      const nextLevelExists = !!getLevel(this.level);
      if (nextLevelExists) this.loadLevel();
    } else {
      // Restart level
      
      this.loadLevel();
    }
  }
  
  moveTile (x, y) {
    // There can only be one active moving tile at a time.
    if (this.isTileMoving) return;
    
    const tile = this.grid.getTile(x, y);
    const rat = this.grid.rat;
    
    if (!tile || !tile.canMove) return;
    
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
    if (!this.grid || !this.grid.rat) return;
    const rat = this.grid.rat;
    
    const curTile = this.grid.getTile(rat.x, rat.y);
    if (!curTile) return;
    
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
  
  doWin () {
    this.isWinScreenShowing = true;
    
    // Prepare for the next level, if any.
    this.level++;
    const nextLevelExists = !!getLevel(this.level);
    
    if (nextLevelExists) {
      this.html.button.textContent = 'Next Level!';
    } else {
      this.html.button.textContent = 'GONG XI FA CAI! You\'ve cleared all the levels!';
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
