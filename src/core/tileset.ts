import {AssetRegistry} from './assets';


interface ITilesetData {
    imageName: string;
    frameWidth: number;
    frameHeight: number;
}


class Tileset {
    constructor(public image: HTMLImageElement, public frameWidth: number, public frameHeight: number){}
}


interface ITileData {
    sx: number;
    sy: number;
    dx: number;
    dy: number;
}


export class TileLayer {
    tileset: Tileset;
    mapData: Array<ITileData> = [];


    constructor(public name : string, tilesetName: string, data: Array<Array<number>>, public zIndex: number) {
        this.tileset = TilesetRegistry.getTileset(tilesetName);
        let imageWidth: number = this.tileset.image.width;
        let imageHeight: number = this.tileset.image.height;
        let framesWide: number = this.tileset.image.width/this.tileset.frameWidth;
        let framesHigh: number = this.tileset.image.height/this.tileset.frameHeight;
        data.forEach((_row: Array<number>, rowIndex) => {
            _row.forEach((tile, tileIndex) => {
                tile -= 1;
                if (tile > -1){
                    let xMultiplier: number = Math.floor(tile % framesWide);
                    let yMultiplier: number = Math.floor(tile / framesWide);
                    this.mapData.push({
                        sx: xMultiplier * this.tileset.frameWidth,
                        sy: yMultiplier * this.tileset.frameHeight,
                        dx: tileIndex * this.tileset.frameWidth,
                        dy: rowIndex * this.tileset.frameHeight
                    });
                }
            });
        });
    }

    render(canvas: HTMLCanvasElement) {
        let context = canvas.getContext('2d');
        this.mapData.forEach((data: ITileData) => {
            context.drawImage(
                this.tileset.image,
                data.sx,
                data.sy,
                this.tileset.frameWidth,
                this.tileset.frameHeight,
                data.dx,
                data.dy,
                this.tileset.frameWidth,
                this.tileset.frameHeight
            )
        })
    }
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


interface ILayerData {
    name: string;
    tilesetName: string;
    data: Array<Array<number>>;
    zIndex: number;
}

export class TileManager {
    layers: Array<TileLayer> = [];

    constructor(layers: Array<ILayerData>){
        layers.forEach((layer: ILayerData, index: number) => {
            this.layers.push(new TileLayer(
                layer.name,
                layer.tilesetName,
                layer.data,
                layer.zIndex || 0
            ))
        });
        this.layers.sort(function(a: TileLayer, b: TileLayer){
            if (a.zIndex < b.zIndex) {
                return -1;
            }
            if (a.zIndex > b.zIndex) {
                return 1;
            }
            return 0;
        });
    }

    render = (canvas: HTMLCanvasElement) => {
        this.layers.forEach(function(layer){
            layer.render(canvas);
        })
    }

}
