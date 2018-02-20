import {TilesetRegistry} from '../../core/tileset';
import {Entity} from "../../Entity";
import {System} from "../../System";
import {TileMapComponent} from './TileMapComponent';
import {ITileData, TileMapData} from './TileMapData';
import {sortFunctions} from './utils';


export class TileMapSystem extends System {
    name: string = 'tilemap';

    addComponent(componentName: string, entity: Entity, data: TileMapData):TileMapComponent {
        let mapData = data.data;
        let _mapData = Array<ITileData>();
        let tileset = this.app.tilesetRegistry.getTileset(data.tilesetName);
        let imageWidth: number = tileset.image.width;
        let imageHeight: number = tileset.image.height;
        let framesWide: number = tileset.image.width/tileset.frameWidth;
        let framesHigh: number = tileset.image.height/tileset.frameHeight;
        mapData.forEach((_row: Array<number>, rowIndex) => {
            _row.forEach((tile, tileIndex) => {
                tile -= 1;
                if (tile > -1){
                    let xMultiplier: number = Math.floor(tile % framesWide);
                    let yMultiplier: number = Math.floor(tile / framesWide);
                    _mapData.push({
                        sx: xMultiplier * tileset.frameWidth,
                        sy: yMultiplier * tileset.frameHeight,
                        dx: tileIndex * tileset.frameWidth,
                        dy: rowIndex * tileset.frameHeight
                    });
                }
            });
        });

        _mapData.sort((<any>sortFunctions)[data.sortOrder]);
        let component = new TileMapComponent(this, entity, {
            tilesetName: data.tilesetName,
            originalMapData: mapData,
            sortOrder: data.sortOrder,
            tileset: tileset,
            mapData: _mapData
        });
        this.components.push(component);
        return component;
    }
}
