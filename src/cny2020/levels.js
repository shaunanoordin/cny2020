import { DIRECTIONS } from './constants';
import Grid from './grid';
import Tile from './tile';

export function getLevel(level) {
  switch (level) {
    case 0:
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
  }
  
  return null;
};