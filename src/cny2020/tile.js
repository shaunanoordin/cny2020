class Tile {
  constructor (config) {
    this.south = (config && config.south) || false;
    this.north = (config && config.north) || false;
    this.east = (config && config.east) || false;
    this.west = (config && config.west) || false;
    
    this.goal = !!(config && config.goal) || false;
    this.canMove = !!(config && config.canMove) || true;
  }
}

export default Tile;