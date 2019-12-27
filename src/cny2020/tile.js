class Tile {
  constructor (config) {
    this.south = (config && config.south) || true;
    this.north = (config && config.north) || true;
    this.east = (config && config.east) || true;
    this.west = (config && config.west) || true;
    
    this.goal = (config && config.goal) || false;
  }
}

export default Tile;