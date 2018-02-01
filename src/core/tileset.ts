import {AssetRegistry} from './assets';


interface ITilesetData {
    imageName: string;
    frameWidth: number;
    frameHeight: number;
}

export class Tileset { // Pallete
    constructor(public image: HTMLImageElement, public frameWidth: number, public frameHeight: number){}
}


export class TilesetRegistry {

    private static tilesets: {[key: string]: Tileset} = {};

    static registerTileset(name: string, data: ITilesetData){
        TilesetRegistry.tilesets[name] = new Tileset(
            AssetRegistry.getImage(data.imageName),
            data.frameWidth,
            data.frameHeight
        )
    }

    static registerTilesets(data: {[key: string]: ITilesetData}){
        for (let key in data) {
            TilesetRegistry.registerTileset(key, data[key]);
        }
    }

    static getTileset(name: string): Tileset {
        return TilesetRegistry.tilesets[name];
    }
}
