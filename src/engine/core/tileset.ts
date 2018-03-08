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

    constructor(private assetRegistry: AssetRegistry, private tilesets: {[key: string]: Tileset} = {}) {}

    registerTileset(name: string, data: ITilesetData){
        this.tilesets[name] = new Tileset(
            this.assetRegistry.getImage(data.imageName),
            data.frameWidth,
            data.frameHeight
        )
    }

    registerTilesets(data: {[key: string]: ITilesetData}){
        for (let key in data) {
            this.registerTileset(key, data[key]);
        }
    }

    getTileset(name: string): Tileset {
        return this.tilesets[name];
    }
}
