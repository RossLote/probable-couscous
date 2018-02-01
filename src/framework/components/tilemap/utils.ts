import {ITileData} from './TileMapData';

export const sortFunctions = {
    topLeft:  function(a: ITileData, b: ITileData):number {
        if (a.dy < b.dy) {
            return 1;
        }
        if (a.dy > b.dy) {
            return -1;
        }
        if (a.dx < b.dx) {
            return 1;
        }
        if (a.dx > b.dx) {
            return -1;
        }
        return 0;
    },
    topRight:  function(a: ITileData, b: ITileData):number {
        if (a.dy < b.dy) {
            return 1;
        }
        if (a.dy > b.dy) {
            return -1;
        }
        if (a.dx > b.dx) {
            return 1;
        }
        if (a.dx < b.dx) {
            return -1;
        }
        return 0;
    },
    bottomLeft:  function(a: ITileData, b: ITileData):number {
        if (a.dy > b.dy) {
            return 1;
        }
        if (a.dy < b.dy) {
            return -1;
        }
        if (a.dx < b.dx) {
            return 1;
        }
        if (a.dx > b.dx) {
            return -1;
        }
        return 0;
    },
    bottomRight:  function(a: ITileData, b: ITileData):number {
        if (a.dy > b.dy) {
            return 1;
        }
        if (a.dy < b.dy) {
            return -1;
        }
        if (a.dx > b.dx) {
            return 1;
        }
        if (a.dx < b.dx) {
            return -1;
        }
        return 0;
    },

}
