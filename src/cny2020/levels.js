import { DIRECTIONS } from './constants';
import Grid from './grid';
import Tile from './tile';

export function getLevel(level) {
  switch (level) {
    case 0:  // Starter level
      return new Grid({
        width: 3,
        height: 3,
        tiles: [
          [
            new Tile({ east: true, }),
            new Tile({ west: true, south: true, }),
            new Tile({ }),
          ],
          [
            new Tile({ }),
            null,
            new Tile({ south: true, north: true, }),
          ],
          [
            new Tile({ }),
            new Tile({ east: true, north: true, }),
            new Tile({ west: true, goal: true, }),
          ],
        ],
        rat: {
          x: 0,
          y: 0,
          direction: DIRECTIONS.EAST,
        },
      });
      
    case 1:  // Original level
      return new Grid({
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
      });
      
    case 2:
      return new Grid({
        width: 3,
        height: 3,
        tiles: [
          [
            new Tile({ south: true, east: true, }),
            new Tile({ south: true, west: true, }),
            null,
          ],
          [
            new Tile({ north: true, east: true, }),
            new Tile({ north: true, west: true, }),
            new Tile({ }),
          ],
          [
            new Tile({ north: true, east: true, }),
            new Tile({ west: true, south: true, }),
            new Tile({ west: true, goal: true, }),
          ],
        ],
        rat: {
          x: 0,
          y: 0,
          direction: DIRECTIONS.SOUTH,
        },
      });
    
    case 370:  // TNC's level
      return new Grid({
        width: 5,
        height: 5,
        tiles: [
          [
            new Tile({ south: true, }),
            new Tile({ }),
            null,
            new Tile({ }),
            new Tile({ }),
          ],
          [
            new Tile({ north: true, south: true, }),
            new Tile({ south: true, east: true, }),
            new Tile({ west: true, south: true, }),
            new Tile({ south: true, east: true, }),
            new Tile({ west: true, south: true, }),
          ],
          [
            new Tile({ north: true, east: true, }),
            new Tile({ west: true, north: true, }),
            new Tile({ north: true, south: true, }),
            new Tile({ north: true, south: true, }),
            new Tile({ north: true, south: true, }),
          ],
          [
            new Tile({ south: true, east: true, }),
            new Tile({ east: true, west: true, }),
            new Tile({ west: true, north: true, }),
            new Tile({ north: true, south: true, }),
            new Tile({ north: true, goal: true, }),
          ],
          [
            new Tile({ north: true, east: true, }),
            new Tile({ east: true, west: true, }),
            new Tile({ west: true, east: true, }),
            new Tile({ north: true, west: true, }),
            new Tile({ }),
          ],
        ],
        rat: {
          x: 0,
          y: 0,
          direction: DIRECTIONS.SOUTH,
        }
      });
  }
  
  return null;
};
