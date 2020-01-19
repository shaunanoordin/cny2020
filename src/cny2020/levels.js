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
            new Tile({ east: true, canMove: false, }),
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
            new Tile({ west: true, goal: true, canMove: false, }),
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
            new Tile({ south: true, canMove: false, }),
            new Tile({ }),
            new Tile({ south: true, goal: true, canMove: false, }),
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
            new Tile({ west: true, goal: true, canMove: false, }),
          ],
        ],
        rat: {
          x: 0,
          y: 0,
          direction: DIRECTIONS.SOUTH,
        },
      });
    
    case 3:
      return new Grid({
        width: 5,
        height: 3,
        tiles: [
          [
            new Tile({ e: true, canMove: false, }),
            null,
            new Tile({ s: true, e: true, canMove: false, }),
            null,
            new Tile({ w: true, e: true, }),
          ],
          [
            new Tile({ s: true, n: true, }),
            new Tile({ w: true, s: true, }),
            new Tile({ s: true, n: true, canMove: false, }),
            new Tile({ w: true, s: true, }),
            new Tile({ n: true, s: true, }),
          ],
          [
            new Tile({ n: true, e: true, }),
            new Tile({ s: true, n: true, }),
            new Tile({ n: true, w: true, canMove: false, }),
            new Tile({ n: true, e: true, canMove: false, }),
            new Tile({ w: true, goal: true, canMove: false, }),
          ],
        ],
        rat: {
          x: 0,
          y: 0,
          direction: DIRECTIONS.EAST,
        },
      });
    
    case 4:
      return new Grid({
        width: 5,
        height: 3,
        tiles: [
          [
            new Tile({ e: true, }),
            null,
            new Tile({ s: true, e: true, canMove: false, }),
            null,
            new Tile({ w: true, e: true, }),
          ],
          [
            new Tile({ s: true, n: true, }),
            new Tile({ w: true, s: true, }),
            new Tile({ s: true, n: true, canMove: false, }),
            new Tile({ w: true, n: true, }),
            new Tile({ n: true, s: true, }),
          ],
          [
            new Tile({ n: true, e: true, }),
            new Tile({ s: true, n: true, }),
            new Tile({ n: true, w: true, canMove: false, }),
            new Tile({ n: true, e: true, }),
            new Tile({ w: true, goal: true, }),
          ],
        ],
        rat: {
          x: 0,
          y: 0,
          direction: DIRECTIONS.EAST,
        },
      });
    
    case 5:
      return new Grid({
        width: 5,
        height: 5,
        tiles: [
          [
            new Tile({ e: true, canMove: false, }),
            new Tile({ w: true, s: true, canMove: false, }),
            new Tile({ e: true, s: true, canMove: false, }),
            new Tile({ e: true, w: true, canMove: false, }),
            new Tile({ s: true, w: true, canMove: false, }),
          ],
          [
            new Tile({ w: true, n: true, }),
            new Tile({ }),
            new Tile({ s: true, n: true, canMove: false, }),
            new Tile({ w: true, n: true, }),
            new Tile({ w: true, e: true, }),
          ],
          [
            new Tile({ n: true, s: true, }),
            null,
            new Tile({ n: true, e: true, w: true, s: true, canMove: false, }),
            null,
            new Tile({ s: true, n: true, }),
          ],
          [
            new Tile({ w: true, s: true, }),
            new Tile({ n: true, e: true, }),
            new Tile({ n: true, s: true, canMove: false, }),
            new Tile({ w: true, s: true, }),
            new Tile({ e: true, s: true, }),
          ],
          [
            new Tile({ e: true, goal: true, canMove: false, }),
            new Tile({ e: true, w: true, canMove: false, }),
            new Tile({ n: true, w: true, canMove: false,  }),
            new Tile({ canMove: false, }),
            new Tile({ canMove: false, }),
          ],
        ],
        rat: {
          x: 0,
          y: 0,
          direction: DIRECTIONS.EAST,
        },
      });
      
    case 6:  // Super challenge
      return new Grid({
        width: 11,
        height: 5,
        tiles: [
          [
            new Tile({ e: true, s: true, }),
            new Tile({ }),
            new Tile({ w: true, e: true, }),
            new Tile({ w: true, s: true, canMove: false, }),
            new Tile({ e: true, n: true, }),
            new Tile({ e: true, s: true, }),
            null,
            new Tile({ e: true, w: true, canMove: false, }),
            new Tile({ e: true, n: true, }),
            new Tile({ w: true, e: true, }),
            new Tile({ }),
          ],
          [
            null,
            new Tile({ w: true, e: true, }),
            new Tile({ w: true, e: true, }),
            new Tile({ w: true, n: true, canMove: false, }),
            new Tile({ s: true, w: true, }),
            new Tile({ w: true, n: true, }),
            new Tile({ w: true, e: true, }),
            new Tile({ w: true, s: true, canMove: false, }),
            new Tile({ s: true, w: true, }),
            new Tile({ s: true, w: true, }),
            null,
          ],
          [
            new Tile({ n: true, s: true, canMove: false, }),
            new Tile({ canMove: false, }),
            new Tile({ s: true, e: true, canMove: false, }),
            new Tile({ w: true, s: true, canMove: false, }),
            new Tile({ canMove: false, }),
            new Tile({ canMove: false, }),
            new Tile({ e: true, s: true, canMove: false, }),
            new Tile({ n: true, e: true, w: true, s: true, canMove: false, }),
            new Tile({ w: true, s: true, canMove: false, }),
            new Tile({ canMove: false, }),
            new Tile({ s: true, n: true, canMove: false, }),
          ],
          [
            null,
            new Tile({ s: true, n: true, }),
            new Tile({ w: true, n: true, }),
            new Tile({ n: true, s: true, canMove: false, }),
            new Tile({ s: true, e: true, }),
            new Tile({ }),
            new Tile({ e: true, w: true, }),
            new Tile({ n: true, canMove: false, goal: true, }),
            null,
            new Tile({ n: true, s: true, }),
            new Tile({ e: true, w: true, }),
          ],
          [
            new Tile({ n: true, e: true, }),
            new Tile({ e: true, s: true, }),
            new Tile({ w: true, n: true, }),
            new Tile({ n: true, e: true, canMove: false, }),
            null,
            new Tile({ w: true, n: true, }),
            new Tile({ w: true, n: true, }),
            new Tile({ canMove: false, }),
            new Tile({ n: true, e: true, }),
            new Tile({ w: true, n: true, }),
            new Tile({ n: true, s: true, }),
          ],
        ],
        rat: {
          x: 0,
          y: 0,
          direction: DIRECTIONS.EAST,
        },
      });
    
    case 7:  // Original level, remixed for final
      return new Grid({
        width: 3,
        height: 3,
        tiles: [
          [
            new Tile({ south: true, canMove: false, }),
            new Tile({ }),
            new Tile({ south: true, goal: true, }),
          ],
          [
            null,
            new Tile({ south: true, north: true, }),
            new Tile({ south: true, east: true, }),
          ],
          [
            new Tile({ north: true, east: true, }),
            new Tile({ west: true, north: true, }),
            new Tile({ west: true, south: true, }),
          ],
        ],
        rat: {
          x: 0,
          y: 0,
          direction: DIRECTIONS.SOUTH,
        },
      });
    
    // The Lost Levels
    // --------------------------------
    
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
    
    case 100:  // Troll level
      return new Grid({
        width: 11,
        height: 5,
        tiles: [
          [
            new Tile({ }),
            new Tile({ s: true, e: true }),
            new Tile({ e: true, w: true }),
            new Tile({ w: true, }),
            new Tile({ s: true, e: true, }),
            new Tile({ w: true, s: true}),
            new Tile({ s: true, }),
            new Tile({ s: true, }),
            new Tile({ }),
            new Tile({ s: true, }),
            new Tile({ }),
          ],
          [
            new Tile({ }),
            new Tile({ s: true, n: true, }),
            new Tile({ }),
            new Tile({ }),
            new Tile({ s: true, n: true, }),
            new Tile({ s: true, n: true, }),
            new Tile({ s: true, n: true, }),
            new Tile({ n: true, e: true, }),
            new Tile({ w: true, s: true, e: true, }),
            new Tile({ n: true, w: true, }),
            new Tile({ }),
          ],
          [
            new Tile({ e: true, canMove: false, }),
            new Tile({ s: true, n: true, }),
            new Tile({ }),
            new Tile({ }),
            new Tile({ s: true, n: true, }),
            new Tile({ s: true, n: true, }),
            new Tile({ s: true, n: true, }),
            new Tile({ }),
            new Tile({ s: true, n: true, }),
            null,
            new Tile({ goal: true, w: true }),
          ],
          [
            new Tile({ }),
            new Tile({ s: true, n: true, }),
            new Tile({ }),
            new Tile({ }),
            new Tile({ s: true, n: true, }),
            new Tile({ s: true, n: true, }),
            new Tile({ s: true, n: true, }),
            new Tile({ }),
            new Tile({ s: true, n: true, }),
            new Tile({ }),
            new Tile({ }),
          ],
          [
            new Tile({ }),
            new Tile({ e: true, n: true, }),
            new Tile({ e: true, w: true, }),
            new Tile({ w: true, }),
            new Tile({ n: true, }),
            new Tile({ n: true, e: true, }),
            new Tile({ n: true, w: true, }),
            new Tile({ }),
            new Tile({ n: true, }),
            new Tile({ }),
            new Tile({ }),
          ],
        ],
        rat: {
          x: 0,
          y: 2,
          direction: DIRECTIONS.EAST,
        },
      });
  }
  
  return null;
};
